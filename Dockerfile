# ============================================================
# StadiumGPT 360 – Next.js Production Dockerfile
# ============================================================
# Stage 1: deps – Install dependencies
# Stage 2: build – Compile the Next.js application
# Stage 3: runner – Minimal production runner
# ============================================================

ARG NODE_VERSION=20-alpine

# ---- Stage 1: Install dependencies ----
FROM node:${NODE_VERSION} AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci --frozen-lockfile

# ---- Stage 2: Build ----
FROM node:${NODE_VERSION} AS build
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Stage 3: Runner ----
FROM node:${NODE_VERSION} AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copy built app and dependencies
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/data ./data

RUN chown -R nextjs:nodejs /app

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
