import Razorpay from "razorpay";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { amount, currency = "INR", receipt } = await req.json();

    const instance = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID as string,
      key_secret: process.env.RAZORPAY_KEY_SECRET as string,
    });

    // Amount in paise (₹5000 -> 500000 paise if you charge ₹5000.00)
    const order = await instance.orders.create({
      amount, // e.g., 500000 for ₹5000.00
      currency,
      receipt: receipt ?? `tintsfx_${Date.now()}`,
    });

    return new Response(JSON.stringify({ order }), { status: 200 });
  } catch (err: any) {
    console.error("Razorpay order error:", err);
    return new Response(JSON.stringify({ error: "Order creation failed" }), { status: 500 });
  }
}
