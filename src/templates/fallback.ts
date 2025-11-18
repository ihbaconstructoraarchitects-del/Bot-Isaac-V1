import { addKeyword } from '@builderbot/bot';
import { deepSeekChat } from '../services/AiDeep';

export const fallbackDeepSeekFlow = addKeyword(['']) // <-- regex que captura cualquier cosa
  .addAction(async (ctx, { flowDynamic }) => {
    const botones = ['Servicios', 'Promociones', 'Ver pagina web'];

    if (!botones.includes(ctx.body.trim())) {
      const respuesta = await deepSeekChat(ctx.body,ctx.from);
      await flowDynamic(respuesta);
    }

    // Si coincide con un botón, no responde aquí
    return;
  });
