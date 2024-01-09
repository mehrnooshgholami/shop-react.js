import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import { useDispatch } from 'react-redux';
import * as Yup from "yup"
import { editProducts } from '../../state-management/action/productsAction';
import {BrowserRouter as Router, Route,useHistory} from 'react-router-dom';

const Edit = ({productitem , setdata , datas , setEditing}) => {
  const dispatch = useDispatch()
  const history=useHistory()
    return (
        <>

            {
                productitem.map((Item)=>(


            <Formik
            initialValues={
              {
                productId:Item.productId,
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
                //setdata([...datas.filter((i)=>i.productId !== Item.productId),values])
                dispatch(editProducts(Item,values))
                history.push('/admin/adminpanel')
          }}
            >
            <Form>
            <div>
                <div class="container-fluid bg-secondary mb-5">
            <div class="d-flex flex-column align-items-center justify-content-center" style={{minHeight: "300px"}}>
                <h1 class="font-weight-semi-bold text-uppercase mb-3">Edit product</h1>
                <div class="d-inline-flex">
                    <p class="m-0"><a href="">Home</a></p>
                    <p class="m-0 px-2">-</p>
                    <p class="m-0">Edit product</p>
                </div>
            </div>
        </div>
        <div class="container-fluid pt-5">
            <div class="row px-xl-5">
                <div class="col-lg-8">
                    <div class="mb-4">
                <div className="form-group">
                  <label htmlFor="productType">Product Type</label>
                  <Field type="text" id="productType" name="productType" className="form-control" placeholder={Item.productType}/>
                    <p className="col-sm-2 col-form-label text-danger">
                        <ErrorMessage name="productType"/>
                    </p>
                </div>
                  <div className="form-group">
                  <label htmlFor="productName">Product Name</label>
                  <Field type="text" id="productName" name="productName" className="form-control"  placeholder={Item.productName} />
                    <p className="col-sm-2 col-form-label text-danger">
                      <ErrorMessage name="productName"/>
                    </p>
                </div>
                <div className="form-group">
                  <label htmlFor="productPrice">Price</label>
                  <Field type="number" id="productPrice" name="productPrice" className="form-control" placeholder={Item.productPrice} />
                    <p className="col-sm-2 col-form-label text-danger">
                      <ErrorMessage name="productPrice"/>
                    </p>
                </div>
                <div className="form-group">
                  <label htmlFor="quantity">Quantity</label>
                  <Field type="number" id="quantity" name="quantity" className="form-control" placeholder={Item.quantity}  />
                    <p className="col-sm-2 col-form-label text-danger">
                      <ErrorMessage name="quantity"/>
                    </p>
                </div>
                </div>
              <button type="submit" className="btn btn-primary" >
                edit
              </button>
              <button type='button' class="btn btn-primary float-end" onClick={p=>history.push('/admin/adminpanel')}>don't edit</button>
            </div>
              </div>
                </div>
                  </div>
            </Form>
            </Formik>
                ))
                  }
        </>
      )
}

export default Edit
