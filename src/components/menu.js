import React from 'react'
import { Slider } from './slider'
import {BrowserRouter as Router, Route, Link, NavLink, Switch, Redirect, Prompt} from 'react-router-dom';

export const ShopMenu = ({setFormLoginShow}) => {
  return (
    <>

        <div class="col-lg-9">
            <nav class="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                <a href="" class="text-decoration-none d-block d-lg-none">
                    <h1 class="m-0 display-5 font-weight-semi-bold"><span class="text-primary font-weight-bold border px-3 mr-1">E</span>Shopper</h1>
                </a>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                    <div class="navbar-nav mr-auto py-0">

                    </div>
                    <div class="navbar-nav ml-auto py-0">
                        <NavLink to="/login"><a class="nav-item nav-link " >Login / Register</a></NavLink> 
                    </div>
                </div>
            </nav>
                <Slider/>
        </div>

        

                </>
  )
}
