import { createFlow } from "@builderbot/bot";
import { mainFlow } from "./mainFlow";
import { iaFlow } from "./iaFlow";
import { fallbackDeepSeekFlow } from "./fallback";
export default createFlow([
    fallbackDeepSeekFlow
]);