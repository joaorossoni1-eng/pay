# Arquitetura - Visão Geral

## Objetivo
Estabelecer um monorepo com base sólida para um SaaS white-label de pagamentos (Pix + Cartão), com multi-tenant, integração futura com gateways e suporte a ambientes dev/staging/prod.

## Decisões-chave
- **Monorepo com PNPM Workspaces + Turborepo** para padronizar lint, format, build, test e dev.
- **Separação clara** entre apps (API + Web) e packages (config + shared).
- **Configurações reutilizáveis** de ESLint, Prettier e TypeScript para consistência.
- **Infra local com Docker Compose** para PostgreSQL.
- **CI simples** com lint + typecheck + build em PR/push na main.

## Convenções iniciais
- API em Node.js + TypeScript (Express) com endpoint `/health`.
- Web em Next.js + TypeScript com fetch do health check.
- Variáveis de ambiente centralizadas por app via `.env`.

## Próximas etapas
- Autenticação multi-tenant (JWT + RBAC).
- Modelagem inicial do banco (tenants, users, roles).
- Integrações com gateways e webhooks.
