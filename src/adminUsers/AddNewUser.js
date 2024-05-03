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
import CustomizedSwitches from '../categories/CustomSwitch';
import api from '../helper/Api';
import { addAdminUsers } from '../redux/adminUserSlice';
import { useDispatch } from 'react-redux';

const AddNewUser = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // schema -----------
  const schema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email").required("Please enter valid email"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("confirmPassword is required"),
    name: yup.string().required("name is required"),
    number: yup.string().required("number is required"),
  })

  const {
    errors, values, handleChange, touched, setFieldValue, handleBlur, resetForm, handleSubmit,
  } = useFormik({
    initialValues: {
        name: "",
        email: "",
        number: "",
        password: "",
        confirmPassword: "",
        img: [],
        status: true,
        city:'',
        state:'',
        country:'',
    },
    validationSchema: schema,
    onSubmit: (values) => {
      handleSubject(values);
    }
  })

  const handleSubject = async (values) =>{
        dispatch(addAdminUsers(values))
    }
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      
      const body = new FormData()
      body.set('image',file) 
      const {data, status} = await api.fileUpload(body)
      if(status === 200) {
        setFieldValue("img", data.data)
      }
    }
  };

  const handleStatus = (e) => {
    setFieldValue("status", e.target.checked)
  }
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
                    <div>
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
                        <input type="text" onBlur={handleBlur} value={values.name} placeholder='Enter user name' name="name" onChange={handleChange} />
                    </div>
                    {
                        errors.name && touched.name && <p style={{ color: "red", fontSize: "12px" }}>{errors.name}</p>
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
                    
                    <input type='number' placeholder='Enter phone number' onBlur={handleBlur} value={values.number} name='number' onChange={handleChange} />
                    </div>
                    {
                    errors.number && touched.number && <p style={{ color: "red", fontSize: "12px" }}>{errors.number}</p>
                    }
                </div>
                <div className={styles.container} style={{marginTop:20}}>
                    <div className={Styles.label}>
                        Account status
                    </div>
                    <div className={styles.toggleButton}>
                        <CustomizedSwitches
                            onMessage={'Block'}
                            handleChange={handleStatus}
                        />
                    </div>
                </div>
                
                <div style={{marginTop:40}}>
                    <label className={Styles.label}>Profile Image</label>
                    <div className={Styles.imageUpload}>
                        <div className={Styles.imageView}>
                            {values?.img?.length > 0 ? (
                                <div>
                                    <img
                                        src={values.img[0]}
                                        alt="Selected"
                                        style={{ maxWidth: '100%', marginTop: '0px' }}
                                    />
                                </div>
                            ) : (
                                <Image/>
                            )
                            }
                        <div >
                            
                            <label htmlFor='catFile' className={Styles.uploadBox}><Upload/> <p className={Styles.uploadText}>Upload Image</p></label>
                            <input type='file' accept="image/*" id='catFile' style={{display:'none'}} onChange={handleImageChange} value={values.catFile}/>
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
                            <input type="text" onBlur={handleBlur} value={values.city} placeholder='Enter' name="city" onChange={handleChange} />
                        </div>
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>State</label>
                        <div className={Styles.inputbox}>
                            <input type="text" onBlur={handleBlur} value={values.state} placeholder='Enter' name="state" onChange={handleChange} />
                        </div>
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>Country</label>
                        <div className={Styles.inputbox}>
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.country} name='country' onChange={handleChange} />
                        </div>
                    </div>
                </div> 
                <div className={Styles.profileContainer} style={{marginTop:30}}>
                    <p className={Styles.informationText}>Password Details</p>
                    <div className={Styles.lineStyle}/>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>Password*</label>
                        <div className={Styles.inputbox}>
                            <input type='password' onBlur={handleBlur} value={values.password} placeholder='Enter password' name="password" onChange={handleChange} />
                        </div>
                        {
                            errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                        }
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>Confirm Password*</label>
                        <div className={Styles.inputbox}>
                            <input type="password" onBlur={handleBlur} value={values.confirmPassword} placeholder='Confirm password' name="confirmPassword" onChange={handleChange} />
                        </div>
                        {
                            errors.confirmPassword && touched.confirmPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword}</p>
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