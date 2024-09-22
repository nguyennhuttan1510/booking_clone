'use client'
import React, {useCallback} from 'react';
import { loadStripe } from '@stripe/stripe-js';
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout
} from '@stripe/react-stripe-js';
const PaymentScreen = () => {
  const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
  if(!stripePublicKey) {
    throw new Error(' Not found public key of stripe payment')
  }
  const stripePromise = loadStripe(stripePublicKey)

  const fetchClientSecret = useCallback(() => {
    // Create a Checkout Session
    return fetch("/api/checkout_sessions", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json', // Set the content type to JSON
      },
      body: JSON.stringify({product_id: 'price_1Q1Ig6ELqLxwMVY9ZMWMJLd9'}), // Convert the data to a JSON string
    })
        .then((res) => res.json())
        .then((data) => {
          console.log('data.clientSecret', data.clientSecret)
          return data.clientSecret
        }).catch((err) => {
          console.error('err', err)
        });
  }, []);

  const options = {fetchClientSecret};
  return (
      <div id="checkout">
        <EmbeddedCheckoutProvider
            stripe={stripePromise}
            options={options}
        >
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
  );
};

export default PaymentScreen;
