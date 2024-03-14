import { ADD_PRODUCTS, DEC_PRODUCTS_QTY, EDIT_PRODUCTS, INC_PRODUCTS_QTY, REMOVE_PRODUCTS } from "./actionTypes"

export const addProudcts = (item) => ({
    type:ADD_PRODUCTS,
    payload:item
})

export const removeProducts = (productId) => ({
    type:REMOVE_PRODUCTS,
    payload:productId
})

export const editProducts = (Item,values) => ({
    type:EDIT_PRODUCTS,
    payload:{Item,values}
})

export const inc_products_qty = (productId) => ({
    type:INC_PRODUCTS_QTY,
    payload:productId
})

export const dec_products_qty = (productId) => ({
    type:DEC_PRODUCTS_QTY,
    payload:productId
})