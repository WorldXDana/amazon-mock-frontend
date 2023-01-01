import React from 'react'
import "./RightSide.css";

function Product(props) {
  return (
    <div className='product'>
        <div className="product__image">
            <img src={props.image} height="280px"/>
        </div>
        <div className="product__name">
            {props.name}
        </div>
        <div className="product__price">
            {props.price}
        </div>
    </div>
  );
}

export default Product;