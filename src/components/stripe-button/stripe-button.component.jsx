import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publichableKey = 'pk_test_QT1Xanz7D8qsXri4BaIDKySt00AdwkDr63'

    const onToken = token => {
        console.log(token);
        alert('payment successful');

    }

    return (
        <StripeCheckout
            label='Pay Now'
            name='Trend Clothing'
            billingAddress
            shippingAddress

            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='pay Now'
            token={onToken}
            stripeKey={publichableKey}
        />
    )
}

export default StripeCheckoutButton