import React, { useState } from 'react'
import { BrowserRouter as  Link, NavLink,Redirect,useHistory} from 'react-router-dom';

export const UserPanel = ({setPaneluser, setFormRegisterShow, setFormLoginShow, loggedin}) => {
    const [a,seta] = useState(JSON.parse(localStorage.getItem('user')))
    const history=useHistory()
    return (
        <>
            {
                a?
                <>
                <div>
                <div class=" container-fluid bg-secondary py-2 px-xl-5">
                    <div class="d-inline-flex align-items-center">
                        <a class="text-dark" href="#" onClick={a => {history.push("/")}}>Home</a>
                        <span class="text-muted px-2">|</span>
                        <a class="text-dark" href="#" onClick={a =>{seta(localStorage.clear())}}>log out</a>
                        <span class="text-muted px-2">|</span>
                    </div>
                </div>
            </div>

            <div>
                <h4 class="py-3">Welcome {a.firstName}</h4>
            </div>
            <div class="container-fluid">
                <div class="row flex-nowrap">
                    <div class="col-auto col-md-3 col-xl-2 px-sm-2 px-0 border">
                        <div class="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 min-vh-100">
                            <ul class="navbar-nav flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start">
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0 border-bottom">
                                        <i class="fas fa-address-card"></i> <span class="ms-1 d-none d-sm-inline">Your Information</span>
                                    </a>
                                </li>
                                <li class="nav-item">
                                    <a href="#" class="nav-link align-middle px-0">
                                        <i class="fas fa-cart-arrow-down"></i> <span class="ms-1 d-none d-sm-inline">Your Orders</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            </>
                :
            <Redirect to="/login"/>
}
        </>

    )
}





