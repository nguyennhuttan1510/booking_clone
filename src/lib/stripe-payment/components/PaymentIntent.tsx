import {useLayout} from "@/hooks/useLayout";
import React, {useLayoutEffect} from "react";
import {loadStripe, StripeElementsOptions} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CompletePage from "@/app/(main-layout)/book/payment-intent/components/CompletePage";
import CheckoutForm from "@/app/(main-layout)/book/payment-intent/components/CheckoutForm";

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
if(!stripePublicKey) {
  throw new Error(' Not found public key of stripe payment')
}

const stripePromise = loadStripe(stripePublicKey);

const PaymentIntent = () => {
  const {setState} = useLayout()
  const [clientSecret, setClientSecret] = React.useState("");
  const [dpmCheckerLink, setDpmCheckerLink] = React.useState("");

  const [confirmed, setConfirmed] = React.useState<null | boolean>(null);

  React.useEffect(() => {
    setConfirmed(Boolean(new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    )));
  });

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
        .then((res) => res.json())
        .then((data) => {
          setClientSecret(data.clientSecret);
          // [DEV] For demo purposes only
          setDpmCheckerLink(data.dpmCheckerLink);
        });
  }, []);

  const appearance: StripeElementsOptions['appearance'] = {
    theme: 'stripe',
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };

  useLayoutEffect(() => {
    setState((prevState) => ({...prevState, isSearch: false, isMenu: false}))
  }, [])

  console.log('clientSecret', clientSecret)

  return (
      <div>
        {clientSecret && (
            <Elements options={options} stripe={stripePromise}>
              {<CheckoutForm dpmCheckerLink={dpmCheckerLink} />}
            </Elements>
        )}
      </div>
  );
};

export default PaymentIntent;
