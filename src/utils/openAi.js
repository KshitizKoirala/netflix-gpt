import OpenAI from "openai";
import { OPENAI_API_KEY } from "./config";

const OpenAiClient = new OpenAI({
  apiKey: OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export default OpenAiClient;
