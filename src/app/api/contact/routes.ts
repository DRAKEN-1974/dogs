import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  'https://pnjauvsmrirjjxddgapd.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBuamF1dnNtcmlyamp4ZGRnYXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU4OTk2NDQsImV4cCI6MjA2MTQ3NTY0NH0.-ue8lx8dm4qmdwELNOS3VabHFnkHMw47kDGtDZKZXzM'
);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    const { error } = await supabase
      .from('contact_submissions')
      .insert([{ name, email, message }]);

    if (error) throw error;
    
    return NextResponse.json({ message: 'Message sent successfully!' });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}