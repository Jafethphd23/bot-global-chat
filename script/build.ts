import { build as esbuild } from "esbuild";
import { rm } from "fs/promises";

await rm("dist", { recursive: true, force: true });

await esbuild({
  entryPoints: ["server/bot-runner.ts"],
  bundle: true,
  platform: "node",
  format: "cjs",
  outfile: "dist/bot.cjs",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
  minify: true,
  logLevel: "info",
});
