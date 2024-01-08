import React from 'react'
import { JustArrivedProduct } from './JustArrivedProduct'

export const JustArrivedProducts = ({datas}) => {
  return (
    <div class="container-fluid pt-5">
    <div class="text-center mb-4">
        <h2 class="section-title px-5"><span class="px-2">Just Arrived</span></h2>
    </div>
    <div class="row px-xl-5 pb-3">
        
            <JustArrivedProduct datas={datas}></JustArrivedProduct>
        
    </div>
</div>
  )
}
