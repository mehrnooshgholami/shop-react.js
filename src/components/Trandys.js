import React from 'react'
import { Trand } from './Trand'

export const Trandys = ({filteredproducts}) => {
  return (
    <div class="container-fluid pt-5">
        <div class="text-center mb-4">
            <h2 class="section-title px-5"><span class="px-2">Products</span></h2>
        </div>
        <div class="row px-xl-5 pb-3">
            <Trand filteredproducts={filteredproducts} />
        </div>
    </div>
  )
}
