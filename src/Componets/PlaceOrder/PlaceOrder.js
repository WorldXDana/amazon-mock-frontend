import React from "react";
import "./PlaceOrder.css"
import { Grid, Paper } from "@mui/material";

function PlaceOrder(props) {
    return (
        <div>
            <Grid container>
                <Grid item xs={5}>
                    <img className="placeOrder_image" src= "https://ik.imagekit.io/amazon123/71i2XhHU3pL._AC_UL640_FMwebp_QL65__bSvBM9yyu9E.webp?updatedAt=1628852293583"></img>
                </Grid>
                <Grid item xs={4}>
                  <div className="placeHolder_description">
                    <div style={{fontSize:"24px", lineHeight:"32px", fontWeight: 500}}>  New Apple Iphone 11 (128GB) </div>
                        <div>
                                1000+ answered questions
                        </div>
                        <hr></hr>
                        <div>
                            <div className="priceTag">Price: $4600</div>
                            <div className="textgap">FREE delivery</div>
                        </div>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <Paper variant="outlined"className="placeorder_order">
                        <button className="placeorder_button addtocart">Add To Cart</button>
                        <button className="placeorder_button buynow">Buy Now</button>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
}

export default PlaceOrder;