import React, { useState } from 'react'
import { NavLink, Route, Routes, redirect,useNavigate,Outlet} from 'react-router-dom';
import { EditInformation } from '../EditInformation';

export const UserPanel = ({setPaneluser, setFormRegisterShow, setFormLoginShow, loggedin}) => {
    const [a,seta] = useState(JSON.parse(localStorage.getItem('user')))
    const navigate=useNavigate()
    return (
        <>
            {
                a?
                <>
                <div>
                <div class=" container-fluid bg-secondary py-2 px-xl-5">

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
                                    <NavLink class="nav-link align-middle px-0 border-bottom" to="/login/userpanel/information">
                                        <i class="fas fa-address-card"></i> <span class="ms-1 d-none d-sm-inline">Your Information</span>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/login/userpanel/cart" class="nav-link align-middle px-0">
                                        <i class="fas fa-cart-arrow-down"></i> <span class="ms-1 d-none d-sm-inline">Your Orders</span>
                                    </NavLink>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link align-middle px-0" href="#" onClick={a =>{seta(null);localStorage.clear();navigate("/login", { replace: true})}}> 
                                         <i class="fa fa-sign-out"></i> <span class="ms-1 d-none d-sm-inline">log out</span>
                                    </a>
                                </li>
                               
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                {/* <Routes>
                    <Route path='/login/userpanel/information' index element={<EditInformation/>}></Route>
                </Routes> */}

                <Outlet/>
            </div>
            </>
                :
            <>
                {
                    redirect("/login")
                }
            </>
}
        </>

    )
}





