import { inngest } from "../client.js";
import dungeonMaster from "../../utils/ai.js";
import WorldState from "../../models/WorldState.js";

export const onPlayerAction = inngest.createFunction(
  { id: "on-player-action", retries: 2 },
  { event: "dungeon/playerAction" },
  async ({ event, step }) => {
    try {
      const { worldState, action } = event.data;
      const aiResponse = await dungeonMaster(worldState, action);

      await step.run("save-updated-world-state", async () => {
        if (aiResponse && aiResponse.updatedState) {
          await WorldState.deleteMany({});
          await WorldState.create({ state: aiResponse.updatedState });
        }
      });
      return {
        success: true,
        narrative:
          aiResponse?.narrative ||
          "Something went wrong with the story generation",
        suggestedActions: aiResponse?.suggestedActions || [],
      };
    } catch (error) {
      console.error("Error Running Agent", error.message);
      return { success: false };
    }
  }
);
