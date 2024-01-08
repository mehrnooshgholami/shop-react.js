import { ErrorMessage, Field, Form, Formik } from 'formik';
import React from 'react'
import * as Yup from "yup"

const Edit = ({productitem , setdata , datas , setEditing}) => {
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
                setdata([...datas.filter((i)=>i.productId !== Item.productId),values])
              setEditing(false)
          }}
            >
            <Form>
            <div>
                <div class="text-center mt-4">
                    <h3 class="section-title px-5"><span class="px-2">Edit product</span></h3>
                </div>
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
            </Form>
            </Formik>
                            ))
                        }
              <button type='button' class="btn btn-primary" onClick={p=>setEditing(false)}>don't edit</button>
    
    
    
            
        </>
      )
}

export default Edit
