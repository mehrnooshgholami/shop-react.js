
import { ShopMenu } from './menu'
import React from 'react';
import Menu from 'devextreme-react/menu';
import bootstrap from "bootstrap"
import service, { Pruduct } from '../data/data';
import { Link, NavLink } from 'react-router-dom';
import { Cart } from './Cart';


export const Sidebar = () => {

  return (
    <>
        <div class="container-fluid mb-5">
          <div class="row border-top px-xl-5">
            <div class="col-lg-3 d-none d-lg-block ">
                  
                    <a class="btn shadow-none d-flex align-items-center justify-content-between bg-primary text-white w-100" type="button" style={{height: "65px", marginTop: "-1px", padding:" 0 30px"}} data-bs-toggle="dropdown" aria-expanded="false">
                    Categories
                    <i class="fa fa-angle-down text-dark"></i>
                    </a>
                    
                    <ul class="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-75 m-0">
                      
                    {Object.entries(Pruduct).map(([cat, { title }]) => (
                    <li key={cat}>
                      <Link to={`/posts/${cat}`} class="dropdown-item">
                        <h5>{title}</h5>
                      </Link>
                      </li>
                     ))}

                    </ul>

                  </div>
            
            <ShopMenu/>
          </div>
        </div>

</>
  )
}
