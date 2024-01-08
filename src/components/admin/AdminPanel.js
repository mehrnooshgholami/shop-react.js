import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { Add } from './Add.js';

export const AdminPanel = ({datas, setdata,adminpanelshow,setpaneladminshow,setformadminshow,formadminshow}) => {
const [adding,setAdding]=useState(false)

    const remove = (item) =>{
    setdata(datas.filter((i)=>i.productId !== item.productId))
  }

    return (
        <>
            {
                adding?
                <Add setAdding={setAdding}/>
                :
                <>

    <div class="d-flex justify-content-center container-fluid pt-5">
    <div class="row">
        <div class=" table-responsive mb-5">

        <div class="input-group-append" style={{float:"right"}}>
            <button class="btn btn-primary" onClick={t=>setpaneladminshow(false)}>
                log out
            </button>
        </div>

        <div class="input-group-append">
            <button class="btn btn-primary" onClick={w=>setAdding(true)}>
                <i className='fa fa-plus'></i>
            </button>
        </div>


            <table class="table table-bordered text-center mb-0">
                <thead class="bg-secondary text-dark">
                    <tr>
                        <th>Products</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Edit</th>
                        <th>Remove</th>
                    </tr>
                </thead>
                <tbody class="align-middle">
                    {
                        datas.map((item)=>(
                            <tr>
                                <td class="align-middle">
                                    <img src={item.productimg} style={{width:"50px",height:"50px"}} alt="" /> {item.productName}
                                </td>

                                <td class="align-middle">{item.productPrice}</td>
                                
                                <td class="align-middle">
                                    <input type="number" id="quantity" name="quantity" min="1" class=" bg-secondary mx-auto" style={{width: "70px"}}></input>
                                </td>

                                <td class="align-middle">
                                    <button class="btn btn-sm btn-primary">
                                        <i class="fa fa-edit"></i>
                                    </button>
                                </td>
                                
                                <td class="align-middle">
                                    <button class="btn btn-sm btn-primary" onClick={r=>remove(item)}>
                                        <i class="fa fa-times"></i>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>
</div>
        

</>
            }
        </>
    )
    
}




// import { Field, FieldArray, Form, Formik } from 'formik';
// import React from 'react'
// import { data } from '../../data/data'


// export const AdminPanel = ({adminpanelshow,setadminpanelshow,setformadminshow,formadminshow}) => {
//   return (

//     <div class="container-fluid pt-5">
//     <div class="row px-xl-5">
//         <div class="col-lg-8 table-responsive mb-5">
//             <table class="table table-bordered text-center mb-0">
//                 <thead class="bg-secondary text-dark">
//                     <tr>
//                         <th>Products</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Edit</th>
//                         <th>Remove</th>
//                     </tr>
//                 </thead>
//                 <tbody class="align-middle">
//             <Formik
//             initialValues={{ items: [''] }}

//             onSubmit={(values) => {
                
//                 console.log(values);
//             }}
//             >
//             {({ values, errors }) => (
//                 <Form>
//                 <FieldArray
//                     name="items"
//                     render={({ insert, remove }) => (
//                     <tr>
//                         {values.items.length > 0 &&
//                         data.items.map((item, index) => (
//                             <div key={index}>
//                             <td class="align-middle"> 
//                             <Field
//                                 name={`items[${index}]`}
//                                 placeholder="Enter a value"
//                             />
//                             <img src={item.productimg} style={{width:"50px",height:"50px"}} alt="" onClick={() => remove(index)}/> {item.productName}
//                             </td> 
//                             <button
//                                 type="button"
//                                 onClick={() => {
//                                 insert(index, item);
//                                 insert(index + 1, item);
//                                 }}
//                             >
//                                 Edit
//                             </button>
//                             </div>
//                         ))}
//                     </tr>
//                     )}
//                 />
//                 <button type="submit">Submit</button>
//                 </Form>
//             )}
//             </Formik>

//   </tbody>
//     </table>
//     </div>
//     </div>
//     </div>

// );
// };