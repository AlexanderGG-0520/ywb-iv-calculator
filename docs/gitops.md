# GitOps / Argo CD

This project follows the deployment style of the YW3 IV Calculator.

## Flow

1. Merge a tested PR into `main`.
2. `.github/workflows/publish-ghcr.yml` runs tests, builds the web and MCP targets, and publishes both containers to GHCR with the exact commit SHA.
3. After **both** images have been published, the workflow updates `infra/kubernetes/app.yaml` to that SHA and pushes one bot commit to `main`.
4. Argo CD watches `infra/kubernetes` on `main` and synchronizes changes automatically. `selfHeal` and `prune` are enabled.
5. The image-update bot commit does **not** publish images again (path filter + `[skip ci]`).

Images:

- `ghcr.io/alexandergg-0520/ywb-iv-calculator:<commit-SHA>`
- `ghcr.io/alexandergg-0520/ywb-iv-calculator-mcp:<commit-SHA>`

The manifest initially references the **`main`** tags for bootstrap only. These tags are mutable and must be replaced automatically with immutable SHA tags after the first successful release. The image updater explicitly checks for one web image and one MCP image. It aborts if either is missing or duplicated.

## One-time bootstrap

**Prerequisites:** Existing Argo CD control plane, the `argocd` namespace, Kubernetes access, and permission to create an Argo CD Application. Ensure both GHCR packages are **public** or configure suitable image pull credentials; the manifest does not include an `imagePullSecret`. The registry may default newly created packages to private even when the source repository is public.

After the app PR is merged and the first GHCR publication succeeds:

```sh
kubectl apply -f infra/argocd/application.yaml
kubectl -n argocd get application ywb-iv-calculator
kubectl -n ywb-iv get deployment,pods,service
```

The Argo CD Application is not managed by its own `infra/kubernetes` directory; perform the one-time bootstrap above or add it to an existing App-of-Apps repository.

## Workload

- Namespace: `ywb-iv` (Argo CD `CreateNamespace=true`).
- Argo CD Application: `ywb-iv-calculator`.
- One Deployment with two sidecars: `web` (nginx:80) and `mcp` (Node:3001).
- One ClusterIP Service `ywb-iv-calculator:80`. The existing nginx configuration forwards `/mcp` to `127.0.0.1:3001` **within the same Pod**. This supports website and MCP via one Service.
- No Ingress, TLS host, CDN or public DNS record is created here. Provide ingress separately if needed.
- Probes: `/healthz` for both containers.

## Checks

```sh
npm ci
npm test
node --test scripts/update-gitops-image.test.mjs
npm run build
npm run build:mcp
kubectl -n argocd describe application ywb-iv-calculator
kubectl -n ywb-iv rollout status deployment/ywb-iv-calculator
```

If a publish job succeeds but the GitOps update fails, verify that GitHub Actions can push commits to `main` under the repository's branch protection policy. The GitOps manifest stays at the previously successful SHA until updated. If an earlier branch revision becomes stale before its update job starts, it will intentionally skip deployment.

**Do not apply the Application until a suitable image is accessible.** A `main` image tag before its first GHCR publish will fail to pull.

## Notes

This setup does not execute `kubectl`, contact Argo CD directly, or modify the cluster as part of repository CI. Bootstrap is a separate operator action. The Application targets the same in-cluster server as the existing YW3 version, but uses an independent namespace to prevent resource collisions.
