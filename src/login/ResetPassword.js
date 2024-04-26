import React, { useState } from 'react';
import styles from './login.module.css'
import { useNavigate, useParams } from 'react-router-dom'

import { useFormik } from "formik"
import * as yup from "yup";
import api from '../helper/Api';
import Toastify from '../helper/Toastify';
import { CircularProgress } from '@mui/material';

const ResetPassword = () => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false);
  const params = useParams();

  // schema -----------
  const schema = yup.object().shape({
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password")], "Confirm password must match with password").required("Confirm Password is required")
  })

  const {
    errors, values, handleChange, touched, setFieldValue, handleBlur, resetForm, handleSubmit,
  } = useFormik({
    initialValues: {
      password: "",
      confirmPassword: ""
    },
    validationSchema: schema,
    onSubmit: () => {
      handleResetPass();
    }
  })

  const handleResetPass = async () => {
    try {
      setLoading(true)
      const { data, status } = await api.resetPsw({ ...values, token: params.token })

      if (status === 200) {
        setLoading(false)
        Toastify.success("Password updated successfully")
        navigate("/")
      }
    } catch (err) {
      setLoading(false)
      Toastify.success(err.response.data.message || "Internal server error")
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>

      <div className={styles.login}>
        <div className={styles.content}>
          <div className={styles.content}>
            <h2>Reset Password!</h2>
            <p>Enter the new password to reset it</p>
          </div>
          <div style={{ marginTop: 30 }}>
            <label>New Password*</label>
            <div className={styles.inputbox}>

              <input type="password" onBlur={handleBlur} value={values.password} placeholder='Enter New Password' name="password" onChange={handleChange} />
            </div>
            {
              errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
            }
            <br />
            <label>Confirm Password*</label>
            <div className={styles.inputbox}>

              <input type="password" onBlur={handleBlur} value={values.confirmPassword} placeholder='Enter Confirm Password' name="confirmPassword" onChange={handleChange} />
            </div>
            {
              errors.confirmPassword && touched.confirmPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword}</p>
            }
            <br />
          </div>
          <button onClick={handleSubmit} disabled={isLoading}>
            {
              isLoading ?
                <CircularProgress size={25} thickness={4.5} sx={{ color: "#fff" }} />
                : "Submit"
            }
          </button>
        </div>
      </div>
    </div>
  )
}

export default ResetPassword