const entrypoint = new URL("./bar.ts", import.meta.url).href;
await import(entrypoint);
