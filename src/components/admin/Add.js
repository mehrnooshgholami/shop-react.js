import { ErrorMessage, Field, Form, Formik } from 'formik';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from "yup"
import { addProudcts } from '../../state-management/action/productsAction';
import {BrowserRouter as Router, Route,useHistory} from 'react-router-dom';

export const Add = ({datas, setdata,setAdding}) => {
  const dispatch = useDispatch();
  const history=useHistory()
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
          
          history.push('/admin/adminpanel')
          dispatch(addProudcts(values));
      }}
        >
        <Form>
        <div>
        <div class="container-fluid bg-secondary mb-5">
            <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
                <h1 class="font-weight-semi-bold text-uppercase mb-3">Add new product</h1>
                <div class="d-inline-flex">
                    <p class="m-0"><a href="">Home</a></p>
                    <p class="m-0 px-2">-</p>
                    <p class="m-0">Add new product</p>
                </div>
            </div>
        </div>
        <div class="container-fluid pt-5">
            <div class="row px-xl-5">
                <div class="col-lg-8">
                    <div class="mb-4">
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
          <button type='button' class="btn btn-primary float-end" onClick={p=>history.push('/admin/adminpanel')}>out</button>
        </div>
          </div>
            </div>
              </div>
        
        </Form>
        </Formik>
      
    </>
  )
}
