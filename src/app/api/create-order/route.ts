import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const response = await fetch('https://api.razorpay.com/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ' + Buffer.from('rzp_test_rlIohxHr7dhM6c:gNpy9tzxkTGBwFCRNGVpB7iE').toString('base64')
      },
      body: JSON.stringify({
        amount: Math.round(body.amount),
        currency: 'INR',
        receipt: `rcpt_${Date.now()}`,
        notes: body.notes
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error?.description || 'Failed to create order');
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error('Order creation failed:', error);
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    );
  }
}