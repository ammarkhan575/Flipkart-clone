
import {Box,Button, Typography,styled} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'

const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    margin: 0 3% 0 0;
    & > button, &>p , &>div{
        margin-right: 40px;
        font-size: 15px;
    }
`
const FlexContainer = styled(Box)`
    display: flex;
`

const LoginButton = styled(Button)`
    color: #2874f0;
    background: #fff;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow:none;
    font-weight: 600; 
    height: 32px;
`

const CustomButtons = ()=>{
    return (
        <Wrapper>
            <LoginButton variant='contained'>Login</LoginButton>

            <Typography style={{width: 135}}>Become a Seller</Typography>
            <Typography>More</Typography>

            <FlexContainer>
                <ShoppingCart/>
                <Typography>Cart</Typography>
            </FlexContainer>
        </Wrapper>
    )
};

export default CustomButtons;