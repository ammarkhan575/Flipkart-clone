import { useEffect } from "react";

import {useDispatch, useSelector} from 'react-redux'
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productAction";
import ProductImage from "./ProductImage";
import {Box, Grid, styled} from '@mui/material'
import ProductDetails from "./ProductDetails";

const Component = styled(Box)`
    background: #f2f2f2;
    margin-top: 55px;
`

const GridContainer = styled(Grid)`
    background: #ffffff;
    display: flex;
`
const RightContainer = styled(Grid)(({theme})=>({
    marginTop: '50px',
    [theme.breakpoints.down('md')]:{
        padding:'20px'
    }
}))
    


const DetailView = ()=>{

    const dispatch = useDispatch();

    const {id} = useParams();

    
    const {loading, product} = useSelector(state=> state.getProductDetails);

    useEffect(()=>{
        if(product && id!==product.id)
            dispatch(getProductDetails(id));
    }, [dispatch,id,loading,product]);

    return(
        <Component>
            {
                product && Object.keys(product).length &&
                <GridContainer container>
                    <Grid item lg={4} md={4} sm={8} xs={12}>
                        <ProductImage product={product}/>
                    </Grid>
                    <RightContainer item lg={8} md={8} sm={8} xs={12}>
                        <ProductDetails product={product}/>
                    </RightContainer>
                </GridContainer>
            }
        </Component>
        // <Typography>{product.discount}</Typography>
    )
}


export default DetailView;