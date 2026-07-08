# StadiumGPT 360 – Advanced

> **AI Operating System for FIFA World Cup 2026 Stadium Operations**

A production-ready, full-stack TypeScript application that brings intelligent stadium management to life — from crowd safety and emergency response to fan navigation and sustainability monitoring.

---

## 🚀 Quick Start

### Prerequisites

| Tool | Version |
|------|---------|
| Node.js | ≥ 20 LTS |
| npm | ≥ 10 |

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment

```bash
cp .env.example .env
# Edit .env and add your GEMINI_API_KEY and JWT_SECRET
```

### 3. Start development servers

```bash
# Frontend (Vite dev server at http://localhost:5173)
npm run dev:frontend

# Backend (Express API at http://localhost:3001)
npm run dev:backend
```

### 4. Open browser

Navigate to `http://localhost:5173`

---

## 📁 Project Structure

```
stadiumgpt360-advanced/
├── src/                        # Vite + TypeScript frontend
│   ├── types/index.ts          # Domain types & interfaces
│   ├── services/
│   │   ├── ai.ts               # Gemini integration, Voice AI, TTS
│   │   ├── db.ts               # Client-side API adapter + offline MiniDB
│   │   ├── pathfinding.ts      # Dijkstra shortest-path routing
│   │   ├── rag.ts              # Client-side TF-IDF RAG search
│   │   └── multimodal.ts       # Visual AI (file/image processing)
│   ├── components/
│   │   ├── cctv.ts             # Canvas-based CCTV crowd visualizer
│   │   ├── charts.ts           # Canvas-based predictive metric charts
│   │   └── ui.ts               # Global state manager & event wiring
│   └── main.ts                 # Application entry point
│
├── server/                     # Express + TypeScript backend
│   ├── server.ts               # Main server (Helmet, CORS, rate limiting, WS)
│   ├── database.ts             # SQLite client (parameterized, typed)
│   ├── auth.ts                 # JWT auth + RBAC middleware
│   └── routes/
│       ├── auth.ts             # POST /api/auth/login|register
│       ├── ai.ts               # POST /api/ai/chat (Gemini proxy)
│       ├── incidents.ts        # GET/POST/PATCH /api/incidents
│       ├── crowd.ts            # GET /api/crowd/heatmap
│       ├── navigation.ts       # POST /api/navigation/route
│       └── sustainability.ts   # GET /api/sustainability/dashboard
│
├── tests/
│   ├── unit.test.ts            # Vitest unit & integration tests
│   └── e2e.spec.ts             # Playwright E2E tests
│
├── .github/workflows/ci.yml    # GitHub Actions CI pipeline
├── Dockerfile                  # Multi-stage production image
├── docker-compose.yml          # Dev + production compose
├── playwright.config.ts        # E2E test configuration
├── vite.config.ts              # Vite bundler configuration
├── tsconfig.json               # Frontend TypeScript config
├── tsconfig.server.json        # Backend TypeScript config
└── schema.sql                  # SQLite-compatible DDL reference
```

---

## 🔌 API Reference

| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| `POST` | `/api/auth/login` | — | Issue JWT token |
| `POST` | `/api/auth/register` | — | Create fan account |
| `POST` | `/api/ai/chat` | ✅ | Gemini AI chat (server-proxied) |
| `GET`  | `/api/crowd/heatmap?venueId=` | ✅ | Zone density + risk scores |
| `POST` | `/api/crowd/snapshot` | ✅ Admin | Ingest sensor snapshot |
| `POST` | `/api/incidents/report` | ✅ | Create incident |
| `GET`  | `/api/incidents` | ✅ | List incidents (paginated) |
| `PATCH`| `/api/incidents/:id` | ✅ Security/Admin | Update incident status |
| `POST` | `/api/navigation/route` | ✅ | Get navigation route |
| `GET`  | `/api/sustainability/dashboard` | ✅ | Energy/water/waste/carbon KPIs |
| `GET`  | `/health` | — | Health check |
| `WS`   | `/stream/venue/:venueId` | — | Live venue event stream |

---

## 🔐 Security Features

- **Helmet** — CSP, HSTS, X-Frame-Options, and 11 other headers
- **CORS** — Allowlist-only (no wildcard origins)
- **Rate Limiting** — Global 200 req/15min + AI-specific 30 req/min
- **JWT (RS256/HS256)** — Signed tokens with 8-hour expiry
- **bcrypt (cost 12)** — Passwords never stored in plaintext
- **Parameterized SQL** — Zero string interpolation into queries
- **Input Validation** — Allowlist-based (enum checks, length limits)
- **Body Size Limit** — 256KB max to prevent payload attacks
- **Non-root Docker** — Runs as `stadium` user in container
- **No stack traces** — Production errors return generic messages

---

## 🧪 Testing

```bash
# Unit tests (Vitest)
npm test

# Unit tests with coverage
npm test -- --coverage

# E2E tests (Playwright) – requires dev server running
npm run test:e2e

# Lint
npm run lint
```

**Unit test coverage includes:**
- Dijkstra pathfinding (4 scenarios including edge cases)
- TF-IDF RAG search accuracy
- JWT sign/verify/tamper/expiry
- Incident input validation
- Crowd risk action derivation (boundary conditions)

**E2E test coverage includes:**
- Page load, title, h1, console errors
- Skip-link & keyboard navigation
- Chat input, voice button, file upload
- Dashboard panels visibility
- Mobile (375px) and tablet (768px) viewports
- 4-second performance baseline

---

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker compose up --build

# Production only
docker compose up app

# Development with Vite hot-reload
docker compose --profile dev up
```

---

## 🏗️ CI/CD Pipeline

GitHub Actions (`.github/workflows/ci.yml`) runs on every push and PR:

1. **Lint & Type Check** — ESLint + `tsc --noEmit`
2. **Unit Tests** — Vitest with coverage report artifact
3. **Build** — Vite frontend + tsc backend → `dist/`
4. **E2E Tests** — Playwright (Chromium + Mobile Chrome)
5. **Docker Push** — GHCR image push (main branch only)

---

## 🌍 FIFA World Cup 2026 Coverage

| Domain | Features |
|--------|----------|
| **Fan Experience** | Multilingual AI assistant, navigation, food/concession finder |
| **Crowd Safety** | Real-time heatmap, risk scoring, emergency SOP activation |
| **Emergency Response** | Incident creation, medical/security dispatch, status tracking |
| **Accessibility** | Wheelchair routing, elevator guidance, accessible mode |
| **Sustainability** | Energy, water, waste, carbon KPI dashboard |
| **Operations** | Gate management, volunteer tasks, shift coordination |
| **Security** | Threat detection, lockdown simulation, CCTV visualization |
| **Transport** | Route forecasting, parking, multimodal transit |

---

## 📄 License

ISC © StadiumGPT 360 Team
