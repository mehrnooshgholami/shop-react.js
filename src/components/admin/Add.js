import { Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

export const Add = ({datas, setdata,setAdding}) => {

  const [productType,setproductType]=useState('')
  const [productimg,setproductimg]=useState('')
  const [productPrice,setproductPrice]=useState('')
  const [productName,setproductName]=useState('')
  const [quantity,setquantity]=useState('')

const add=()=>{
  const newData ={
      id:uuidv4(),
      productType:productType,
      productimg:productimg,
      productName:productName,
      productPrice:productPrice,
      quantity:quantity,
  }
  // addData(newData)
  console.log([...datas,newData]);
  clearInputs()
}

// const addData=(newData)=>{

//     console.log([...datas,newData]);
//     }

const clearInputs=()=>{
  setproductType("")
  setproductimg("")
  setproductPrice("")
  setquantity("")
  setproductName("")
  }

//   const id = uuidv4(); 
//   const newData =
//     {
//         productType,
//         productimg,
//         productName,
//         productPrice,
//         quantity,
 
//     }
//     console.log([...datas,newData]);


  return (
    <>

        <Formik
        initialValues={
          {
            productType:"",
            productName:"",
            productPrice:"",
            quantity:"",
          }
        }
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            console.log(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
        >
        <Form>
          <div>
          <div>
          <Field name="productType" placeholder="productType" type="text"/>
          </div>
          <div>
          <Field name="productName" placeholder="productName" type="text"/>
          </div>
          <div>
          <Field name="productPrice" placeholder="productPrice" type="text"/>
          </div>
          <div>
          <Field type="number" id="quantity" placeholder="quantity" name="quantity" min="1" class=" bg-secondary mx-auto" style={{width: "70px"}}/><br/>
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
          <button class="btn btn-primary" onClick={p=>setAdding(false)}>out</button>
          </div>
        </Form>
        </Formik>

        
    </>
  )
}
