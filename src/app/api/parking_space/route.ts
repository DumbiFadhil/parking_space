import { NextRequest, NextResponse } from 'next/server';
import { query } from '@/lib/db';

export const dynamic = "force-dynamic";

export async function GET(
  _request: NextRequest,
) {
  try {
    const result = await query('SELECT id, group, space_one, space_two, space_three, space_four, space_five, space_six FROM your_table');
    return NextResponse.json({ data: result.rows }, { status: 200 });
  } catch (error) {
    console.error('Error fetching data:', error);
    return NextResponse.json({ error: 'Error fetching data' }, { status: 500 });
  }
}
