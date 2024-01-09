import React, {useState} from 'react'
import {Formik, Field, Form, ErrorMessage} from 'formik'
import * as Yup from "yup"
import Register from './Register'
import {UserPanel} from './PanelUser'
import { BrowserRouter as  Link, NavLink,Redirect,useHistory} from 'react-router-dom';
import { users } from '../../data/data'


const Login = ({setFormLoginShow,paneluser, setPaneluser,formRegisterShow, setFormRegisterShow,loggedin, setloggedin,setAutUser}) => {

    const [user,setUser] = useState(localStorage.getItem('user'))
    const history=useHistory()

    return (
        <>
            {
                user?
                <Redirect to="/login/userpanel"/>
                :
                        <>
                            <Formik
                                initialValues={{mobileNo: '', password: ''}}
                                validationSchema={Yup.object({
                                    mobileNo: Yup.string()
                                        .max(15, 'Must be 15 characters or less')
                                        .required('Required'),
                                    password: Yup.string()
                                        .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, "password must be strong")
                                        .required("Required")
                                })}
                                onSubmit={(values, {setSubmitting}) => {
                                    if (users.find((i) => i.mobileNo === values.mobileNo && i.password === values.password)) {
                                        setTimeout(() => {
                                        //     setloggedin(users.filter(a => a.mobileNo === values.mobileNo));
                                            localStorage.setItem('user',JSON.stringify(users.find((i) => i.mobileNo === values.mobileNo && i.password === values.password)))
                                            history.push('/login/userpanel')
                                            setSubmitting(false);
                                        }, 400);
                                    }

                                }}
                            >
                                <div className=' container d-flex justify-content-center align-items-center vh-100'
                                     style={{flexDirection: "column"}}>
                                    <h4 class=" text-center mt-1 mb-5 pb-1"><span class="px-2">Login</span></h4>

                                    <div className="">
                                        <Form>
                                             <p>Please login to your account</p>
                                            
                                            <Field class="form-control" name="mobileNo" type="text"
                                                   placeholder="Mobile No"/>
                                            <p className="col-sm-2 col-form-label text-danger">
                                                <ErrorMessage name="mobileNo"/>
                                            </p>

                                            <Field class="form-control" id="password" name="password" type="password"
                                                   placeholder="Password"/>
                                            <p class="help-block text-danger"></p>
                                            <p className="col-sm-2 col-form-label text-danger">
                                                <ErrorMessage name="password"/>
                                            </p>

                                            <div class="text-center pt-1 mb-5 pb-1">
                                                <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="submit">Login</button>
                                                <a class="text-muted" href="#!">Forgot password?</a>
                                            </div>

                                            <div class="d-flex align-items-center justify-content-center pb-4">
                                                <p class="mb-0 me-2">Don't have an account?</p>
                                                <button type="button" class="btn btn-outline-primary" onClick={a => history.push("/register")} >Create new</button>
                                            </div>

                                        </Form>
                                    </div>
                                </div>
                            </Formik>
                        </>
            }
        </>
    )
}

export default Login
