import {useLayout} from "@/hooks/useLayout";
import React from "react";
import {loadStripe, StripeElementsOptions} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import CheckoutForm from "@/app/(main-layout)/book/payment-intent/components/CheckoutForm";
import {Card, Skeleton} from "antd";
import {IoWarningOutline} from "react-icons/io5";

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
if(!stripePublicKey) {
  throw new Error(' Not found public key of stripe payment')
}

const stripePromise = loadStripe(stripePublicKey);

const PaymentIntent = () => {
  const [clientSecret, setClientSecret] = React.useState("");
  const [loading, setLoading] = React.useState<boolean>(false);
  const [dpmCheckerLink, setDpmCheckerLink] = React.useState("");

  const [confirmed, setConfirmed] = React.useState<null | boolean>(null);

  React.useEffect(() => {
    setConfirmed(Boolean(new URLSearchParams(window.location.search).get(
        "payment_intent_client_secret"
    )));
  });

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    setLoading(true)
    fetch("/api/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
        .then((res) => {
          return res.json()
        })
        .then((data) => {
          setClientSecret(data.clientSecret);
          // [DEV] For demo purposes only
          setDpmCheckerLink(data.dpmCheckerLink);
        })
        .finally(() => {
          setLoading(false)
        })
  }, []);

  const appearance: StripeElementsOptions['appearance'] = {
    theme: 'stripe',
  };
  const options: StripeElementsOptions = {
    clientSecret,
    appearance,
  };
  console.log('clientSecret', clientSecret)

  if(loading) {
    return (
      <div className='flex flex-col gap-y-2'>
        <div className='flex gap-x-2'>
          <Skeleton.Input active={true} />
          <Skeleton.Input active={true} />
          <Skeleton.Input active={true} />
        </div>
        <div className='flex gap-x-2'>
          <Skeleton.Input active={true} block={true} />
        </div>
        <div className='flex justify-end'>
          <Skeleton.Button active={true} shape={'square'} block={false} />
        </div>
      </div>
    )
  }

  return (
      <div>
        {clientSecret && !loading ? (
            <Elements options={options} stripe={stripePromise}>
              {<CheckoutForm dpmCheckerLink={dpmCheckerLink} />}
            </Elements>
        ) : (
          <Card
            style={{borderColor: 'red', overflow: "hidden"}}
            styles={{
              body: {
                padding: '16px',
                backgroundColor: '#fff5f5'
              }
            }}>
            <div className='flex gap-x-4'>
              <IoWarningOutline className='flex-none text-3xl text-red-500' />
              <div>
                <div className='text-[16px] font-bold mb-4'>Hệ thông thanh toán đang xảy ra sự cố</div>
                <div>Vui lòng liên hệ trực tiếp khách sạn để thực hiện thanh toán</div>
              </div>
            </div>
          </Card>
        )}

      </div>
  );
};

export default PaymentIntent;
