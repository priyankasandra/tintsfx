"use client";
import { useState } from "react";

declare global {
  interface Window {
    Razorpay: any;
  }
}

async function loadRazorpay(): Promise<boolean> {
  if (window.Razorpay) return true;
  return new Promise((resolve) => {
    const s = document.createElement("script");
    s.src = "https://checkout.razorpay.com/v1/checkout.js";
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.body.appendChild(s);
  });
}

type Props = {
  amountINR: number; // e.g. 5000 for ₹5000.00
  label?: string;
  prefill?: { name?: string; email?: string; contact?: string };
};

export default function BookSeatButton({ amountINR, label = "Book a Seat", prefill }: Props) {
  const [loading, setLoading] = useState(false);

  const handlePay = async () => {
    setLoading(true);
    const ok = await loadRazorpay();
    if (!ok) {
      alert("Failed to load Razorpay");
      setLoading(false);
      return;
    }

    // Create order on server (amount in paise)
    const createRes = await fetch("/api/razorpay/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amountINR * 100, currency: "INR" }),
    });

    const { order, error } = await createRes.json();
    if (error || !order?.id) {
      alert("Could not start payment");
      setLoading(false);
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      name: "TINTSFX Workshops",
      description: "Seat booking",
      order_id: order.id,
      currency: "INR",
      amount: order.amount,
      theme: { color: "#F28500" },
      prefill: {
        name: prefill?.name ?? "",
        email: prefill?.email ?? "",
        contact: prefill?.contact ?? "",
      },
      handler: async function (response: any) {
        // Verify on server
        const verifyRes = await fetch("/api/razorpay/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
          }),
        });
        const { valid } = await verifyRes.json();
        if (valid) {
          // Redirect to thank you page
          window.location.href = "/thanks";
        } else {
          alert("Payment verification failed. Please contact support.");
        }
      },
      modal: {
        ondismiss: function () {
          // Optional: handle user closing the checkout
        },
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
    setLoading(false);
  };

  return (
    <button
      onClick={handlePay}
      disabled={loading}
      className="inline-flex items-center justify-center rounded-md border border-[#F28500] bg-[#F28500] px-6 py-3 font-semibold text-black hover:bg-black hover:text-[#F28500] transition w-full"
      aria-label="Book a Seat"
    >
      {loading ? "Processing..." : label}
    </button>
  );
}
