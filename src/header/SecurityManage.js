import React from 'react'
import Styles from '../header/header.module.css';
import CustomizedSwitches from './CustomizedSwitchs';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Button } from '@mui/material';
import { custom, save } from '../MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { changeProfilePassword } from '../redux/settingSlice';
import api from '../helper/Api';
import { setTwoFA } from '../redux/userSlice';

const SecurityManage = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user.user)
    const schema = yup.object().shape({
        password: yup.string().required("password is required"),
        newPassword: yup.string().required("newPassword is required"),
        confirmPassword: yup.string().required("confirmPassword is required"),
    })
    
    const {
        errors, 
        values, 
        handleChange, 
        touched, 
        setFieldValue, 
        handleBlur, 
        resetForm, 
        handleSubmit,
    } = useFormik({
    initialValues: {
        password: "",
        newPassword: "",
        confirmPassword:'',
    },
    validationSchema: schema,
        onSubmit: (values) => {
        updateSubject(values);
        }
    })

    const handleStatusChange = async (e) => {
        const body = new FormData()
        body.set('2FA',!user['2FA']) 
        const {data, status} = await api.updateTwoFA(body);
        if(status === 200) {
            dispatch(setTwoFA(!user['2FA']))
            setFieldValue("status", data.data)
        }
    };

    const updateSubject = async(values) => {
        dispatch(changeProfilePassword(values))
    }
return (
    <div>
        <div className={Styles.factorText} style={{marginTop:20}}>
            Two-factor Authentication
        </div>
        <div style={{marginTop:20}}>
            <CustomizedSwitches
                onMessage={'Enable or disable two factor authentication'}
                handleChange={handleStatusChange}
                checked={user['2FA']}
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
                    <input type='password' placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                </div>
                {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                } 
            </div>
        </div>
        <div className={Styles.viewStyle}>
            <div style={{marginTop:20}}>
                <label className={Styles.label}>New Password </label>
                <br />
                <div className={Styles.input}>
                    <input type='password' placeholder='Enter' onBlur={handleBlur} value={values.newPassword} name='newPassword' onChange={handleChange} />
                </div>
                {
                    errors.newPassword && touched.newPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.newPassword}</p>
                } 
            </div>
            <div style={{marginTop:20,marginLeft:20}}>
                <label className={Styles.label}>Confirm New Password</label>
                <br />
                <div className={Styles.input}>
                    <input type='password' placeholder='Enter' onBlur={handleBlur} value={values.confirmPassword} name='confirmPassword' onChange={handleChange} />
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