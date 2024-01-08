import React, { useState } from 'react'
import { Add } from './Add.js';
import ProductTable from './ProductTable.js';
import Edit from './Edit.js';


export const AdminPanel = ({datas, setdata , setpaneladminshow }) => {
const [adding,setAdding]=useState(false)
const [productitem , setproductitem]=useState([])
const [editing,setEditing]=useState(false)
    
    return (
        <>
            {
                adding?
                    editing?
                        null
                    :
                        <Add setdata={setdata} datas={datas} setAdding={setAdding}/>
                :
                editing?
                <Edit productitem={productitem} setdata={setdata} datas={datas} setEditing={setEditing}/>
                :
                <ProductTable setproductitem={setproductitem} setEditing={setEditing} setAdding={setAdding} setpaneladminshow={setpaneladminshow} datas={datas} setdata={setdata} />
            }
        </>
    )
    
}