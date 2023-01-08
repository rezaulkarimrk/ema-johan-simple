import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import  { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'

function Product(props) {
    // console.log(props.product.name); 
    const {img, name, seller, price, stock} = props.product;
    // console.log
  return (
    <div className='product' >
        <div>
            <img src={img} />
        </div>
        <div>
            <h4 className='product-name' >{props.product.name}</h4>
            <br/>
            <p><small>by{seller}</small></p>
            <p>${price}</p>
            <p><small>Only {stock} left in stock - Orde soon </small></p>
            <button className='main-button' onClick={()=>props.handleAddProduct(props.product)} > 
              < FontAwesomeIcon icon={faShoppingCart} /> add to cart
            </button>
        </div>
    </div>
  )
}

export default Product
