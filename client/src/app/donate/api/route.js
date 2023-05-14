import { NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const origin = "http://localhost:3000/donate";

export async function POST(request) {
  try {
    // Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
          price: "price_1N7NizEiF2LLe4mzFXcMvCLg",
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/?success=true`,
      cancel_url: `${origin}/?canceled=true`,
    });
    return NextResponse.redirect(session.url);
  } catch (err) {
    return NextResponse.json(err.message);
  }
}
