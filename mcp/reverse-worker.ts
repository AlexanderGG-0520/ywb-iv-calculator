import { parentPort, workerData } from "node:worker_threads";
import { reverseSearch } from "../src/engine/reverseSearch";
import type { SearchInput } from "../src/engine/types";
if(!parentPort)throw new Error("MCP reverse worker must use worker_threads");
try {parentPort.postMessage({ok:true,response:reverseSearch(workerData as SearchInput)})}
catch(e){parentPort.postMessage({ok:false,error:e instanceof Error?e.message:String(e)})}
parentPort.close();
