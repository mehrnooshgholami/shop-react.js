import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import * as Yup from "yup"

export const Add = ({datas, setdata,setAdding}) => {

  return (
    <>

        <Formik
        initialValues={
          {
            productId:uuidv4(),
            productType:"",
            productName:"",
            productPrice:"",
            quantity:"",
          }
        }
        validationSchema={Yup.object({
          productType: Yup.string().required("Required"),
          productName: Yup.string().required("Required"),
          productPrice: Yup.string().required("Required"),
          quantity:Yup.string().required("required")
        })}
        onSubmit={(values)=>{
          setdata([...datas , values])
          values.productId=uuidv4()
          setAdding(false)
      }}
        >
        <Form>
        <div>
            <div class="text-center mt-4">
                <h3 class="section-title px-5"><span class="px-2">Add new product</span></h3>
            </div>
            <div className="form-group">
              <label htmlFor="productType">Product Type</label>
              <Field type="text" id="productType" name="productType" className="form-control" />
                <p className="col-sm-2 col-form-label text-danger">
                    <ErrorMessage name="productType"/>
                </p>
            </div>
              <div className="form-group">
              <label htmlFor="productName">Product Name</label>
              <Field type="text" id="productName" name="productName" className="form-control" />
                <p className="col-sm-2 col-form-label text-danger">
                  <ErrorMessage name="productName"/>
                </p>
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Price</label>
              <Field type="number" id="productPrice" name="productPrice" className="form-control" />
                <p className="col-sm-2 col-form-label text-danger">
                  <ErrorMessage name="productPrice"/>
                </p>
            </div>
            <div className="form-group">
              <label htmlFor="quantity">Quantity</label>
              <Field type="number" id="quantity" name="quantity" className="form-control" />
                <p className="col-sm-2 col-form-label text-danger">
                  <ErrorMessage name="quantity"/>
                </p>
            </div>
            </div>
          <button type="submit" className="btn btn-primary" >
            Add Product
          </button>
        </Form>
        </Formik>
          <button type='button' class="btn btn-primary" onClick={p=>setAdding(false)}>out</button>



        
    </>
  )
}
