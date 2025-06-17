import { createAgent, gemini } from "@inngest/agent-kit";

const dungeonMaster = async (worldState, action) => {
  const narrativeAgent = createAgent({
    model: gemini({
      model: "gemini-1.5-flash-8b",
      apiKey: process.env.GEMINI_API_KEY,
    }),
    name: "Dungeon Master Agent",
    system: `You are a Dungeon Master in a text-based RPG game.

You receive:
- worldState: the current game world state.
- action: the latest action taken by the player.

Your job:
1. Continue the story.
2. Update world state.
3. Suggest 3-5 next possible player actions.

Output STRICTLY valid JSON (no markdown, no extra text):

{
  "narrative": "story string",
  "updatedState": {...},
  "suggestedActions": ["option 1", "option 2", ...]
}

Only return JSON object. Do not include markdown or any extra formatting.`,
  });

  const response =
    await narrativeAgent.run(`You are a Dungeon Master. Respond ONLY with valid JSON, no markdown or extra text.

Current World State:
${JSON.stringify(worldState, null, 2)}

Player Action: ${action}

Continue the story based on the player's action and respond with JSON in this exact format:
{
  "narrative": "Your story continuation here",
  "updatedState": {...updated world state object...},
  "suggestedActions": ["action 1", "action 2", "action 3", "action 4"]
}`);

  const raw = response.output[0].content;
  console.log(raw);
  try {
    const match = raw.match(/```json\s*([\s\S]*?)\s*```/i);
    const jsonString = match ? match[1] : raw.trim();
    return JSON.parse(jsonString);
  } catch (e) {
    console.log("Failed to parse JSON from AI response: " + e.message);
    return null;
  }
};

export default dungeonMaster;
