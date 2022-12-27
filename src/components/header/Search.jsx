import { useState, useEffect } from "react";
import { InputBase,Box,styled, List, ListItem } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search"

import { useSelector, useDispatch } from "react-redux";
import { getProducts } from "../../redux/actions/productAction";
import { Link } from "react-router-dom";
const SearchContainer = styled(Box)`
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin: 0 0 0 10px;
    display: flex;
    
`

const InputSearchBase = styled(InputBase)`
    padding : 0 0 0 20px;
    width: 100%;
    font-size: unset;
    
`
const SearchIconWrapper = styled(Box)`
    color: blue;
    padding: 5px;

`

const ListWrapper = styled(List)`
    position: absolute;
    background: #fff;
    color: #000;
    margin-top: 35px;

`
const Search = ()=>{
    const [query, setQuery] = useState('');

    const {products} = useSelector(state => state.getProducts);

    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getProducts())
    },[dispatch])

    const getQuery = (query)=>{
        setQuery(query)
    }
    return (
        <SearchContainer>
            <InputSearchBase 
                placeholder="Search for products, brands and more"
                onChange={(e)=> getQuery(e.target.value)}
            />
            <SearchIconWrapper>
                <SearchIcon/>
            </SearchIconWrapper>
            {
                query &&
                <ListWrapper>
                    {
                        products.filter(product => product.title.longTitle.toLowerCase().includes(query.toLowerCase())).map(product=>(
                            <ListItem>
                                <Link 
                                    to={`/product/${product.id}`}
                                    onClick={()=> setQuery('')}
                                    style={{textDecoration:'none',color: 'inherit'}}
                                    >
                                    {product.title.longTitle}
                                </Link>
                            </ListItem>
                        ))
                    }
                </ListWrapper>
            }
        </SearchContainer>
    )
}

export default Search;