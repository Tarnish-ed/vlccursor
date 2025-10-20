import express, { Express } from "express";
import cors from "cors";
import { handlePing } from "./routes/ping";
import { handleDemo } from "./routes/demo";

export function createServer(): Express {
  const app = express();

  app.use(cors());
  app.use(express.json());

  // API Routes
  app.get("/api/ping", handlePing);
  app.get("/api/demo", handleDemo);

  return app;
}
