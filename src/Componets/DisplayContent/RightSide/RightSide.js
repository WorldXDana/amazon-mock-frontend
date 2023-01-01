import React, { useEffect, useState } from 'react';
import "./RightSide.css";
import Product from './Product';
import { Link } from 'react-router-dom';

function RightSide(props) {

    const [listOfProduct,setListOfProducts] = useState([]);

    useEffect(()=>{
        //api call
        let list =[
            { name : "Iphone10",  price: "$4534", image:"https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583"},
            { name : "Iphone11",  price:"$76543456", image:"https://ik.imagekit.io/amazon123/71ZOtNdaZCL._AC_UL640_FMwebp_QL65__mSWkMhTkWnT.webp?updatedAt=1628852292388"},
            { name : "Iphone12",  price:"$76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { name : "Iphone13",  price:"$637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"},
            { name : "Iphone12", price:"$76543", image:"https://ik.imagekit.io/amazon123/71w3oJ7aWyL._AC_UL640_FMwebp_QL65__vN39lpgzi.webp?updatedAt=1628852294578"},
            { name : "Iphone13", price:"$637357", image:"https://ik.imagekit.io/amazon123/51PuFBgBK4L._AC_UL640_FMwebp_QL65__3iZl6oRR-.webp?updatedAt=1628852291461"}
    
        ]
        
        setListOfProducts(list);
    },[]);

    return (
    <div className='RightSide'>
        {   
            listOfProduct.map ( (item) =>(
                <Product image={item.image} name={item.name} price={item.price} />
            ))
        }
    </div>
  );
}

export default RightSide;