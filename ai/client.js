// PART 2 — Uncomment this import to enable the AI SDK OpenAI provider.

import { createOpenAI } from '@ai-sdk/openai';
import { getAIConfig } from './config';

export function createAIProvider() {
  const { apiKey, baseURL } = getAIConfig();

  return createOpenAI({
    name: 'pocket-plan',
    apiKey,
    baseURL,
  });
}
