import React from 'react'
import { categorys } from '../data/data'
// import {categorys} from '../data/category';

export const Item = () => {
  return (
    <>
    {
        categorys.map((item)=>(
            <div class="col-lg-4 col-md-6 pb-1">
                <div class="cat-item d-flex flex-column border mb-4"  style={{padding: "30px"}}>
                    <p class="text-right">15 Products</p>
                    <a href="" class="cat-img position-relative overflow-hidden mb-3">
                        <img class="img-fluid" src={item.categoryImg} alt=""></img>
                    </a>
                    <h5 class="font-weight-semi-bold m-0">{item.categoryName}</h5>
                </div>
            </div>
        )
        )
      }
    </>
  )
}
