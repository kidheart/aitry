import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.HUNYUAN_API_KEY || 'sk-MAYyhJwFWstOH96WymijoepnHlTRHKN0Ho1QSZ3x7BgexhmP',
  baseURL: 'https://api.hunyuan.cloud.tencent.com/v1',
});

export async function POST(req: NextRequest) {
  const { prompt } = await req.json();

  try {
    const completion = await openai.chat.completions.create({
      model: 'hunyuan-turbos-latest',
      messages: [{ role: 'user', content: prompt }]
    });
    return NextResponse.json({ result: completion.choices[0].message.content });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || '生成失败' }, { status: 500 });
  }
} 