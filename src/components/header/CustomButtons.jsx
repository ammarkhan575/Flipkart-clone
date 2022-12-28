import { useState , useContext} from 'react'
import {Box,Button, Typography,styled, Badge} from '@mui/material'
import {ShoppingCart} from '@mui/icons-material'

import {Link} from 'react-router-dom'

import {useSelector} from 'react-redux'

import { DataContext } from '../../context/DataProvider';

// components
import LoginDialog from '../login/LoginDialog'
import Profile from './Profile'

const Wrapper = styled(Box)(({theme})=>({
    display: 'flex',
    alignItems: 'center',
    margin:'0 3% 0 0',
    '& > button, &>p , &>div':{
        marginRight: '40px',
        fontSize: '15px'
    },
    [theme.breakpoints.down('md')]:{
        display: 'block',
        marginTop: '200px',
        '& > *':{
            marginTop: '20px'
        }
    }
}))
const FlexContainer = styled(Link)(({theme})=>({
    display: 'flex',
    textDecoration: 'none',
    color: 'inherit',
    [theme.breakpoints.down('md')]:{
        display: 'block'

    }
}))

const LoginButton = styled(Button)`
    ${'' /* color: #2874f0;
    background: #fff; */}
    color: #fff;
    background: #2874f0;
    text-transform: none;
    padding: 5px 40px;
    border-radius: 2px;
    box-shadow:none;
    font-weight: 600; 
    height: 32px;
`

const CustomButtons = ()=>{
    const [open, setOpen] = useState(false);
    const openDialog = ()=>{
        setOpen(true);
    }

    const {cartItems} = useSelector(state => state.cart)

    const {account, setAccount} = useContext(DataContext);
    return (
        <Wrapper>
            {
                account?
                <Profile account={account} setAccount={setAccount}/>
                :
                <LoginButton variant='contained' onClick={()=> openDialog()}>Login</LoginButton>
            }

            <Typography style={{width: 135}}>Become a Seller</Typography>
            <Typography>More</Typography>

            <FlexContainer to='/cart'>
                <Badge badgeContent={cartItems?.length} color="primary">
                    <ShoppingCart/>
                </Badge>
                <Typography style={{marginLeft: 10}}>Cart</Typography>
            </FlexContainer>
            <LoginDialog open={open} setOpen={setOpen}/>
        </Wrapper>
    )
};

export default CustomButtons;