# Flowdesk

<div align="center">

![Angular](https://img.shields.io/badge/Angular-21-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![NestJS](https://img.shields.io/badge/NestJS-11-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-25+-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

**A modern full-stack mono-repository with Angular frontend and NestJS backend**

[Getting Started](#getting-started) •
[Architecture](#architecture) •
[Scripts](#available-scripts) •
[Contributing](#contributing)

</div>

---

## Overview

Flowdesk is a full-stack TypeScript mono-repository that combines:

- **Frontend**: Angular 21 with standalone components, signals, and modern best practices
- **Backend**: NestJS 11 REST API with modular architecture
- **Shared**: Common TypeScript types and interfaces used across both applications

## Architecture

```
flowdesk/
├── apps/
│   ├── frontend/          # Angular 21 application
│   │   ├── src/
│   │   ├── angular.json
│   │   └── package.json
│   └── backend/           # NestJS 11 API
│       ├── src/
│       ├── nest-cli.json
│       └── package.json
├── packages/
│   └── shared/            # Shared TypeScript types & interfaces
│       └── src/
├── package.json           # Root workspace configuration
└── README.md
```

## Tech Stack

| Layer | Technology | Version |
|-------|------------|---------|
| Frontend | Angular | 21.x |
| Backend | NestJS | 11.x |
| Language | TypeScript | 5.9.x |
| Package Manager | npm workspaces | 11.x |
| Frontend Testing | Vitest | 4.x |
| Backend Testing | Jest | 29.x |

## Getting Started

### Prerequisites

- Node.js 20+ (LTS recommended)
- npm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/ibm-chotchat/flowdesk.git
cd flowdesk

# Switch to main branch for development
git checkout main

# Install all dependencies (including workspaces)
npm install
```

### Development

```bash
# Start both frontend and backend concurrently
npm run dev

# Or start individually
npm run start:frontend    # Angular on http://localhost:4200
npm run start:backend     # NestJS on http://localhost:3000
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start frontend & backend concurrently |
| `npm run start:frontend` | Start Angular dev server |
| `npm run start:backend` | Start NestJS in watch mode |
| `npm run build:all` | Build all workspaces |
| `npm run build:frontend` | Build Angular for production |
| `npm run build:backend` | Build NestJS |
| `npm run test:all` | Run all tests |
| `npm run test:frontend` | Run Angular tests (Vitest) |
| `npm run test:backend` | Run NestJS tests (Jest) |
| `npm run clean` | Remove all dist folders |

## Workspaces

This project uses [npm workspaces](https://docs.npmjs.com/cli/v10/using-npm/workspaces) to manage multiple packages:

| Package | Path | Description |
|---------|------|-------------|
| `@flowdesk/frontend` | `apps/frontend` | Angular web application |
| `@flowdesk/backend` | `apps/backend` | NestJS REST API |
| `@flowdesk/shared` | `packages/shared` | Shared types & interfaces |

### Shared Package

The `@flowdesk/shared` package contains TypeScript interfaces used by both frontend and backend:

```typescript
import { ApiResponse, HealthCheck } from '@flowdesk/shared';
```

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Hello message |
| GET | `/health` | Health check status |

## Project Configuration

### TypeScript Path Aliases

Both frontend and backend are configured to resolve `@flowdesk/shared`:

```json
{
  "paths": {
    "@flowdesk/shared": ["../../packages/shared/src"],
    "@flowdesk/shared/*": ["../../packages/shared/src/*"]
  }
}
```

### Code Style

This project uses Prettier with the following configuration:

- Print width: 100
- Single quotes
- Angular HTML parser

## Branching Strategy

This project follows a **Git Flow** branching model:

| Branch | Purpose | Protected |
|--------|---------|:---------:|
| `master` | Production releases (stable, deployable) | Yes |
| `main` | Development integration | Yes |
| `feature/*` | New features | No |
| `bugfix/*` | Bug fixes | No |
| `hotfix/*` | Urgent production fixes | No |

### Workflow

```
master (production)
  │
  └── main (development)
        │
        ├── feature/user-auth
        ├── feature/dashboard
        └── bugfix/login-error
```

1. **Development** → Branch from `main`, merge back to `main`
2. **Release** → Merge `main` into `master` for deployment
3. **Hotfix** → Branch from `master`, merge to both `master` and `main`

## Contributing

1. Checkout the `main` branch (`git checkout main`)
2. Pull latest changes (`git pull origin main`)
3. Create a feature branch (`git checkout -b feature/amazing-feature`)
4. Commit your changes (`git commit -m 'feat: add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request → target: `main`

### Commit Convention

This project follows [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `refactor:` Code refactoring
- `test:` Adding or updating tests
- `chore:` Maintenance tasks

## License

This project is private and proprietary.

---

<div align="center">

Built with ❤️ using Angular & NestJS

</div>
