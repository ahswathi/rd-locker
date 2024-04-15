import React, { useEffect } from 'react'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik"
import * as yup from "yup";

const Login = () => {
  const navigate = useNavigate();

  // schema -----------
  const schema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email").required("Please enter valid email"),
    password: yup.string().required("Password is required")
  })

  const {
    errors, values, handleChange, touched, setFieldValue, handleBlur, resetForm, handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: schema,
    onSubmit: () => {
    //   handleLogin();
    }
  })



  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      
      <div className={styles.main}>
        <div className={styles.mainContainer}>
        <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
        </div>
        <img src="/loginImg.png" className={styles.imgView}/>
        </div>
        <div className={styles.login}>
          <div className={styles.content}>
            <h2>Super Admin Sign In!</h2>
            <p>Enter your email and password to sign in!</p>
            <div style={{marginTop:30}}>
            <label>Email*</label>
            <div className={styles.inputbox}>
              
              <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter Email Address' name="email" onChange={handleChange} />
            </div>
            {
              errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
            }
            <br />
            <label>Password*</label>
            <div className={styles.inputbox}>
              
              <input type="text" placeholder='Enter password' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
            </div>
            {
              errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
            }
            <br />
            </div>
            <div className={styles.forgotText} onClick={() => navigate('/login/ForgotPassword')}>
                Forgot Password?
            </div>
            <button onClick={handleSubmit}>Sign In</button>
            {/* <a href="#">Forget Password?</a> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
