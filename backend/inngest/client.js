import { Inngest } from "inngest";
import dotenv from "dotenv";
dotenv.config();
export const inngest = new Inngest({
  id: "ai-dungeon",
  eventKey: process.env.INNGEST_EVENT_KEY,
  signingKey: process.env.INNGEST_SIGNING_KEY,
});
