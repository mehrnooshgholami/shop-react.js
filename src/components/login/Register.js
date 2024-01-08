import { Formik , Field , Form , ErrorMessage} from 'formik'
import React, { useState } from 'react'
import * as Yup from "yup"
import { v4 as uuidv4 } from 'uuid';
import { UserPanel } from './PanelUser'

const Register = ({setFormRegisterShow,setFormLoginShow,setPaneluser,paneluser,user, setUser,loggedin,setloggedin,seteditInformation}) => {
  return (
    <>
    {
        paneluser?
        <UserPanel setFormLoginShow={setFormLoginShow} setFormRegisterShow={setFormRegisterShow} setPaneluser={setPaneluser} loggedin={loggedin} seteditInformation={seteditInformation}/>
        :
        <>
        <button class="btn btn-primary" onClick={s=>{setFormLoginShow(false);setFormRegisterShow(false)}}>Home</button>
        <button class="btn btn-primary" onClick={s=>setFormRegisterShow(false)}>login</button>
<Formik
initialValues={{
    userId:uuidv4(),
    firstName:'',
    lastName:'',
    email:'',
    mobileNo:'',
    city:'',
    zipCode:'',
    adress:'',
    password:''
}}
validationSchema={Yup.object({
    firstName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    lastName: Yup.string()
    .max(15, 'Must be 15 characters or less')
    .required('Required'),
    email:Yup.string()
    .email("use correct email")
    .required("Required"),
    mobileNo: Yup.string()
    .required('Required'),
    adress:Yup.string()
    .required('Required'),
    city: Yup.string()
    .required('Required'),
    zipCode: Yup.string()
    .required('Required'),
    password:Yup.string()
    .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"password must be strong")
    .required("Required"),
})}
onSubmit={(values, { setSubmitting }) => {

        if(user.find((i)=>i.mobileNo !== values.mobileNo)){
            setTimeout(() => {
                setUser([...user,values]);
                values.userId=uuidv4();
                setPaneluser(true);
                setSubmitting(false);
                setloggedin([values]);
        }, 400);
        }
   
    }}
    >
    <Form>
        <div class="mb-4">
<h4 class="font-weight-semi-bold mb-4">Create an account</h4>
<div class="row">
    <div class="col-md-6 form-group">
        <label>First Name</label>
        <Field class="form-control" name='firstName' type="text" placeholder="John"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="firstName"/>
        </p>
    </div>
    <div class="col-md-6 form-group">
        <label>Last Name</label>
        <Field class="form-control" name='lastName' type="text" placeholder="Doe"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="lastName"/>
        </p>
    </div>
    <div class="col-md-6 form-group">
        <label>E-mail</label>
        <Field class="form-control" type="text" name='email' placeholder="example@email.com"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="email"/>
        </p>
    </div>
    <div class="col-md-6 form-group">
        <label>Mobile No</label>
        <Field class="form-control" name='mobileNo' type="text" placeholder="+123 456 789"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="mobileNo"/>
        </p>
    </div>

    <div class="col-md-6 form-group">
        <label>Address</label>
        <Field class="form-control" name='adress' type="text" placeholder="123 Street"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="adress"/>
        </p>
    </div>
    <div class="col-md-6 form-group">
        <label>City</label>
        <Field class="form-control" name='city' type="text" placeholder="New York"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="city"/>
        </p>
    </div>
    <div class="col-md-6 form-group">
        <label>ZIP Code</label>
        <Field class="form-control" name='zipCode' type="text" placeholder="123"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="zipCode"/>
        </p>
    </div>
    <div class="col-md-6 form-group">
        <label>Password</label>
        <Field class="form-control" name='password' type="text" placeholder="123"/>
        <p className="col-sm-2 col-form-label text-danger">
            <ErrorMessage name="password"/>
        </p>
    </div>
    <button class="btn btn-primary py-2 px-4" type="submit" >Register</button> 
</div>
</div>
    </Form>
    </Formik>
</>
    }
       </>    
  )
}

export default Register
