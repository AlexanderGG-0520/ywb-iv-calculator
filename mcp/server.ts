import { createServer } from "node:http";
import { createMcpHandler, McpServer } from "@modelcontextprotocol/server";
import { toNodeHandler } from "@modelcontextprotocol/node";
import { registerCalculatorTools } from "./tools";
const host=process.env.HOST??"0.0.0.0",port=Number(process.env.PORT??"3001");
if(!Number.isInteger(port)||port<1||port>65535)throw new RangeError("PORT must be 1-65535");
const handler=createMcpHandler(()=>{
 const mcp=new McpServer({name:"ywb-iv-calculator",version:"0.1.0"});
 registerCalculatorTools(mcp);return mcp;
});
const nodeHandler=toNodeHandler(handler);
const httpServer=createServer((req,res)=>{
 const pathname=new URL(req.url??"/","http://localhost").pathname;
 if(pathname==="/healthz"){res.writeHead(200,{"content-type":"text/plain; charset=utf-8"});res.end("ok\n");return}
 if(pathname==="/mcp"||pathname==="/mcp/"){void nodeHandler(req,res);return}
 res.writeHead(404,{"content-type":"text/plain; charset=utf-8"});res.end("not found\n");
});
httpServer.listen(port,host,()=>console.log("Blasters IV Calculator MCP listening on "+host+":"+port));
async function shutdown(){httpServer.close();await handler.close()}
process.once("SIGTERM",()=>{void shutdown().finally(()=>process.exit(0))});
process.once("SIGINT",()=>{void shutdown().finally(()=>process.exit(0))});
