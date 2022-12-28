import { Box, Typography, styled } from "@mui/material";
import { useState, useEffect } from "react";


const Detail = styled(Box)`
    padding: 15px 24px;
    border-bottom: 1px solid #f0f0f0;
    background: #fff;
`

const Container = styled(Box)`
    padding: 15px 24px;
    background: #fff;
    & > p{
        margin-bottom: 20px;
        font-size: 14px;
    }
    &>h6{
        margin-bottom: 20px;
    }
`

const Price = styled(Box)`
    float: right;
`

const Discount = styled(Typography)`
    color: green;
`

const CartPayment = ({cartItems})=>{

    const [price,setPrice] = useState(0);
    const [discount,setDiscount] = useState(0);

    

    const totalAmount = ()=>{
        let price = 0, discount=0;
        cartItems.forEach(item=>{
            price+=item.price.mrp;
            discount+=(item.price.mrp - item.price.cost)
        })
        setPrice(price);
        setDiscount(discount);
    }

    useEffect(()=>{
        totalAmount();
    },[cartItems])
    
    return(
        <Box>
            <Detail>
                <Typography style={{color: '#878787'}}>PRICE DETAILS</Typography>
            </Detail>
            <Container>
                <Typography>Price ({cartItems?.length} item)
                    <Price component='span'>₹{price}</Price>
                </Typography>
                <Typography>Discount ({cartItems?.length} item)
                    <Price component='span'>-₹{discount}</Price>
                </Typography>
                <Typography>Delivery Charge
                    <Price component='span'>₹40</Price>
                </Typography>
                <Typography variant="h6">Total Amount ({cartItems?.length} item)
                    <Price component='span'>₹{price-discount+40}</Price>
                </Typography>
                <Discount>You will save ₹{discount-40} on this order</Discount>
            </Container>
        </Box>
    )
}

export default CartPayment;