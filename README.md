# Twitch translate bot (solo bot)

Versión mínima del proyecto original: **sin dashboard web**, solo el proceso que se conecta a Twitch IRC y traduce con OpenAI.

## Contenido

- `server/bot.ts` — lógica de Twitch (`tmi.js`), comandos `!ton`, `!toff`, `!chibi`
- `server/translate.ts` — traducción con OpenAI
- `server/chat.ts` — respuestas para `!chibi`
- `server/bot-runner.ts` — punto de entrada

## Requisitos

- Node.js 20+
- Variables de entorno (ver `DEPLOY.md` o `.env.example`)

## Scripts

- `npm run dev` — desarrollo con `tsx`
- `npm run build` — genera `dist/bot.cjs`
- `npm start` — ejecuta el bundle en producción

El proyecto grande con React y Express sigue en `../Chat-Twitch-Meme-Fly-main` si lo necesitas.
