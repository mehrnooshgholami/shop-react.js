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