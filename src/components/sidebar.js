
import { ShopMenu } from './menu'
import React from 'react';
import Menu from 'devextreme-react/menu';
import bootstrap from "bootstrap"
import service, { Pruduct } from '../data/data';
import { Link, NavLink } from 'react-router-dom';
import { Cart } from './Cart';


export const Sidebar = ({formLoginShow,setFormLoginShow}) => {

  return (
    <>
                <div class="container-fluid mb-5">
                 <div class="row border-top px-xl-5">
                <div class="col-lg-3 d-none d-lg-block ">
                  <div class="btn-group">
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Dropdown
                    </button>
                    <ul class="dropdown-menu">
                      
                    {Object.entries(Pruduct).map(([cat, { title }]) => (
                    <li key={cat}>
                      <Link to={`/posts/${cat}`} class="dropdown-item">
                        <h3>{title}</h3>
                      </Link>
                      </li>
                     ))}

                    </ul>

                  </div>
            </div>
            <ShopMenu setFormLoginShow={setFormLoginShow} formLoginShow={formLoginShow}/>
            </div>
            </div>

</>
  )
}
