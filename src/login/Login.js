import React, { useEffect } from 'react'
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik"
import * as yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { login, loginVerify, resendCode } from '../redux/loginSlice';
import { CircularProgress } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
  const { isLoading, errorMsg, isError, screen, data } = useSelector(state => state.login)

  useEffect(() => {
    if (data.token) {
      setTimeout(() => {
        navigate("/dashboard")
      }, 1500);
    }
  }, [data])

  return (
    screen === "EMAIL" ?
      <Email navigate={navigate} />
      : <Otp navigate={navigate} />
  )
}

const Email = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading } = useSelector(state => state.login)

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
    onSubmit: (values) => {
      handleLogin(values);
    }
  })

  const handleLogin = async (values) => {
    dispatch(login(values));
  }
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>

      <div className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit suspendisse.
          </div>
          <img src="/loginImg.png" className={styles.imgView} />
        </div>
        <div className={styles.login}>
          <div className={styles.content}>
            <h2>Super Admin Sign In!</h2>
            <p>Enter your email and password to sign in!</p>
            <div style={{ marginTop: 30 }}>
              <label>Email*</label>
              <div className={styles.inputbox}>

                <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter Email Address' name="email" onChange={handleChange} />
              </div>
              {
                errors.email && touched.email && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.email}</p>
              }
              <br />
              <label>Password*</label>
              <div className={styles.inputbox}>

                <input type="text" placeholder='Enter password' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
              </div>
              {
                errors.password && touched.password && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.password}</p>
              }
              <br />
            </div>
            <div className={styles.forgotText} onClick={() => navigate('/login/ForgotPassword')}>
              Forgot Password?
            </div>
            <button onClick={handleSubmit} disabled={isLoading}>
              {
                isLoading ?
                  <CircularProgress size={25} thickness={4.5} sx={{ color: "#fff" }} />
                  : "Sign In"
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}


const Otp = ({ navigate }) => {
  const dispatch = useDispatch();
  const { isLoading, loginInfo, isResending } = useSelector(state => state.login);

  // schema -----------
  const schema = yup.object().shape({
    otp: yup.string().required("Verification code is required")
  })

  const {
    errors, values, handleChange, touched, handleBlur, handleSubmit, resetForm
  } = useFormik({
    initialValues: {
      otp: ""
    },
    validationSchema: schema,
    onSubmit: () => {
      handleLogin();
    }
  })

  // handle login
  const handleLogin = () => {
    dispatch(loginVerify({ ...loginInfo, ...values }));
  }

  const handleResend = () => {
    dispatch(resendCode(loginInfo));
    resetForm();
  }
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
            <div className={styles.inputbox}>

              <input type="text" onBlur={handleBlur} value={values.otp} placeholder='Enter Code' name="otp" onChange={handleChange} />
            </div>
            {
              errors.otp && touched.otp && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.otp}</p>
            }
            <br />
          </div>
          <button onClick={handleSubmit} disabled={isLoading}>
            {
              isLoading ?
                <CircularProgress size={25} thickness={4.5} sx={{ color: "#fff" }} />
                : "Confirm Email"
            }
          </button>
          <div className={styles.lineStyle} />
          <div className={styles.rememPassword}>
            Haven’t received your code?
          </div>
          <div className={styles.backToSign} onClick={handleResend}>
            {
              isResending ?
                <CircularProgress size={25} thickness={4.5} sx={{ color: "#1E5EFF" }} />
                : "Resend Code"
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
