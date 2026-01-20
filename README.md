# Pay Monorepo

Monorepo para o SaaS white-label de pagamentos (Pix + Cartão).

## Requisitos
- Node.js 18+
- PNPM 8+
- Docker (para PostgreSQL local)

## Setup local

```bash
pnpm install
```

### Variáveis de ambiente

Copie os exemplos para cada app:

```bash
cp .env.example .env
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```

### Subir PostgreSQL local

```bash
docker compose -f infra/compose/docker-compose.dev.yml up -d
```

### Rodar API + Web

```bash
pnpm dev
```

- API: `http://localhost:3001/health`
- Web: `http://localhost:3000`

## Scripts úteis

- `pnpm lint` — lint em todos os apps/packages
- `pnpm format` — formatação
- `pnpm typecheck` — checagem de tipos
- `pnpm build` — builds

## Estrutura

```
apps/
  api/
  web/
packages/
  config/
  shared/
infra/
  compose/
docs/
  architecture/
```
