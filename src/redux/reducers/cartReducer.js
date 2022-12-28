
import * as actionType from '../constants/cartConstant';

export const cartReducer = (state={cartItems:[]},action) =>{
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find((x)=> x.product === item.product);
            if(exist){
                return{
                    ...state,
                    cartItems: state.cartItems.map((x)=> x.product === exist.product ? item : x)
                }
            }else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            }
        case actionType.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter((x)=> x.product !== action.payload)
            }
        case actionType.ADD_TO_CART_ERROR:
            return{
                ...state,
                error: action.payload
            }
        case actionType.CART_RESET:
            return{
                ...state,
                cartItems: []
            }
        default:
            return state;
    }
}

