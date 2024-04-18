import React, { useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../vendorManagement/vendor.module.css';
import style from '../healthcare/healthcare.module.css';
import { Button, MenuItem, Select } from '@mui/material';
import { useFormik } from 'formik';
import { accept, custom, delet, formselect, save } from '../MaterialUI';
import * as yup from "yup";
import { Download, DropDownIcon, GoBack, Image, ToggleButton1, Upload } from '../Svg';
import ImageUpload from '../component/ImageUpload';
import { useNavigate } from 'react-router-dom';

const AddNewUser = () => {
    const navigate = useNavigate()
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
    <div style={{padding:20}}>
        <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.categoryText}>Admin users</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10,marginRight:10}}/> 
                        Admin users
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Add New User
                    </span>
                </span>
            </div>
            <div className={style.buttonStyle} onClick={() => navigate('/adminUsers/AdminUser')}>
                <div className={style.width}>
                    <div style={{marginTop:2,}}>
                        <GoBack/>
                    </div>
                    <div className={style.backText}>
                        Back
                    </div>
                </div>
            </div>
        </div>
        <div className={Styles.kycDetails}>
            <div className={Styles.kycText}>
                Add New User
            </div>
            <div className={styles.buttons}>
                <div>
                    <Button sx={custom} variant="contained">Cancle</Button>
                </div>
                <div>
                    <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
                </div>
            </div>
        </div>
        <div className={Styles.profileCard}>
            <div className={Styles.profileContainer}>
                <p className={Styles.informationText}>Basic Information</p>
                <div className={Styles.lineStyle}/>
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Agent Name*</label>
                    <div className={Styles.inputbox}>
                    
                    <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter user name' name="email" onChange={handleChange} />
                    </div>
                    {
                    errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                    }
                </div>
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Email Id*</label>
                    <div className={Styles.inputbox}>
                    
                    <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter email id' name="email" onChange={handleChange} />
                    </div>
                    {
                    errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                    }
                </div>
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Phone Number*</label>
                    <div className={Styles.inputbox}>
                    
                    <input type="text" placeholder='Enter phone number' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                    </div>
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }
                </div>
                <div className={styles.container} style={{marginTop:20}}>
                    <div className={Styles.label}>
                        Account status
                    </div>
                    <div className={styles.toggleButton}>
                        <div>
                            <ToggleButton1/>
                        </div>
                        <span>
                            Block
                        </span>
                    </div>
                </div>
                
                <div style={{marginTop:40}}>
                    <label className={Styles.label}>Profile Image</label>
                    <div className={Styles.imageUpload}>
                        <div className={Styles.imageView}>
                        <Image/>
                        <div className={Styles.uploadBox}>
                            <Upload/> <p className={Styles.uploadText}>Upload Image</p>
                        </div>
                        <div className={Styles.pixel}>
                            Image size : 0px by 0px in .jpg or .png format
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={Styles.bottomContainer} style={{marginLeft:20}}>
                <div className={Styles.profileContainer}>
                <p className={Styles.informationText}>Address details</p>
                    <div className={Styles.lineStyle}/>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>City</label>
                        <div className={Styles.inputbox}>
                        
                        <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter' name="email" onChange={handleChange} />
                        </div>
                        {
                        errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                        }
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>State</label>
                        <div className={Styles.inputbox}>
                        
                        <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter' name="email" onChange={handleChange} />
                        </div>
                        {
                        errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                        }
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>Country</label>
                        <div className={Styles.inputbox}>
                        
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                        </div>
                        {
                        errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                        }
                    </div>
                </div> 
                <div className={Styles.profileContainer} style={{marginTop:30}}>
                    <p className={Styles.informationText}>Password Details</p>
                    <div className={Styles.lineStyle}/>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>Password*</label>
                        <div className={Styles.inputbox}>
                        
                        <input type="email" onBlur={handleBlur} value={values.email} placeholder='Enter password' name="email" onChange={handleChange} />
                        </div>
                        {
                        errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                        }
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>Confirm Password*</label>
                        <div className={Styles.inputbox}>
                        
                        <input type="email" onBlur={handleBlur} value={values.email} placeholder='Confirm password' name="email" onChange={handleChange} />
                        </div>
                        {
                        errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
                        }
                    </div>
                </div> 
            </div>
        </div>
        <div className={Styles.addNewVendorStyle}>
        <div className={styles.buttons}>
                <div>
                    <Button sx={custom} variant="contained">Cancle</Button>
                </div>
                <div>
                    <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddNewUser