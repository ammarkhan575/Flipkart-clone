import {useState} from 'react'
import { Box, Button, styled } from "@mui/material"

import {ShoppingCart as Cart, FlashOn as Flash} from '@mui/icons-material';

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";

const LeftDetail = styled(Box)(({theme})=>({
    minWidth: '40%',
    padding: '40px 0 0 80px',
    [theme.breakpoints.down('lg')]:{
        padding: '20px 40px'
    }

}))


const Image = styled('img')({
    width: '95%',
    padding: '15px'
})

const StyledButton = styled(Button)(({theme})=>({
    width:'48%',
    height: '50px',
    borderRadius: '2px',
    [theme.breakpoints.down('lg')]:{
        width: '45%',
        fontSize: '0.65em'
    },
    [theme.breakpoints.down('sm')]:{
        width: '48%'
    }
}))


const ProductImage = ({product})=>{
    const [quantity,setQuantity] = useState(1);
    setQuantity(1);
    const naviagate = useNavigate();
    const dispatch = useDispatch();
    const {id} = product;
    const addItemToCart = ()=>{
        dispatch(addToCart(id,quantity));
        naviagate('/cart');
    }

    return(
        <LeftDetail>
            <Box style={{padding: '15px 20px', border: '1px solid #f0f0f0', width: '90%'}}>
                <Image src={product.detailUrl} alt="product" />
            </Box>
            <StyledButton variant="contained" onClick={()=> addItemToCart()} style={{marginRight: 10, background: '#ff9f00'}}><Cart/>Add to Cart</StyledButton>
            <StyledButton variant="contained" style={{background: '#fb541b'}}><Flash/>Buy Now</StyledButton>
        </LeftDetail>
    )
}

export default ProductImage;