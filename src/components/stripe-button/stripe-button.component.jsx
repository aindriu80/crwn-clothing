import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_EimlSXNWuBUumZLgAMmUGU9G';
  const token = token => {
    console.log(token);
    alert('Payment successful');
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      currency="EUR"
      billingAddress
      shippingAddress
      image="https://i.imgur.com/aW4iKgt.png"
      description={`Your total is €${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={token}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
