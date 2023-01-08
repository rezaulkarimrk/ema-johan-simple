import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    // const total = cart.reduce( (total, prd) => total+prd.price , 0)
    // const total = cart.reduce((total, prd)=> total+prd.price, 0);
    let total = 0;
    for(let i=0; i<cart.length; i++){
        total+=parseFloat(cart[i].price);
    }

    let shipping = 0;
    if(total > 35) shipping = 0;
    else if(total>15) shipping = 4.99;
    else if(total > 0) shipping=12.99;

    const tax =  (total * 0.1);

    const formateNumber = numb => {
        const precision = numb.toFixed(2);
        return precision;
    }
    
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Itms Order: {cart.length}</p>
            <p>Product Price: {formateNumber(total)}</p>
            <p><small>Shipping Cost: {formateNumber(shipping)}</small></p>
            <p><small>Tax + Vat: {formateNumber(tax)} </small></p>
            <p>Total Price: {formateNumber(total + shipping + tax)}</p>
        </div>
    );
};

export default Cart;