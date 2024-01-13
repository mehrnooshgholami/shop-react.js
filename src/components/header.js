import React from 'react'
import {BrowserRouter as Link, NavLink} from 'react-router-dom';

export const Header = ({appRoutes}) => {
    return (
        <>
            <div class="container-fluid">
                <div class="row bg-secondary py-2 px-xl-5">
                    <div class="col-lg-6 d-none d-lg-block">
                        <div class="d-inline-flex align-items-center">
                            <a class="text-dark" href="">Help</a>
                            <span class="text-muted px-2">|</span>
                            {/* <NavLink class="text-dark" to="/detail">Detail</NavLink> */}
                            {/* <span class="text-muted px-2">|</span> */}
                            <NavLink class="text-dark" to="/">Home</NavLink>
                            <span class="text-muted px-2">|</span>
                            {/* <a class="text-dark" onClick={()=>setformadminshow(true)} href="#">admin</a> */}
                            <NavLink class="text-dark" to="/admin">admin</NavLink>
                            
                            {/* <a class="text-dark" href="#" onClick={()=>setCart(true)}>Cart</a> */}
                            
                        
                        </div>
                    </div>
                    <div class="col-lg-6 text-center text-lg-right">
                        <div class="d-inline-flex align-items-center">
                            <a class="text-dark px-2" href="">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a class="text-dark px-2" href="">
                                <i class="fab fa-twitter"></i>
                            </a>
                            <a class="text-dark px-2" href="">
                                <i class="fab fa-linkedin-in"></i>
                            </a>
                            <a class="text-dark px-2" href="">
                                <i class="fab fa-instagram"></i>
                            </a>
                            <a class="text-dark pl-2" href="">
                                <i class="fab fa-youtube"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
