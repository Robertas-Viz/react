import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_2uBWbJDbp6KrDvg7XahDF79Z00bYRqfXKg';

  

  return (
    <StripeCheckout
      label='Pay Now'
      name='Elena Majauskiene Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
     
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
