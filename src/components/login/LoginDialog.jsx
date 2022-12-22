import {useState, useContext} from 'react'
import { Box, Button, Dialog, TextField, Typography,styled } from "@mui/material";

import {DataContext} from '../../context/DataProvider'

import { authenticateSignup, authenticateLogin } from '../../service/api';

const Component = styled(Box)`
    height: 70vh;
    width: 90vh;
    display:flex;
`

const LeftBox = styled(Box)`
    background: #2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
    height: 83.8%;
    width: 30%;
    padding: 45px 35px;
    &>p, &>h5{
        color: #fff;
    }
`;

const RightBox = styled(Box)`
    display: flex;
    flex-direction: column;
    padding: 25px 35px;
    flex: 1;
    &>div, &>button,&>p{
        margin-top: 20px;
    }
`;

const LoginButton = styled(Button)`
    text-transform: none;
    background: #fb641b;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const RequestOTP = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 
`;

const Text = styled(Typography)`
    font-size: 12px;
    color: #878787;
`

const SignupText = styled(Typography)`
    font-size: 14px;
    color: #2874f0;
    text-align: center;
    font-weight: 600;
    cursor: pointer;
`

const Error = styled(Typography)`
    color: red;
    font-size: 10px;
    line-height: 0;
`

const accountInitialValues ={
    login: {
        view: 'login',
        heading: 'Login',
        subHeading: 'Get access to your Orders, Wishlist and Recommendations'

    },
    signup: {
        view: 'signup',
        heading: "Looks like you're new here",
        subHeading: "Sign up with your mobile number to get started"
    }
};

const signupInitialValues = {
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: '',
    phone: ''
}

const loginInitialValue = {
    username: '',
    password: ''
}

const LoginDialog = ({open,setOpen})=>{

    const [account, toggleAccount] = useState(accountInitialValues.login);
    // change the state to signup
    const toggleSignup = ()=>{
        toggleAccount(accountInitialValues.signup);
    }

    const [login, setLogin] = useState(loginInitialValue);
    

    const [error, setError] = useState(false);

    const [signup, setSignup] = useState(signupInitialValues);
    
    const {setAccount} = useContext(DataContext);

    // to hide dialog box
    const handleClose = ()=>{
        setOpen(false);
        toggleAccount(accountInitialValues.login);
        setError(false);
    }
    // handle signup input change
    const onInputChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setSignup({...signup,[name]:value});
    }

    // handle login input change
    const onValueChange = (e)=>{
        const name = e.target.name;
        const value = e.target.value;
        setLogin({...login,[name]:value});
    }

    const signupUser = async ()=>{
        // signup data passes, to send at backend
        let response = await authenticateSignup(signup);
        console.log(response);
        if(!response){
            return;
        }
        handleClose();
        setAccount(signup.firstname);
    }

    const loginUser = async ()=>{
        let response = await authenticateLogin(login);
        console.log(response);
        if(response.status===200){
            handleClose();
            setAccount(response.data.data.firstname);
        }else{
            setError(true);
        }
    }

    return(
        <Dialog open={open} onClose={handleClose} PaperProps={{sx: {maxWidth: 'unset'}}}>
        {/* Login dialog box container */}
            <Component>
                {/* left side */} 
                <LeftBox>
                    <Typography variant="h5">{account.heading}</Typography>
                    <Typography style={{marginTop: 20}}>{account.subHeading}</Typography>
                </LeftBox> 
                {/* right side */}
                {
                    account.view==='login' ?
                    <RightBox>
                        { error && <Error>Please Enter valid username and password!</Error> }
                        <TextField variant="standard" onChange={(e)=> onValueChange(e)} name='username' label='Enter Username'/>
                        <TextField variant="standard" onChange={(e)=> onValueChange(e)} name='password' label='Enter password'/>
                        <Text>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy</Text>
                        <LoginButton onClick={()=>loginUser()}>Login</LoginButton>
                        <Typography style={{textAlign: 'center'}}>OR</Typography>
                        <RequestOTP>Request OTP</RequestOTP>
                        <SignupText onClick={toggleSignup}>New to Flipkart? Create an account</SignupText>
                    </RightBox>
                    :
                    <RightBox>
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} label='Enter First Name' name='firstname'/>
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} label='Enter Last Name' name='lastname'/>
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} label='Enter Username' name='username'/>
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} label='Enter Email' name='email'/>
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} label='Enter Password' name='password'/>
                        <TextField variant="standard" onChange={(e)=> onInputChange(e)} label='Enter Phone' name='phone'/>
                        <LoginButton onClick={()=>signupUser()}>Continue</LoginButton>
                    </RightBox>
                }
            </Component>
        </Dialog>
    )
}

export default LoginDialog;