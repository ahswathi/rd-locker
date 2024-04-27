import React, { useEffect } from 'react';
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik"
import * as yup from "yup";
import { forgotPassword } from '../redux/forgotPasswordSlice';
import { useDispatch, useSelector } from 'react-redux';
import ConfirmEmail from './ConfimEmail';
import { CircularProgress } from '@mui/material';

const ForgotPassword = () => {
  const dispatch = useDispatch();
  const { screen, isLoading, resetToken } = useSelector(state => state.forgotPassword)
  const navigate = useNavigate();

  // schema -----------
  const schema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email").required("Please enter valid email"),
  })

  const {
    errors, values, handleChange, touched, handleBlur, handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleLogin(values);
    }
  })

  const handleLogin = async (values) => {
    dispatch(forgotPassword(values));
  }

  useEffect(() => {
    if (resetToken) {
      navigate(`/login/ResetPassword/${resetToken}`)
    }
  }, [resetToken])

  return (
    screen === 'EMAIL' ?
      <div className={styles.container}>
        <div className={styles.logo}>Logo</div>

        <div className={styles.login}>
          <div className={styles.content}>
            <div className={styles.content}>
              <h2>Password Reset</h2>
              <p>We Will Help You Reset your Password</p>
            </div>
            <div style={{ marginTop: 30 }}>
              <label>Email*</label>
              <div className={styles.inputbox}>

                <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter Email Address' name="email" onChange={handleChange} />
              </div>
              {
                errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
              }
              <br />
            </div>
            <button onClick={handleSubmit} disabled={isLoading}>

              {
                isLoading ?
                  <CircularProgress size={25} thickness={4.5} sx={{ color: "#fff" }} />
                  : "Reset Password"
              }
            </button>
            <div className={styles.lineStyle} />
            <div className={styles.rememPassword}>
              Remembered your Password?
            </div>
            <div className={styles.backToSign}>
              Back to Sign In
            </div>
          </div>
        </div>
      </div>
      : <ConfirmEmail />
  )
}

export default ForgotPassword