import { ADD_USERS, EDIT_USERS, REMOVE_USERS,ADD_CART, REMOVE_CART, INC_CART_QTY, DEC_CART_QTY} from "../action/actionTypes";
import {users} from '../../data/data'

export const UserReducer = function(state=users, action){
    switch (action.type) {
        case ADD_USERS:
            return[...state,action.payload];
        case REMOVE_USERS:
            return [...state.filter(q=> q.id !== action.payload)]
        case EDIT_USERS:
            return [...state.filter((i)=>i.userId !== action.payload.userId),action.payload.values]
        case ADD_CART:{
                return state.map((user) =>
                    user.userId === action.payload.userId
                    ? { ...user, cart: [...user.cart, action.payload.item] }
                    : user
                );}
        case REMOVE_CART:
            return state.map((user) =>
                user.userId === action.payload.userId
                ? { ...user, cart: [...user.cart.filter(i=>i.productId!==action.payload.productId)] }
                : user 
            );

        case INC_CART_QTY:
            return state.map((user) =>
                user.userId === action.payload.userId
                    ? {
                        ...user,
                        cart: user.cart.map((item) =>
                            item.productId === action.payload.productId&&item.admin_quantity>0
                                ? { ...item, user_quantity: item.user_quantity + 1 }
                                : item
                        ),
                    }
                    : user
            );
            
        case DEC_CART_QTY:
            return state.map((user) =>
                user.userId === action.payload.userId
                    ? {
                        ...user,
                        cart: user.cart.map((item) =>
                            item.productId === action.payload.productId && item.user_quantity > 0 && item.admin_quantity>0
                                ? { ...item, user_quantity: item.user_quantity - 1 }
                                : item
                        ),
                    }
                    : user
            );
            

        default:
            return state;
    }
}