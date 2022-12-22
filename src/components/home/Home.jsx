import { useEffect } from 'react';

import NavBar from './NavaBar';
import Banner from './Banner';

import {Box, styled} from '@mui/material'

import {getProducts} from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';

const Components = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home = ()=>{

    const {products} = useSelector(state=> state.getProducts)
    console.log(products)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return (
        <>
            <NavBar/>
            <Components>
                <Banner/>
            </Components>
        </>
    )
}

export default Home;