// src/flows/iaFlow.ts
import { addKeyword, EVENTS } from "@builderbot/bot";
import { deepSeekChat } from "~/services/AiDeep"; // ✅
export const iaFlow = addKeyword(EVENTS.ACTION).addAction(
  async (ctx, { endFlow }) => {
    try {
      const prompt = ctx.body;
      const answer = await deepSeekChat(prompt, ctx.from);
      return endFlow(answer);
    } catch (error) {
      console.error("Error DeepSeek:", error);
      return endFlow("❌ Lo siento, no pude procesar tu mensaje.");
    }
  }
);





