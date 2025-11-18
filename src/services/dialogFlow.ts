// src/dialogFlow.ts
import { addKeyword } from "@builderbot/bot";
import { deepSeekChat } from "../services/AiDeep"; // ✅


export const dialogFlow = addKeyword(["IA", "inteligencia", "pregunta"])
  .addAction(async (ctx, { flowDynamic }) => {
    await flowDynamic("🤖 Estoy pensando una buena respuesta...");
    const answer = await deepSeekChat(ctx.body, ctx.from);
    await flowDynamic(answer);
  });

