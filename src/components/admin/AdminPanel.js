import React, {useState} from 'react'
import ProductTable from './ProductTable.js';
import {redirect} from 'react-router-dom'


export const AdminPanel = ({
                               datas,
                               setdata,
                               setpaneladminshow,
                               setEditing,
                               editing,
                               adding,
                               setproductitem,
                               setAdding
                           }) => {
                            const [admin,setadmin] = useState(JSON.parse(localStorage.getItem('admin')))
    return (
        <>
            
            {admin?
                
                <ProductTable setadmin={setadmin} setproductitem={setproductitem} setEditing={setEditing} setAdding={setAdding} setpaneladminshow={setpaneladminshow} datas={datas} setdata={setdata}/>
                :
                <>
                    {redirect("/admin")}
                </>
            }
        </>
    )

}