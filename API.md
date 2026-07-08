# StadiumGPT 360 API Design

## Core Endpoints

- `POST /api/ai/chat` accepts text or transcript input and returns assistant output, tool calls, language metadata, and audit IDs.
- `POST /api/navigation/route` returns fastest, least-crowded, wheelchair, elevator, and AR route steps.
- `GET /api/crowd/heatmap?venueId=` returns zone density, velocity, risk score, and recommended actions.
- `POST /api/incidents/report` creates emergency, security, accessibility, or operations incidents.
- `PATCH /api/gates/:id/open` records approved gate automation.
- `GET /api/transport/forecast` returns parking, traffic, bus, metro, rideshare, and green-route predictions.
- `GET /api/food/recommendations` returns nearby stands, queue time, dietary tags, and mobile-order status.
- `POST /api/volunteers/tasks` creates AI-generated volunteer tasks.
- `GET /api/sustainability/dashboard` returns energy, water, waste, and carbon KPIs.
- `POST /api/vision/events` ingests object detection, OCR, crowd panic, fight, and medical-event signals.
- `GET /api/analytics/query?q=` runs natural-language analytics over telemetry and retrieved context.
- `WS /stream/venue/:venueId` streams live crowd, transport, emergency, security, and operations events.

## Auth Model

Use Firebase Auth or OIDC with role-based authorization. Every action endpoint should validate role, venue, zone, shift assignment, and incident ownership before execution.
