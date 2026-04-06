# Qodoxo Web

Marketing website for Qodoxo AB.

## Stack

- React 19
- Vite
- Docker multi-stage build
- Chainguard Nginx runtime image
- Helm chart for `qodoxo-web`
- GitHub Actions deployment workflow

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Container image

The Docker image is built from `Dockerfile` and serves the Vite build through Nginx on port `8080`.

## Deployment

Helm chart lives in `charts/qodoxo-web` and targets:

- namespace: `qodoxo-web`
- Helm release: `qodoxo-web`
- ingress hosts:
  - `qodoxo.com`
  - `www.qodoxo.com`
  - `zenithsystem.com`
  - `www.zenithsystem.com`
- ingress class: `nginx`
- cert-manager cluster issuer: `letsencrypt-prod`
- canonical host redirect: `qodoxo.com`

## GitHub Actions secrets

The workflow expects these repository secrets:

- `BW_CLIENTID`
- `BW_CLIENTSECRET`
- `BW_PASSWORD`

It fetches the kubeconfig from Bitwarden item notes named `kube config Home`.
