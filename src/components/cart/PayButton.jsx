import axios from 'axios';
import {Button, styled} from '@mui/material';

const StyledButton = styled(Button)`
    display: flex;
    margin-left: auto;
    background: #fb641b;
    color: #fff;
    width: 250px;
    height: 50px;
    border-radius: 2px;
`;
const URL = 'https://flipkart-clone-backend.onrender.com'

const PayButton = ({cartItems})=>{
    const handleCheckout = ()=>{
        axios.post(`${URL}/create-checkout-session`,{
            cartItems
        }).then((res)=>{
            if(res.data.url){
                window.location.href = res.data.url;
            }
        }).catch((error)=>console.log(error.message))
    }

    return(
        <>
            <StyledButton onClick={()=> handleCheckout()}>Place Order</StyledButton>
        </>
    )
}

export default PayButton;