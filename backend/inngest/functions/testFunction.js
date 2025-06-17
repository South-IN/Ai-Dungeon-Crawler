import { inngest } from "../client.js";

export const testFunction = inngest.createFunction(
  { id: "test-function" },
  { event: "test/simple" },
  async ({ event }) => {
    console.log("test function triggered", event);
    return { success: true, message: "Test Function worked" };
  }
);
