# Deployment Guide

## Local Demo

Open `index.html` directly in a browser. The current demo is static and uses realistic mock data.

## Production Path

1. Create a Next.js frontend with the screens and interactions from this demo.
2. Move mock data into backend services behind the API contract in `API.md`.
3. Deploy Node.js API gateway and FastAPI AI services to Google Cloud Run.
4. Use PostgreSQL/Cloud SQL for operational data and Redis for cache, queues, and pub/sub.
5. Add Pinecone or ChromaDB for RAG indexes over venue maps, SOPs, transit schedules, and incident history.
6. Run computer-vision workers near the edge and publish normalized events through Pub/Sub.
7. Configure Firebase Cloud Messaging for fan, volunteer, responder, and organizer notifications.
8. Add GitHub Actions for lint, test, build, container publish, migration, and deploy.
9. Use Kubernetes only for sustained streaming and computer-vision workloads that outgrow Cloud Run.

## Required Environment Variables

- `OPENAI_API_KEY`
- `GEMINI_API_KEY`
- `VERTEX_PROJECT_ID`
- `DATABASE_URL`
- `REDIS_URL`
- `PINECONE_API_KEY` or `CHROMA_URL`
- `FIREBASE_PROJECT_ID`
- `JWT_AUDIENCE`
- `NOTIFICATION_TOPIC_PREFIX`
