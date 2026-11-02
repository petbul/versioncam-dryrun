import { defineRecorder } from "versioncam";

export default defineRecorder({
  // No vite.config and no --port in the dev script, so Vite's default port 5173.
  baseUrl: "http://localhost:5173",
  // package.json "dev" script (vite).
  webServer: { command: "npm run dev", url: "http://localhost:5173" },
  viewport: { width: 1440, height: 900 },
  clips: "demos/clips/**/*.clip.ts",
});
