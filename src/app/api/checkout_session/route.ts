import {headers} from "next/headers";

const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req: Request) {
  switch (req.method) {
    case "POST":
      const headersList = headers()
      const origin = headersList.get('origin')
      try {
        // Create Checkout Sessions from body params.
        const session = await stripe.checkout.sessions.create({
          ui_mode: 'embedded',
          line_items: [
            {
              // Provide the exact Price ID (for example, pr_1234) of
              // the product you want to sell
              price: '{{PRICE_ID}}',
              quantity: 1,
            },
          ],
          mode: 'payment',
          return_url:
            `${origin}/return?session_id={CHECKOUT_SESSION_ID}`,
        });

        // return Response.json({ clientSecret: session.client_secret })
        return new Response(JSON.stringify({ clientSecret: session.client_secret }),{
          status: 200
        })
      } catch (err: any) {
        return new Response(JSON.stringify(err.message),{
          status: err.statusCode || 500
        })
        // res.status(err.statusCode || 500).json(err.message);
      }
    case "GET":
      const { searchParams } = new URL(req.url);
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
      break;
    default:
      return new Response('Not found',{
        status: 500
      })
  }
}