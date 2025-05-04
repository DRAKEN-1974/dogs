import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const table = searchParams.get('table');
  const page = parseInt(searchParams.get('page') || '1');
  const limit = parseInt(searchParams.get('limit') || '10');
  const search = searchParams.get('search');

  if (!table) {
    return NextResponse.json({ error: 'Table name is required' }, { status: 400 });
  }

  try {
    let query = supabase
      .from(table)
      .select('*', { count: 'exact' })
      .order('created_at', { ascending: false })
      .range((page - 1) * limit, page * limit - 1);

    if (search) {
      query = query.textSearch('content', search);
    }

    const { data, error, count } = await query;

    if (error) throw error;

    return NextResponse.json({
      data,
      total: count,
      page,
      totalPages: Math.ceil((count || 0) / limit)
    });

  } catch (error) {
    console.error('Admin API Error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch data' },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const table = searchParams.get('table');
  const id = searchParams.get('id');

  if (!table || !id) {
    return NextResponse.json(
      { error: 'Table name and ID are required' },
      { status: 400 }
    );
  }

  try {
    const { error } = await supabase
      .from(table)
      .delete()
      .match({ id });

    if (error) throw error;

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Admin API Error:', error);
    return NextResponse.json(
      { error: 'Failed to delete item' },
      { status: 500 }
    );
  }
}