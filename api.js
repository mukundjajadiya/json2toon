import OpenAI from 'openai';
import dotenvx from '@dotenvx/dotenvx';
import { data } from './data.js';

dotenvx.config();

const openai = new OpenAI({
    baseURL: "https://openrouter.ai/api/v1",
    apiKey: process.env.OPENROUTER_API_KEY,
});


async function main() {

    const dataToUse = data.nestedToonData;



    const completion = await openai.chat.completions.create({
        model: "openai/gpt-oss-20b:free",
        messages: [
            {
                role: "system",
                content: `You are a helpful assistant that can help with json data: ${dataToUse}`
            },
            {
                role: "user",
                content: "Please provide me the summary of the json data"
            },
        ],
        provider: {
            sort: "throughput",
        },
    });

    console.log(dataToUse)

    console.table({
        token_usage: {
            prompt_tokens: completion.usage.prompt_tokens,
            completion_tokens: completion.usage.completion_tokens,
            total_tokens: completion.usage.total_tokens
        }
    });
}

main();