import React from 'react';
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik"
import * as yup from "yup";

const ConfirmEmail = () => {
  const navigate = useNavigate();
  // schema -----------
  const schema = yup.object().shape({
    otp: yup.string().min(6).max(6).required("Confirmation code is required")
  })

  const {
    errors, values, handleChange, touched, handleBlur, handleSubmit,
  } = useFormik({
    initialValues: {
      otp: ""
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
            <h2>Confirm Email</h2>
            <p>Check Your Email and Enter Confirmation Code</p>
          </div>
          <div style={{ marginTop: 30 }}>
            <label>Confirmation Code</label>
            <div className={styles.inputbox} style={{ marginTop: 8 }}>

              <input type="text" onBlur={handleBlur} value={values.otp} placeholder='Enter Code' name="otp" onChange={handleChange} />
            </div>
            {
              errors.email && touched.email && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.email}</p>
            }
            <br />
          </div>
          <button onClick={() => navigate('/login/ResendMail')}>Confirm Email</button>
          <div className={styles.lineStyle} />
          <div className={styles.rememPassword}>
            Haven’t received your code?
          </div>
          <div className={styles.backToSign}>
            Resend Code
          </div>
        </div>
      </div>
    </div>
  )
}

export default ConfirmEmail