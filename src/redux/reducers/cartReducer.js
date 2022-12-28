
import * as actionType from '../constants/cartConstant';

export const cartReducer = (state={cartItems:[]},action) =>{
    switch(action.type){
        case actionType.ADD_TO_CART:
            const item = action.payload;
            const exist = state.cartItems.find(product =>product.id ===item.id);
            if(exist){
                return{
                    ...state, cartItems: state.cartItems.map(data=> data.product===exist.product ? item : data)
                }
            }
            else{
                return{
                    ...state,
                    cartItems: [...state.cartItems, item]
                }
            };
        case actionType.REMOVE_FROM_CART:
            return{
                ...state,
                cartItems: state.cartItems.filter( item => item.id !== action.payload)
            };
        case actionType.ADD_TO_CART_ERROR:
            return{
                ...state,
                error: action.payload
            };
        case actionType.CART_RESET:
            return{
                ...state,
                cartItems: []
            };
        default:
            return state;
    }
}

