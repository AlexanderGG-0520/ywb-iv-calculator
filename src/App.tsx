import { useEffect, useRef, useState, type FormEvent } from "react";
import { calculateStats, isValidIvSpread, ivWeightedTotal, zeroBlock } from "./engine/calculationEngine";
import { SCORE_PROFILE_IDS, SCORE_PROFILE_LABELS } from "./engine/scoring";
import { STAT_KEYS, type ScoreProfileId, type SearchInput, type SearchResponse, type StatBlock } from "./engine/types";
import { YOKAI, getYokaiSpecies } from "./engine/yokaiData";
const LABELS: Record<keyof StatBlock,string> = {hp:"HP",strength:"ちから",spirit:"ようりょく",defense:"まもり"};
const initial = YOKAI.find(s=>s.name==="ブシニャン") ?? YOKAI[0];
const startIv:StatBlock={hp:20,strength:10,spirit:10,defense:10};
const startLevel=50;
const startObserved=calculateStats(initial,startLevel,startIv);
type Mode="reverse"|"forward";
function NumberField(props:{value:number,onChange:(n:number)=>void,min?:number,max?:number,step?:number,ariaLabel:string}) {
 return <input type="number" value={Number.isFinite(props.value)?props.value:""} min={props.min} max={props.max} step={props.step??1}
  aria-label={props.ariaLabel} onChange={e=>props.onChange(e.currentTarget.value==="" ? NaN : Number(e.currentTarget.value))}/>;
}
export default function App(){
 const [mode,setMode]=useState<Mode>("reverse");
 const [speciesId,setSpeciesId]=useState(initial.id);
 const [query,setQuery]=useState("");
 const [level,setLevel]=useState(startLevel);
 const [observed,setObserved]=useState<StatBlock>(startObserved);
 const [equipment,setEquipment]=useState<StatBlock>(zeroBlock());
 const [iv,setIv]=useState<StatBlock>(startIv);
 const [showEquipment,setShowEquipment]=useState(false);
 const [profile,setProfile]=useState<ScoreProfileId>("balanced");
 const [limit,setLimit]=useState(30);
 const [response,setResponse]=useState<SearchResponse|null>(null);
 const [forward,setForward]=useState<StatBlock|null>(null);
 const [pending,setPending]=useState(false);
 const [error,setError]=useState("");
 const workerRef=useRef<Worker|null>(null);
 useEffect(()=>()=>workerRef.current?.terminate(),[]);
 const species=getYokaiSpecies(speciesId);
 const filtered=YOKAI.filter(s=>!query || s.name.toLocaleLowerCase().includes(query.toLocaleLowerCase()) || String(s.number).includes(query)).slice(0,430);
 const updateBlock=(field:"observed"|"equipment"|"iv",stat:keyof StatBlock,value:number)=>{
  const setter=field==="observed"?setObserved:field==="equipment"?setEquipment:setIv;
  setter(prev=>({...prev,[stat]:value}));setResponse(null);setForward(null);setError("");
 };
 const changeSpecies=(next:string)=>{
  setSpeciesId(next);setResponse(null);setForward(null);setError("");
  const selected=getYokaiSpecies(next);
  if(Number.isInteger(level)&&level>=1&&level<=99)setObserved(calculateStats(selected,level,startIv));
 };
 const changeLevel=(value:number)=>{
  setLevel(value);setResponse(null);setForward(null);setError("");
 };
 function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();setError("");setResponse(null);setForward(null);
  if(!Number.isInteger(level)||level<1||level>99){setError("レベルは1〜99の整数を入力してください。");return}
  try {
   if(mode==="forward"){
    if(!isValidIvSpread(iv)){setError("個体値の合計が40になるよう入力してください（HPは偶数で半分として計算）。");return}
    setForward(calculateStats(species,level,iv,equipment));return;
   }
   for(const stat of STAT_KEYS){
    if(!Number.isInteger(observed[stat])||observed[stat]<1||!Number.isInteger(equipment[stat]))
      throw new Error("実測ステータスと装備補正は整数で入力してください。");
   }
   workerRef.current?.terminate();
   const worker=new Worker(new URL("./workers/reverseSearch.worker.ts",import.meta.url),{type:"module"});
   workerRef.current=worker;
   setPending(true);
   const input:SearchInput={speciesId,level,observed,equipment,scoreProfile:profile,maxResults:limit};
   worker.onmessage=(event:MessageEvent<{ok:boolean,response?:SearchResponse,error?:string}>)=>{
    if(workerRef.current!==worker)return;
    setPending(false);
    if(event.data.ok && event.data.response)setResponse(event.data.response);
    else setError(event.data.error??"計算に失敗しました。");
    worker.terminate();workerRef.current=null;
   };
   worker.onerror=()=>{
    if(workerRef.current!==worker)return;
    setPending(false);setError("逆算処理を実行できませんでした。");
    worker.terminate();workerRef.current=null;
   };
   worker.postMessage(input);
  }catch(err){setPending(false);setError(err instanceof Error?err.message:String(err))}
 }
 const reset=()=>{
  setEquipment(zeroBlock());setIv(startIv);
  setObserved(calculateStats(species,level>=1&&level<=99?level:50,startIv));
  setResponse(null);setForward(null);setError("");
 };
 return <div className="page">
   <header className="masthead">
    <div className="mast-inner">
     <span className="eyebrow">YO-KAI WATCH BLASTERS · IV TOOLS</span>
     <h1>バスターズ <span>個体値逆算器</span></h1>
     <p>赤猫団・白犬隊・月兎組に対応。4ステータスから加重40ポイントの個体値候補を逆算。</p>
     <div className="facts"><span>月兎組データ {YOKAI.length} 件</span><span>Lv.1〜99</span><span>float32精度</span><span>装備補正対応</span></div>
    </div>
   </header>
   <main className="layout">
    <section className="panel input-panel">
     <div className="section-head"><h2>条件を入力</h2><button type="button" className="text-button" onClick={reset}>入力をリセット</button></div>
     <div className="segmented" role="group" aria-label="計算モード">
      <button type="button" className={mode==="reverse"?"active":""} aria-pressed={mode==="reverse"} onClick={()=>{setMode("reverse");setResponse(null);setForward(null);}}>個体値を逆算</button>
      <button type="button" className={mode==="forward"?"active":""} aria-pressed={mode==="forward"} onClick={()=>{setMode("forward");setResponse(null);setForward(null);}}>ステータスを順算</button>
     </div>
     <form onSubmit={submit}>
      <div className="input-row">
       <label className="field"><span>妖怪を検索</span><input type="search" placeholder="名前・図鑑番号で絞り込み" value={query} onChange={e=>setQuery(e.currentTarget.value)}/></label>
       <label className="field"><span>レベル</span><NumberField ariaLabel="レベル" value={level} onChange={changeLevel} min={1} max={99}/></label>
      </div>
      <label className="field"><span>対象の妖怪</span><select value={speciesId} onChange={e=>changeSpecies(e.currentTarget.value)}>
       {!filtered.some(s=>s.id===speciesId)&&<option value={speciesId}>{species.number}. {species.name}</option>}
       {filtered.map(s=><option key={s.id} value={s.id}>{s.number}. {s.name}</option>)}
      </select></label>
      <div className="species-summary"><span>図鑑No. {species.number}</span><b>{species.name}</b><span>Base A / Base B: {STAT_KEYS.map(k=>species.baseA[k]+"/"+species.baseB[k]).join(" · ")}</span></div>
      {mode==="reverse" ? <>
       <div className="subhead"><h3>ゲーム内のステータス</h3><small>装備を外した値が最も簡単</small></div>
       <div className="stats-grid">
        {STAT_KEYS.map(key=><label className="stat-field" key={key}><span>{LABELS[key]}</span><NumberField ariaLabel={"実測"+LABELS[key]} value={observed[key]} onChange={value=>updateBlock("observed",key,value)} min={1}/></label>)}
       </div>
       <button className="reveal" type="button" aria-expanded={showEquipment} onClick={()=>setShowEquipment(v=>!v)}>
        <span>{showEquipment?"−":"＋"} 装備補正を入力</span><span className="muted">未装備なら0</span>
       </button>
       {showEquipment&&<div className="stats-grid subgrid">{STAT_KEYS.map(key=><label className="stat-field" key={key}><span>{LABELS[key]} 補正</span><NumberField ariaLabel={"装備"+LABELS[key]} value={equipment[key]} onChange={value=>updateBlock("equipment",key,value)}/></label>)}</div>}
       <div className="input-row">
        <label className="field"><span>評価基準（結果の並び順）</span><select value={profile} onChange={e=>{setProfile(e.currentTarget.value as ScoreProfileId);setResponse(null)}}>
         {SCORE_PROFILE_IDS.map(p=><option key={p} value={p}>{SCORE_PROFILE_LABELS[p]}</option>)}
        </select></label>
        <label className="field"><span>表示候補数</span><select value={limit} onChange={e=>{setLimit(Number(e.currentTarget.value));setResponse(null)}}>
         {[10,20,30,50,100,200,500].map(n=><option value={n} key={n}>{n}</option>)}
        </select></label>
       </div>
       <p className="hint">評価基準は強さの確率ではなく、用途別の並べ替えです。</p>
      </> : <>
       <div className="subhead"><h3>個体値を入力</h3><small>HPは2刻み</small></div>
       <div className="stats-grid">{STAT_KEYS.map(key=><label className="stat-field" key={key}><span>{LABELS[key]} IV</span>
        <NumberField ariaLabel={"個体値"+LABELS[key]} value={iv[key]} step={key==="hp"?2:1} min={0} max={key==="hp"?80:40} onChange={value=>updateBlock("iv",key,value)}/></label>)}</div>
       <p className={"iv-total "+(isValidIvSpread(iv)?"good":"bad")}>加重個体値合計: {ivWeightedTotal(iv)} / 40
        {isValidIvSpread(iv)?" ✓":"（40になるよう調整）"}</p>
       <button className="reveal" type="button" aria-expanded={showEquipment} onClick={()=>setShowEquipment(v=>!v)}>＋ 装備補正</button>
       {showEquipment&&<div className="stats-grid subgrid">{STAT_KEYS.map(key=><label className="stat-field" key={key}><span>{LABELS[key]} 補正</span><NumberField ariaLabel={"装備"+LABELS[key]} value={equipment[key]} onChange={value=>updateBlock("equipment",key,value)}/></label>)}</div>}
      </>}
      <button className="primary" type="submit" disabled={pending}>{pending?"逆算中…":mode==="reverse"?"個体値を逆算する":"ステータスを計算する"}</button>
      {error&&<p className="error" role="alert">{error}</p>}
     </form>
    </section>
    <section className="panel result-panel" aria-live="polite">
     <div className="section-head"><h2>計算結果</h2><span className="muted">バスターズ専用計算式</span></div>
     {mode==="reverse" && response ? <>
      <div className="result-total"><strong>{response.summary.validCandidateCount.toLocaleString("ja-JP")}</strong><span>成立する候補</span></div>
      <p className="hint">{response.summary.validCandidateCount===0?"条件に一致する個体値はありません。妖怪、レベル、装備補正を確認してください。":
       response.summary.validCandidateCount===1?"個体値を一意に特定できました。":
       "複数候補が成立します。下表は指定した評価基準での上位候補です。"}</p>
      {response.summary.validCandidateCount>0&&<>
       <h3>個体値の可能範囲 <small>全候補から算出</small></h3>
       <div className="ranges">{STAT_KEYS.map(key=>{
        const range=response.summary.ranges[key];
        return <div className="range" key={key}><span>{LABELS[key]}</span><b>{range?range.min===range.max?range.min:range.min+"–"+range.max:"—"}</b></div>
       })}</div>
       <div className="subhead"><h3>上位候補</h3><small>{response.summary.displayedCount}件表示 / 全{response.summary.validCandidateCount}件</small></div>
       <div className="table-scroll"><table><thead><tr><th>#</th>{STAT_KEYS.map(key=><th key={key}>{LABELS[key]} IV</th>)}<th>評価点</th></tr></thead>
       <tbody>{response.results.map((row,i)=><tr key={row.id}><td>{i+1}</td>{STAT_KEYS.map(key=><td key={key}>{row.iv[key]}</td>)}<td>{row.score.toFixed(1)}</td></tr>)}</tbody></table></div>
      </>}
     </> : mode==="forward" && forward ? <>
      <div className="result-total"><strong>Lv.{level}</strong><span>{species.name} の計算値</span></div>
      <div className="ranges">{STAT_KEYS.map(key=><div className="range" key={key}><span>{LABELS[key]}</span><b>{forward[key]}</b></div>)}</div>
      <p className="hint">装備補正適用後のゲーム内表示値です。</p>
     </> : <div className="empty"><div className="empty-symbol">IV</div><h3>ここに計算結果が表示されます</h3><p>妖怪とステータスを入力して「逆算する」を押してください。</p></div>}
     <div className="notes"><h3>計算上の注意</h3><p>HP個体値の半分と、他の3項目の個体値の合計は必ず40です。すばやさは移動速度の区分であり、個体値の対象ではありません。</p>
      <p>Lv.1では個体値がステータスに現れません。装備効果や実測値が一致しない場合、逆算結果を確定値として扱わないでください。</p></div>
    </section>
   </main>
   <footer className="footer"><p>非公式ファンツール · 妖怪ウォッチバスターズ 赤猫団・白犬隊・月兎組</p>
    <a href="https://togenyanweb.appspot.com/Yokai/ywb/yokaiList_getto.html" target="_blank" rel="noreferrer">種族値データ出典</a>
    <a href="https://yokaiwatch.github.io/characters/stat-guide-blasters.html" target="_blank" rel="noreferrer">計算式の検証資料</a></footer>
  </div>;
}
