import {PaymentIntentResult} from "@stripe/stripe-js";
import Stripe from "stripe";
import {NextResponse} from "next/server";

const stripe:Stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const calculateOrderAmount = () => {
  return 500
}

export async function POST(request: Request) {
  const body = request.json()
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(),
      currency: "usd",
      // payment_method: 'pm_card_declined',
      // confirm: true,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });
    console.log('paymentIntent', paymentIntent)
    return new Response(JSON.stringify({
      clientSecret: paymentIntent.client_secret,
      // [DEV]: For demo purposes only, you should avoid exposing the PaymentIntent ID in the client-side code.
      dpmCheckerLink: `https://dashboard.stripe.com/settings/payment_methods/review?transaction_id=${paymentIntent.id}`,
    }), {
      status: 200
    })
  } catch (e: any) {
    console.error('Error create payment intent', JSON.stringify(e))
    return NextResponse.json(
      {
        message: e?.message || "Create payment intent failed",
        cause: e
      },
      {status: 500}
    )
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const payment_intent_id = searchParams.get('payment_intent_id')

  if(!payment_intent_id) {
    return NextResponse.json(
      { error: 'Payment Intent ID is required' },
      { status: 400 }
    );
  }

  try {
    const paymentIntent  = await stripe.paymentIntents.retrieve(payment_intent_id);
    return new Response(JSON.stringify({
      paymentIntent,
      message: 'get payment intent success'
    }))
  } catch (e) {
    return NextResponse.json(
      { error: 'Get Payment Intent ID is failed', cause: e },
      { status: 500 }
    );
  }
}
