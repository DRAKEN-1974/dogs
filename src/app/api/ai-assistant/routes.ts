import { HfInference } from '@huggingface/inference';
import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const hf = new HfInference(process.env.HUGGINGFACE_API_KEY);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function POST(request: Request) {
  try {
    const { query, dogProfile } = await request.json();

    const prompt = `
      As a dog care expert, provide advice based on this dog's profile:
      Breed: ${dogProfile.breed}
      Age: ${dogProfile.age} years
      Weight: ${dogProfile.weight} kg
      Activity Level: ${dogProfile.activityLevel}
      Health Issues: ${dogProfile.healthIssues.join(', ')}
      Dietary Restrictions: ${dogProfile.dietaryRestrictions.join(', ')}

      Question: ${query}

      Please provide a detailed, helpful response:
    `;

    const response = await hf.textGeneration({
      model: process.env.AI_MODEL || 'facebook/opt-1.3b',
      inputs: prompt,
      parameters: {
        max_length: parseInt(process.env.MAX_TOKENS || '200'),
        temperature: parseFloat(process.env.TEMPERATURE || '0.7'),
        top_p: parseFloat(process.env.TOP_P || '0.95'),
      }
    });

    // Store in Supabase
    await supabase.from('ai_interactions').insert([
      {
        user_id: process.env.NEXT_PUBLIC_USER_ID,
        query,
        response: response.generated_text,
        dog_profile: dogProfile,
        created_at: process.env.NEXT_PUBLIC_TIMESTAMP
      }
    ]);

    return NextResponse.json({ 
      response: response.generated_text,
      timestamp: process.env.NEXT_PUBLIC_TIMESTAMP
    });

  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}