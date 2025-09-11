import crypto from "crypto";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = await req.json();

    const payload = `${razorpay_order_id}|${razorpay_payment_id}`;
    const expected = crypto
      .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET as string)
      .update(payload)
      .digest("hex");

    const valid = expected === razorpay_signature;

    return new Response(JSON.stringify({ valid }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ valid: false }), { status: 400 });
  }
}
