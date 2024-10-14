'use client'
import React from 'react';
import {loadStripe} from "@stripe/stripe-js";
import Stripe from 'stripe'
import {useLayout} from "@/hooks/useLayout";
import Lottie from "lottie-react";
import dataSuccess from '@/assets/icons/animation/success-data-animation.json'
import dataError from '@/assets/icons/animation/error-data-animation.json'
import moment from "moment";
import {Button, Flex, Spin} from "antd";
import Link from "next/link";
import {useRouter, useSearchParams} from "next/navigation";
import {LoadingOutlined} from "@ant-design/icons";

const SuccessIcon =
  <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M15.4695 0.232963C15.8241 0.561287 15.8454 1.1149 15.5171 1.46949L6.14206 11.5945C5.97228 11.7778 5.73221 11.8799 5.48237 11.8748C5.23253 11.8698 4.99677 11.7582 4.83452 11.5681L0.459523 6.44311C0.145767 6.07557 0.18937 5.52327 0.556912 5.20951C0.924454 4.89575 1.47676 4.93936 1.79051 5.3069L5.52658 9.68343L14.233 0.280522C14.5613 -0.0740672 15.1149 -0.0953599 15.4695 0.232963Z" fill="white"/>
  </svg>;

const ErrorIcon =
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M1.25628 1.25628C1.59799 0.914573 2.15201 0.914573 2.49372 1.25628L8 6.76256L13.5063 1.25628C13.848 0.914573 14.402 0.914573 14.7437 1.25628C15.0854 1.59799 15.0854 2.15201 14.7437 2.49372L9.23744 8L14.7437 13.5063C15.0854 13.848 15.0854 14.402 14.7437 14.7437C14.402 15.0854 13.848 15.0854 13.5063 14.7437L8 9.23744L2.49372 14.7437C2.15201 15.0854 1.59799 15.0854 1.25628 14.7437C0.914573 14.402 0.914573 13.848 1.25628 13.5063L6.76256 8L1.25628 2.49372C0.914573 2.15201 0.914573 1.59799 1.25628 1.25628Z" fill="white"/>
  </svg>;

const InfoIcon =
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M10 1.5H4C2.61929 1.5 1.5 2.61929 1.5 4V10C1.5 11.3807 2.61929 12.5 4 12.5H10C11.3807 12.5 12.5 11.3807 12.5 10V4C12.5 2.61929 11.3807 1.5 10 1.5ZM4 0C1.79086 0 0 1.79086 0 4V10C0 12.2091 1.79086 14 4 14H10C12.2091 14 14 12.2091 14 10V4C14 1.79086 12.2091 0 10 0H4Z" fill="white"/>
    <path fillRule="evenodd" clipRule="evenodd" d="M5.25 7C5.25 6.58579 5.58579 6.25 6 6.25H7.25C7.66421 6.25 8 6.58579 8 7V10.5C8 10.9142 7.66421 11.25 7.25 11.25C6.83579 11.25 6.5 10.9142 6.5 10.5V7.75H6C5.58579 7.75 5.25 7.41421 5.25 7Z" fill="white"/>
    <path d="M5.75 4C5.75 3.31075 6.31075 2.75 7 2.75C7.68925 2.75 8.25 3.31075 8.25 4C8.25 4.68925 7.68925 5.25 7 5.25C6.31075 5.25 5.75 4.68925 5.75 4Z" fill="white"/>
  </svg>;

const stripePublicKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
if(!stripePublicKey) {
  throw new Error(' Not found public key of stripe payment')
}

const STATUS_CONTENT_MAP = {
  succeeded: {
    text: "Payment succeeded",
    iconColor: "#30B130",
    icon: SuccessIcon,
  },
  processing: {
    text: "Your payment is processing.",
    iconColor: "#6D6E78",
    icon: InfoIcon,
  },
  requires_payment_method: {
    text: "Your payment was not successful, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  default: {
    text: "Something went wrong, please try again.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  canceled: {
    text: "Your payment cancaled.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  requires_action: {
    text: "requires_action.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  requires_capture: {
    text: "zSomething went wrong, please try agairequires_capturen.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
  requires_confirmation: {
    text: "requires_confirmation.",
    iconColor: "#DF1B41",
    icon: ErrorIcon,
  },
};
const ReturnIntentPayment = () => {
  const {setState} = useLayout()
  const [loading, setLoading] = React.useState<boolean>(false);
  const [paymentIntent, setPaymentIntent] = React.useState<Stripe.Response<Stripe.PaymentIntent>>();

  const router = useRouter()
  const searchParams = useSearchParams()

  const params = new URLSearchParams(searchParams)
  const paymentIntentID = params.get("payment_intent");
  const isConfirmed = params.get("confirmed");

  const status = paymentIntent?.status || 'canceled'

  React.useEffect(() => {
    setLoading(true)

    if(Boolean(isConfirmed)) {
      router.replace('/search')
      return
    }

    if (!paymentIntentID) {
      return;
    }

    fetch(`/api/create-payment-intent?payment_intent_id=${paymentIntentID}`, {
      method: 'GET'
    }).then(res => res.json())
      .then((data: {paymentIntent: Stripe.Response<Stripe.PaymentIntent>}) => {
        console.log('data', data)
        setPaymentIntent(data.paymentIntent);
      }).catch((err) => {
      console.error(`Get payment intent failed: ${err}`)
    }).finally(() => {
      params.set('confirmed', '1')
      router.push(`/book/return-intent?${params.toString()}`)
      setLoading(false)
    })
  }, [])

  if(loading) {
    return <Flex style={{minHeight: '100vh'}} align='center' justify='center'>
      <Spin indicator={<LoadingOutlined spin />} size="large" />
    </Flex>
  }
  if(!paymentIntent) {
    return
  }

  const createdAt = (paymentIntent.created && new Date(paymentIntent.created) instanceof Date) ? moment(new Date(paymentIntent.created)).format('DD-MM-YYYY HH:mm:ss') : '__'

  const isPaymentSuccess = paymentIntent.status=='succeeded'

  return (
    <div id="payment-status" className='max-w-xl mx-auto flex flex-col justify-center shadow-lg rounded-xl p-4 my-8'>

      <Lottie style={{width: '80px', height: '80px', margin: 'auto'}} animationData={isPaymentSuccess ? dataSuccess: dataError} loop={false} />
      <h2 id="status-text" className='text-xl font-bold text-center my-3'>{STATUS_CONTENT_MAP?.[status]?.text}</h2>
      {isPaymentSuccess && (
        <>
          <h1 className='text-center text-3xl font-bold'><span className='text-green-600'>{paymentIntent.amount}</span> {paymentIntent.currency}</h1>
          <hr className='my-4' />
          {paymentIntent && <div id="details-table">
            <div className='flex flex-col gap-y-2'>
              <div className='flex justify-between gap-x-2'>
                <div className='text-[#595959]'>ID Payment</div>
                <div className='font-bold'>{paymentIntent.id}</div>
              </div>
              <div className='flex justify-between gap-x-2'>
                <div className='text-[#595959]'>Created at</div>
                <div className='font-bold'>{createdAt}</div>
              </div>
            </div>

            <div className='mt-4 w-full'>
              <Link href='/search'>
                <Button type='primary' style={{backgroundColor: '#16a34a', width: "100%"}} size='large'>Hoàn thành</Button>
              </Link>
            </div>
          </div>}
        </>
      )}
      {/*{paymentIntent?.id && <a href={`https://dashboard.stripe.com/payments/${paymentIntent.id}`} id="view-details" target="_blank">View details*/}
      {/*  <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg" style={{paddingLeft: '5px'}}>*/}
      {/*    <path fillRule="evenodd" clipRule="evenodd" d="M3.125 3.49998C2.64175 3.49998 2.25 3.89173 2.25 4.37498V11.375C2.25 11.8582 2.64175 12.25 3.125 12.25H10.125C10.6082 12.25 11 11.8582 11 11.375V9.62498C11 9.14173 11.3918 8.74998 11.875 8.74998C12.3582 8.74998 12.75 9.14173 12.75 9.62498V11.375C12.75 12.8247 11.5747 14 10.125 14H3.125C1.67525 14 0.5 12.8247 0.5 11.375V4.37498C0.5 2.92524 1.67525 1.74998 3.125 1.74998H4.875C5.35825 1.74998 5.75 2.14173 5.75 2.62498C5.75 3.10823 5.35825 3.49998 4.875 3.49998H3.125Z" fill="#0055DE"/>*/}
      {/*    <path d="M8.66672 0C8.18347 0 7.79172 0.391751 7.79172 0.875C7.79172 1.35825 8.18347 1.75 8.66672 1.75H11.5126L4.83967 8.42295C4.49796 8.76466 4.49796 9.31868 4.83967 9.66039C5.18138 10.0021 5.7354 10.0021 6.07711 9.66039L12.7501 2.98744V5.83333C12.7501 6.31658 13.1418 6.70833 13.6251 6.70833C14.1083 6.70833 14.5001 6.31658 14.5001 5.83333V0.875C14.5001 0.391751 14.1083 0 13.6251 0H8.66672Z" fill="#0055DE"/>*/}
      {/*  </svg>*/}
      {/*</a>}*/}
      {/*<a id="retry-button" href="/">Test another</a>*/}
    </div>
  );
};

export default ReturnIntentPayment;
