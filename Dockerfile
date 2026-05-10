FROM node:20-alpine AS builder

WORKDIR /app

COPY package.json ./
RUN npm install

COPY script ./script
COPY server ./server
COPY tsconfig.json ./
RUN npm run build

FROM node:20-alpine

WORKDIR /app

ENV NODE_ENV=production

COPY --from=builder /app/dist/bot.cjs ./dist/bot.cjs

CMD ["node", "dist/bot.cjs"]
