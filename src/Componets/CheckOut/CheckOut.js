import React, { useContext } from 'react';
import "./CheckOut.css";
import { Grid, Paper } from "@mui/material";
import CheckoutItems from './CheckOutItems.js';

function Checkout(props) {
    return (
        <div className="checkout__body">
             <Grid container >
                 <Grid item={10}>
                    <div className="checkout__container">
                        <div style={{fontSize: "30px" , fontWeight: "500" , padding : "20px 0px 0px 20px"}}>Shopping Cart</div>
                        <div>
                            <CheckoutItems />
                            <CheckoutItems />
                            <CheckoutItems /> 
                        </div>
                    </div>
                 </Grid>
                 <Grid item={2}>
                    <div style={{ width: "300px", height:"200px", padding: "20px", marginTop: "25px", backgroundColor: "white"}}>
                        <div style={{ fontSize: "26px"}}>Subtotal ( {2} items): <strong>{ 24000 }</strong></div>
                        <div style={{paddingTop : "25px "}}>
                            <button className="placeorder__button" >Proceed to Buy</button>
                        </div>
                    </div>
                 </Grid>
             </Grid>
        </div>
    );
}

export default Checkout;