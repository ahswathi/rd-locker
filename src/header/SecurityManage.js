import React from 'react'
import Styles from '../header/header.module.css';
import CustomizedSwitches from './CustomizedSwitchs';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Button } from '@mui/material';
import { custom, save } from '../MaterialUI';

const SecurityManage = () => {
    const schema = yup.object().shape({
        currentPassword: yup.string().required("currentPassword is required"),
        newPassword: yup.string().required("newPassword is required"),
        confirmPassword: yup.string().required("confirmPassword is required"),
        state: yup.string().required("state is required"),
        country: yup.string().required("country is required"),
    })
    
    const {
    errors, values, handleChange, touched, setFieldValue, handleBlur, resetForm, handleSubmit,
    } = useFormik({
    initialValues: {
        currentPassword: "",
        newPassword: "",
        confirmPassword:'',
    },
    validationSchema: schema,
    onSubmit: () => {
    //   handleLogin();
    }
    })
  return (
    <div>
        <div className={Styles.factorText} style={{marginTop:20}}>
            Two-factor Authentication
        </div>
        <div style={{marginTop:20}}>
            <CustomizedSwitches
                onMessage={'Enable or disable two factor authentication'}
            />
        </div>
        <div style={{marginTop:20}} className={Styles.factorText}>
            Change Password
        </div>
        <div className={Styles.viewStyle}>
            <div style={{marginTop:20}}>
                <label className={Styles.label}>Current Password </label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.currentPassword} name='currentPassword' onChange={handleChange} />
                </div>
                {
                    errors.currentPassword && touched.currentPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.currentPassword}</p>
                } 
            </div>
        </div>
        <div className={Styles.viewStyle}>
            <div style={{marginTop:20}}>
                <label className={Styles.label}>New Password </label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.newPassword} name='newPassword' onChange={handleChange} />
                </div>
                {
                    errors.newPassword && touched.newPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.newPassword}</p>
                } 
            </div>
            <div style={{marginTop:20,marginLeft:20}}>
                <label className={Styles.label}>Confirm New Password</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.confirmPassword} name='confirmPassword' onChange={handleChange} />
                </div>
                {
                    errors.confirmPassword && touched.confirmPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword}</p>
                }
            </div>
        </div>
        <div className={Styles.buttons} style={{marginTop:20}}>
            <div>
                <Button sx={custom} variant="contained">Cancle</Button>
            </div>
            <div>
                <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
            </div>
        </div>
    </div>
  )
}

export default SecurityManage