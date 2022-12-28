import { useEffect } from 'react';

import NavBar from './NavaBar';
import Banner from './Banner';
import Slide from './Slide'
import {Box, styled} from '@mui/material'
import AdSlide from './AdSlide';
import {getProducts} from '../../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';

const Components = styled(Box)`
    padding: 10px;
    background: #f2f2f2;
`
const Home = ()=>{

    const {products} = useSelector(state=> state.getProducts)

    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getProducts());
    },[dispatch])

    return (
        <>
            <NavBar/>
            <Components>
                <Banner/>
                <AdSlide products={products} title="Deals of the Day" timer={true}/>
                <Slide products={products} title="Discounts for you" timer={false}/>
                <Slide products={products} title="Suggested Item" timer={false}/>
                <Slide products={products} title="Top Selection" timer={false}/>
                <Slide products={products} title="Recommended Items" timer={false}/>
                <Slide products={products} title="Trending Offers" timer={false}/>
                <Slide products={products} title="Season's top picks" timer={false}/>
                <Slide products={products} title="Top Deals on Accessories" timer={false}/>
            </Components>
        </>
    )
}

export default Home;