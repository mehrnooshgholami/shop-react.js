import { ADD_USERS, EDIT_USERS, REMOVE_USERS,ADD_CART,REMOVE_CART, INC_CART_QTY, DEC_CART_QTY } from "./actionTypes"

export const addUser = (item) => ({
    type:ADD_USERS,
    payload: item
})

export const removeUser = (id) => ({
    type:REMOVE_USERS,
    payload:id
})

export const editUser = (userId,values) => ({
    type:EDIT_USERS,
    payload:{userId,values}
})
export const add_cart = (item,userId) => ({
    type:ADD_CART,
    payload:{item,userId}
})

export const remove_cart = (userId,productId) => ({
    type:REMOVE_CART,
    payload:{userId,productId}

})
export const inc_cart_qty = (userId,productId) => ({
    type:INC_CART_QTY,
    payload:{userId,productId}
})

export const dec_cart_qty = (userId,productId) => ({
    type:DEC_CART_QTY,
    payload:{userId,productId}
})