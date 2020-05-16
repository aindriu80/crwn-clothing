import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_EimlSXNWuBUumZLgAMmUGU9G';
  const token = token => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token
      }
    }).then(response =>{
      alert('Payment Successful')
    }).catch(error=>{
      console.log('Payment error: ', JSON.parse(error));
      alert(
        'There was an issue with your payment.  Please make sure you use an approved credit card'
      );
    })
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
