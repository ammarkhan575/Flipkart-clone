import axios from 'axios'

const URL = process.env.SERVER_URL || 'http://localhost:8000';

export const authenticateSignup = async (data)=>{
    try{
        return await axios.post(`${URL}/signup`,data)
    }
    catch(error){
        console.log('Error while calling signup api',error)
    }
}

export const authenticateLogin = async (data)=>{
    try{
        return await axios.post(`${URL}/login`,data)
    }
    catch(error){
        console.log('Error while calling login api',error);
        return error.response;
    }
}

export const payWithStripe = async ()=>{
    try{
        const response = await axios.post(`${URL}/create-checkout-session`);
        console.log(response);
    }
    catch(error){
        console.log('error while calling stripe api',error);
    }
}