import React from 'react'
import { EditProfileIcon } from '../Svg'
import Styles from '../header/header.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Button } from '@mui/material';
import { custom, save } from '../MaterialUI';

const EditProfile = () => {
    const schema = yup.object().shape({
        email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email").required("Please enter valid email"),
        name: yup.string().required("Name is required"),
        number: yup.string().required("Number is required"),
        password: yup.string().required("password is required"),
        address: yup.string().required("address is required"),
        city: yup.string().required("city is required"),
        state: yup.string().required("state is required"),
        country: yup.string().required("country is required"),
    })
    
    const {
    errors, values, handleChange, touched, setFieldValue, handleBlur, resetForm, handleSubmit,
    } = useFormik({
    initialValues: {
        email: "",
        name: "",
        number:'',
        password: "",
        address:"",
        city:"",
        state:"",
        country:""
    },
    validationSchema: schema,
    onSubmit: () => {
    //   handleLogin();
    }
    })
  return (
    <div>
        <div className={Styles.editProfile}>
            <img src='/MaskGroup.png'/>
            <div className={Styles.editIconStyle}>
                <EditProfileIcon/>
            </div>
        </div>
        <div className={Styles.viewStyle}>
            <div style={{marginTop:20}}>
                <label className={styles.label}>Full name</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.name} name='name' onChange={handleChange} />
                </div>
                {
                    errors.name && touched.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
                } 
            </div>
            <div style={{marginTop:20,marginLeft:20}}>
                <label className={styles.label}>Email id</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.email} name='email' onChange={handleChange} />
                </div>
                {
                    errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                }
            </div>
        </div>
        <div className={Styles.viewStyle}>
            <div style={{marginTop:20}}>
                <label className={styles.label}>Phone number</label>
                <br />
                <div className={Styles.input}>
                    <input type='number' placeholder='Enter' onBlur={handleBlur} value={values.name} name='name' onChange={handleChange} />
                </div>
                {
                    errors.name && touched.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
                } 
            </div>
            <div style={{marginTop:20,marginLeft:20}}>
                <label className={styles.label}>Password</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                </div>
                {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                }
            </div>
        </div>
        <div className={Styles.viewStyle}>
            <div style={{marginTop:20}}>
                <label className={styles.label}>Address</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.address} name='address' onChange={handleChange} />
                </div>
                {
                    errors.address && touched.address && <p style={{ color: "red", fontSize: "12px" }}>{errors.address}</p>
                } 
            </div>
            <div style={{marginTop:20,marginLeft:20}}>
                <label className={styles.label}>City</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.city} name='city' onChange={handleChange} />
                </div>
                {
                    errors.city && touched.city && <p style={{ color: "red", fontSize: "12px" }}>{errors.city}</p>
                }
            </div>
        </div>
        <div className={Styles.viewStyle}>
            <div style={{marginTop:20}}>
                <label className={styles.label}>State</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.state} name='state' onChange={handleChange} />
                </div>
                {
                    errors.state && touched.state && <p style={{ color: "red", fontSize: "12px" }}>{errors.state}</p>
                } 
            </div>
            <div style={{marginTop:20,marginLeft:20}}>
                <label className={styles.label}>Country</label>
                <br />
                <div className={Styles.input}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.country} name='country' onChange={handleChange} />
                </div>
                {
                    errors.country && touched.country && <p style={{ color: "red", fontSize: "12px" }}>{errors.country}</p>
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

export default EditProfile