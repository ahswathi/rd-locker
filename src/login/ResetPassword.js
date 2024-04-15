import React from 'react';
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik"
import * as yup from "yup";

const ResetPassword = () => {
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
    
        <div className={styles.login}>
            <div className={styles.content}>
            <div className={styles.content}>
                <h2>Reset Password!</h2>
                <p>Enter the new password to reset it</p>
            </div>
            <div style={{marginTop:30}}>
                <label>New Password*</label>
                <div className={styles.inputbox}>
                
                <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter New Password' name="email" onChange={handleChange} />
                </div>
                {
                errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                }
                <br />
                <label>Confirm Password*</label>
                <div className={styles.inputbox}>
                
                <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter Confirm Password' name="email" onChange={handleChange} />
                </div>
                {
                errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                }
                <br />
            </div>
            <button onClick={() => navigate('/login/ConfirmEmail')}>Submit</button>
            </div>
        </div>
    </div>
  )
}

export default ResetPassword