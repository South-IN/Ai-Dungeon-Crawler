import dotenv from "dotenv";
dotenv.config();

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import WorldState from "./models/WorldState.js";
import { inngest } from "./inngest/client.js";
import { serve } from "inngest/express";
import { onPlayerAction } from "./inngest/functions/onPlayerAction.js";
import { testFunction } from "./inngest/functions/testFunction.js";

// console.log("🔍 Function imported:", !!onPlayerAction);
// console.log("🔍 Function details:", onPlayerAction);

const app = express();
app.use(bodyParser.json());
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.get("/", (req, res) => {
  res.send("AI Dungeon backend running");
});

app.use(
  "/api/inngest",
  serve({
    client: inngest,
    functions: [onPlayerAction, testFunction],
    logLevel: "info",
  })
);

app.post("/test-event", async (req, res) => {
  console.log("🔥 Sending test event...");
  const result = await inngest.send({
    name: "test/simple",
    data: { message: "hello world" },
  });
  console.log("📤 Event sent result:", result);
  res.json({ message: "Test event sent", result });
});

app.post("/start-game", async (req, res) => {
  const initialState = {
    player: {
      name: req.body.name || "Hero",
      location: "Village",
      inventory: [],
    },
    npcs: {},
    world: { time: 0 },
  };
  await WorldState.deleteMany({});
  await WorldState.create({ state: initialState });
  res.json({ message: "Game Started", state: initialState });
});

app.post("/player-action", async (req, res) => {
  const latest = await WorldState.findOne().sort({ createdAt: -1 });
  const worldState = latest?.state || {};
  const { action } = req.body;

  await inngest.send({
    name: "dungeon/playerAction",
    data: { worldState, action },
  });

  res.json({ message: "Action recieved. Processing....." });
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Data base connected");
    app.listen(PORT, () => console.log(`Server at http://localhost:${PORT}`));
  })
  .catch((err) => console.log(err));
