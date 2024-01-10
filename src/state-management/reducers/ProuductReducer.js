import { ADD_PRODUCTS, DEC_PRODUCTS_QTY, EDIT_PRODUCTS, INC_PRODUCTS_QTY, REMOVE_PRODUCTS } from '../action/actionTypes'
import {data} from '../../data/data'
export const ProuductReducer = function(state=data, action){
    switch (action.type) {
        case ADD_PRODUCTS:
            return [...state, action.payload];
        case REMOVE_PRODUCTS:
            return [...state.filter(q => q.productId !== action.payload)]
        case EDIT_PRODUCTS:
            return [...state.filter((i)=>i.productId !== action.payload.Item.productId),action.payload.values]
        case INC_PRODUCTS_QTY:
            return state.map(i=>i.productId===action.payload.productId?i.quantity-1:i)
        case DEC_PRODUCTS_QTY:
            return state.map(i=>i.productId===action.payload.productId?i.quantity+1:i)
        default:
            return state;
    }
}