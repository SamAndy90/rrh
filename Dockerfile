# Install dependencies only when needed
FROM node:20.6-alpine AS base

FROM base AS deps
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# Install dependencies based on the preferred package manager
COPY package.json package-lock.json* ./
RUN npm ci


FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Custom environment variables
ARG IMAGE_DOMAINS
ENV IMAGE_DOMAINS ${IMAGE_DOMAINS}

ARG NEXT_PUBLIC_BACKEND_HOST
ENV NEXT_PUBLIC_BACKEND_HOST ${NEXT_PUBLIC_BACKEND_HOST}

ARG NEXT_PUBLIC_BACKEND_API_BASE_URL_PATH
ENV NEXT_PUBLIC_BACKEND_API_BASE_URL_PATH ${NEXT_PUBLIC_BACKEND_API_BASE_URL_PATH}

ARG NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID
ENV NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID ${NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID}

ARG NEXT_PUBLIC_FACEBOOK_AUTH_APP_ID
ENV NEXT_PUBLIC_FACEBOOK_AUTH_APP_ID ${NEXT_PUBLIC_FACEBOOK_AUTH_APP_ID}

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

FROM base AS runner
WORKDIR /app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
