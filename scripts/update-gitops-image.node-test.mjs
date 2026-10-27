import assert from "node:assert/strict";
import { test } from "node:test";
import { updateManifestImages } from "./update-gitops-image.mjs";

const SHA = "a".repeat(40);
const other = "b".repeat(40);
const fixture = `apiVersion: apps/v1
kind: Deployment
spec:
  template:
    spec:
      containers:
        - name: web
          image: ghcr.io/alexandergg-0520/ywb-iv-calculator:main
        - name: mcp
          image: ghcr.io/alexandergg-0520/ywb-iv-calculator-mcp:main
`;

test("updates both containers to the exact commit SHA", () => {
  const result = updateManifestImages(fixture, SHA);
  assert.match(result, /ywb-iv-calculator:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/);
  assert.match(result, /ywb-iv-calculator-mcp:aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa/);
  assert.equal((result.match(/:main/g) ?? []).length, 0);
  assert.equal(updateManifestImages(result, SHA), result, "idempotent");
  assert.ok(updateManifestImages(result, other).includes("ywb-iv-calculator-mcp:" + other));
});
test("fails closed for untrusted or incomplete SHA", () => {
  assert.throws(() => updateManifestImages(fixture, "main"), /full lowercase/);
  assert.throws(() => updateManifestImages(fixture, "f".repeat(39)), /full lowercase/);
  assert.throws(() => updateManifestImages(fixture, "G".repeat(40)), /full lowercase/);
});
test("fails closed when either image entry is absent", () => {
  assert.throws(() => updateManifestImages(fixture.replace(/.*image:.*-mcp:main\n/, ""), SHA), /exactly one/);
});
test("fails closed when there are duplicate container entries", () => {
  assert.throws(() => updateManifestImages(fixture + " image: ghcr.io/alexandergg-0520/ywb-iv-calculator:main\n", SHA), /exactly one/);
});
