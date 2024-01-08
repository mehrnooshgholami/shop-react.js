import React, { useState } from 'react'
import { Formik , Field , Form , ErrorMessage} from 'formik'
import * as Yup from "yup"
import Register from './Register'
import { UserPanel } from './PanelUser'

const Login = ({setFormLoginShow,user, setUser}) => {
    const [formRegisterShow,setFormRegisterShow ] = useState(false)
    const [paneluser,setPaneluser] = useState(false)
    const [loggedin,setloggedin]=useState([])

  return (
    <>
    {
        formRegisterShow?
        <Register setPaneluser={setPaneluser}  loggedin={loggedin} setloggedin={setloggedin} setFormRegisterShow={setFormRegisterShow} setFormLoginShow={setFormLoginShow}  paneluser={paneluser} user={user} setUser={setUser}/>
        :
        paneluser?
        <UserPanel setFormLoginShow={setFormLoginShow} setPaneluser={setPaneluser} setFormRegisterShow={setFormRegisterShow} loggedin={loggedin} />
        :
        <>
        <Formik
            initialValues={{ mobileNo: '', password: '' }}
            validationSchema={Yup.object({
                mobileNo: Yup.string()
                .max(15, 'Must be 15 characters or less')
                .required('Required'),
                password: Yup.string()
                .matches(/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,"password must be strong")
                .required("Required")
            })}
            onSubmit={(values, { setSubmitting }) => {
                if(user.find((i)=>i.mobileNo === values.mobileNo && i.password === values.password)){
                        setTimeout(() => {
                        setloggedin(user.filter(a=>a.mobileNo===values.mobileNo));
                        setPaneluser(true);
                        setSubmitting(false);
                    }, 400);
                    }

            }}
        >
            <div className=' container d-flex justify-content-center align-items-center vh-100' style={{flexDirection:"column"}}>
            <button type='button' className="btn btn-primary" onClick={s=>setFormLoginShow(false)}>Home</button>
                    <h5 class="section-title px-5"><span class="px-2">Login</span></h5>
            <div className="" >
                <Form>
                <label htmlFor="mobileNo">Mobile No</label>
                <Field class="form-control" name="mobileNo" type="text" placeholder="+123 456 789" />
                <p className="col-sm-2 col-form-label text-danger">
                <ErrorMessage name="mobileNo"/>
                </p>

                <label htmlFor="firstName">Password</label>
                    <Field class="form-control" id="password" name="password" type="password" placeholder="Password" />
                    <p class="help-block text-danger"></p>
                    <p className="col-sm-2 col-form-label text-danger">
                    <ErrorMessage name="password"/>
                    </p>

                <button class="btn btn-primary py-2 px-4" type="submit" >Login</button>
                <button class="btn btn-primary py-2 px-4 float-right" type='button' onClick={a=>setFormRegisterShow(true)}>Register</button>
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
