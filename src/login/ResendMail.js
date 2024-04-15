import React from 'react';
import styles from './login.module.css'
import { useNavigate } from 'react-router-dom'

import { useFormik } from "formik"
import * as yup from "yup";
import { MailBox } from '../Svg';

const ResendMail = () => {
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
                <div className={styles.img}>
                <MailBox />
                </div>
            <div className={styles.content}>
                <h2>Almost There!</h2>
                <p>Check your email inbox and confirm your account</p>
            </div>
            <div className={styles.lineStyle}/>
            <div className={styles.rememPassword}>
                Didn’t receive any mail?
            </div>
            <div className={styles.backToSign} onClick={() => navigate('/login/ResetPassword')}>
                Resend email
            </div>
            </div>
        </div>
    </div>
  )
}

export default ResendMail