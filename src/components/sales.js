import React from 'react'
import offer1 from "../img/offer-1.png";
import offer2 from "../img/offer-2.png";

export const Sales = () => {
  return (
    <div class="container-fluid offer pt-5">
        <div class="row px-xl-5">
            <div class="col-md-6 pb-4">
                <div class="position-relative bg-secondary text-center text-md-right text-white mb-2 py-5 px-5">
                    <img src={offer1} alt=""></img>
                    <div class="position-relative" style={{zIndex: "1"}}>
                        <h5 class="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 class="mb-4 font-weight-semi-bold">Spring Collection</h1>
                        {/* <a href="" class="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a> */}
                    </div>
                </div>
            </div>
            <div class="col-md-6 pb-4">
                <div class="position-relative bg-secondary text-center text-md-left text-white mb-2 py-5 px-5">
                    <img src={offer2} alt=""></img>
                    <div class="position-relative" style={{zIndex: "1"}}>
                        <h5 class="text-uppercase text-primary mb-3">20% off the all order</h5>
                        <h1 class="mb-4 font-weight-semi-bold">Winter Collection</h1>
                        {/* <a href="" class="btn btn-outline-primary py-md-2 px-md-3">Shop Now</a> */}
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}
