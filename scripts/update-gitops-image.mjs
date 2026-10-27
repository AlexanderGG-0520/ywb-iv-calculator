import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { fileURLToPath } from "node:url";

const WEB_IMAGE = "ghcr.io/alexandergg-0520/ywb-iv-calculator";
const MCP_IMAGE = WEB_IMAGE + "-mcp";
const MANIFEST = new URL("../infra/kubernetes/app.yaml", import.meta.url);

export function updateManifestImages(manifest, commitSha) {
  if (!/^[a-f0-9]{40}$/.test(commitSha)) {
    throw new Error("Expected a full lowercase 40-character Git commit SHA.");
  }

  let output = manifest;
  for (const image of [WEB_IMAGE, MCP_IMAGE]) {
    let matches = 0;
    const lines = output.split("\n");
    output = lines.map((line) => {
      const m = line.match(/^(\s*image:\s*)([^\s#]+)(\s*(?:#.*)?)$/);
      if (!m || !m[2].startsWith(image + ":")) return line;
      matches += 1;
      return m[1] + image + ":" + commitSha + m[3];
    }).join("\n");
    if (matches !== 1) {
      throw new Error("Expected exactly one image reference for " + image + "; found " + matches);
    }
  }
  return output;
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const sha = process.argv[2] ?? "";
  const original = await readFile(MANIFEST, "utf8");
  const updated = updateManifestImages(original, sha);
  if (updated !== original) {
    await writeFile(MANIFEST, updated, "utf8");
    console.log("Updated web and MCP images to " + sha);
  } else {
    console.log("Manifest already pins both images to " + sha);
  }
}
