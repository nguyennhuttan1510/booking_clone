import {headers} from "next/headers";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export async function POST(request: Request) {
  const headersList = headers()
  const origin = headersList.get('origin')
  const body = await request.json()
  console.log('body',body)
  try {
    //Create Checkout Sessions from body params.
    const session = await stripe.checkout.sessions.create({
      ui_mode: 'embedded',
      line_items: [
        {
          // Provide the exact Price ID (for example, pr_1234) of
          // the product you want to sell
          price: body.product_id,
          quantity: 1,
        },
      ],
      mode: 'payment',
      return_url:
          `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
    });

    // return Response.json({ clientSecret: session.client_secret })
    return new Response(JSON.stringify({ clientSecret: session.client_secret }),{
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  } catch (err: any) {
    console.log('err server', err)
    return new Response(JSON.stringify(err.message),{
      status: err.statusCode || 500
    })
    // res.status(err.statusCode || 500).json(err.message);
  }
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const session_id = searchParams.get('session_id')
  try {
    const session =
        await stripe.checkout.sessions.retrieve(session_id);

    return new Response(JSON.stringify({customer_email: session.customer_details.email}), {
      status: 200
    })
    // res.send({
    //   status: session.status,
    //   customer_email: session.customer_details.email
    // });
  } catch (err: any) {
    return new Response(JSON.stringify(err.message),{
      status: err.statusCode || 500
    })
  }
}

