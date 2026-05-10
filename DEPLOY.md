# Desplegar solo el bot (sin web)

Este proyecto es únicamente el proceso IRC de Twitch + OpenAI. No expone HTTP.

## Variables de entorno

| Variable | Descripción |
|----------|-------------|
| `OPENAI_API_KEY` | Clave de OpenAI (traducción y `!chibi`) |
| `TWITCH_BOT_USERNAME` | Usuario del bot en Twitch |
| `TWITCH_ACCESS_TOKEN` | Token OAuth (sin prefijo `oauth:`) |
| `BOT_CHANNEL` | Canal sin `#`, ej. `nagayama_meme` |
| `TARGET_LANGUAGE` | Idioma objetivo, ej. `Japanese`, `es`, `Spanish` |

## Local

```bash
npm install
npm run dev
```

O tras compilar: `npm run build` y `npm start`.

## Fly.io

```bash
fly auth login
fly launch --no-deploy   # primera vez; ajusta nombre en fly.toml si hace falta
fly secrets set OPENAI_API_KEY=... TWITCH_BOT_USERNAME=... TWITCH_ACCESS_TOKEN=... BOT_CHANNEL=... TARGET_LANGUAGE=...
fly deploy
fly scale count bot=1
```

No hace falta escalar `web`; esta app solo tiene el proceso `bot`.

## Docker

```bash
docker build -t twitch-translate-bot .
docker run --env-file .env twitch-translate-bot
```
