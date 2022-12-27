import { useEffect } from "react";

import {useDispatch} from 'react-redux'
import { useParams } from "react-router-dom";

import { getProductDetails } from "../../redux/actions/productAction";


const DetailView = ()=>{

    const dispatch = useDispatch();

    const {id} = useParams();

    useEffect(()=>{
        dispatch(getProductDetails(id));
    }, [dispatch,id]);

    return(
        <div>Hello World</div>
    )
}


export default DetailView;