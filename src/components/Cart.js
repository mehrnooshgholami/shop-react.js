import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {dec_cart_qty, inc_cart_qty, remove_cart} from "../state-management/action/UsersAction"
import { dec_products_qty, inc_products_qty } from '../state-management/action/productsAction'
import { Navigate } from 'react-router-dom'
export const Cart = () => {
    const users = useSelector(store=>store.userState)
    const products = useSelector(store=>store.ProuductState)
    const [login,setlogin] = useState(JSON.parse(localStorage.getItem('user')))
    const dispatch = useDispatch()

    if(login){
        const user = users.filter(i=>i.userId===login.userId)
        const cart = user[0].cart

        const overallTotal = cart.reduce((acc, item) => {
            return acc + (item.productOff === 0 ? item.productPrice * item.user_quantity : Math.round(item.user_quantity * item.productPrice - (item.productPrice * item.productOff) / 100));
          }, 0);

        return (
        <>
        <div>
        <div class="container-fluid bg-secondary mb-5">
            <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
                <h1 class="font-weight-semi-bold text-uppercase mb-3">Shopping Cart</h1>
                <div class="d-inline-flex">
                    <p class="m-0">Shopping Cart</p>
                </div>
            </div>
        </div>
    
        <div class="container-fluid pt-5">
            <div class="row px-xl-5">
                <div class="col-lg-8 table-responsive mb-5">
                    <table class="table table-bordered text-center mb-0">
                        <thead class="bg-secondary text-dark">
                            <tr>
                                <th>Products</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Total</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody class="align-middle">
                            {
                                cart.length===0?
                                    
                                        <tr>
                                            <p>سفارشی اضافه نشده</p>
                                        </tr>
                                    
                                :
                                    cart.map(item=>(
                                        <tr>
                                        <td class="align-middle"><img src="img/product-3.jpg" alt="" style={{width: "50px"}}/>{item.productName}</td>
                                        <td class="align-middle">{item.productPrice}</td>
                                        <td class="align-middle">
                                            <div class="input-group quantity mx-auto" style={{width: "100px"}}>
                                                <div class="input-group-btn">
                                                    <button class="btn btn-sm btn-primary btn-minus" onClick={() => 
                                                    item.user_quantity - 1 === 0
                                                        ?dispatch(remove_cart(login.userId,item.productId))
                                                        :dispatch(dec_cart_qty(login.userId, item.productId))&&
                                                        dispatch(inc_products_qty(item.productId))
                                                    }
                                                        >    
                                                    <i class="fa fa-minus"></i>
                                                    </button>
                                                </div>
                                                <p  class="form-control form-control-sm bg-secondary text-center">{item.user_quantity}</p>
                                                <div class="input-group-btn">
                                                    <button class="btn btn-sm btn-primary btn-plus" 
                                                   
                                                        onClick={() => 
                                                            (item.admin_quantity === item.user_quantity) 
                                                                ? null // Do nothing if admin_quantity equals user_quantity
                                                                : dispatch(inc_cart_qty(login.userId, item.productId)) && dispatch(dec_products_qty(item.productId))
                                                        }
                                                        >
                                                        <i class="fa fa-plus"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </td>
                                        <td class="align-middle">{item.productPrice*item.user_quantity}</td>
                                        <td class="align-middle"><button class="btn btn-sm btn-primary" onClick={a=>dispatch(remove_cart(login.userId,item.productId))}><i class="fa fa-times"></i></button></td>
                                    </tr>
                                    ))
                                
                            }
                        </tbody>
                    </table>
                </div>
                <div class="col-lg-4">
                <tr>
                    <td colSpan='5' className='h5'>
                      Total:
                    </td>
                    <td colSpan='2' className='h5'>
                      {overallTotal}$
                    </td>
                  </tr>
                </div>
            </div>
        </div>
    
    
        <div class="container-fluid bg-secondary text-dark mt-5 pt-5">
            <div class="row px-xl-5 pt-5">
                <div class="col-lg-4 col-md-12 mb-5 pr-3 pr-xl-5">
                    <a href="" class="text-decoration-none">
                        <h1 class="mb-4 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border border-white px-3 mr-1">E</span>Shopper</h1>
                    </a>
                    <p>Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no sit erat lorem et magna ipsum dolore amet erat.</p>
                    <p class="mb-2"><i class="fa fa-map-marker-alt text-primary mr-3"></i>123 Street, New York, USA</p>
                    <p class="mb-2"><i class="fa fa-envelope text-primary mr-3"></i>info@example.com</p>
                    <p class="mb-0"><i class="fa fa-phone-alt text-primary mr-3"></i>+012 345 67890</p>
                </div>
                
            </div>
        </div>
        </div>
        </>
        )
}else{
    return <Navigate to="/login" replace/>
}

}
