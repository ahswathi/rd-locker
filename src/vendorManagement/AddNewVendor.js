import React, { useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../vendorManagement/vendor.module.css';
import style from '../healthcare/healthcare.module.css';
import { Button, MenuItem, Select } from '@mui/material';
import { useFormik } from 'formik';
import { accept, custom, delet, formselect, save } from '../MaterialUI';
import * as yup from "yup";
import { Download, DropDownIcon, GoBack, Image, Upload } from '../Svg';
import ImageUpload from '../component/ImageUpload';
import { useNavigate } from 'react-router-dom';

const AddNewVendor = () => {
    const navigate = useNavigate()
    // schema -----------
  const schema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email").required("Please enter valid email"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup.string().required("confirmPassword is required"),
    name: yup.string().required("Name is required"),
    number: yup.string().required("number is required"),
    city: yup.string().required("City is required"),
    language: yup.string().required("Language is required"),
    state: yup.string().required("State is required"),
    country: yup.string().required("Country is required"),
  })

  const {
    errors, values, handleChange, touched, setFieldValue, handleBlur, resetForm, handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      number: "",
      city: "",
      language: "",
      state: "",
      country: "",
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
                    <h2 className={styles.categoryText}>Vendors Profile </h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10,marginRight:10}}/> 
                        All vendors
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Add new vendor
                    </span>
                </span>
            </div>
            <div className={style.buttonStyle} onClick={() => navigate('/vendorManagement/VendorsProfile')}>
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
                Add New Vendor
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
                    <label className={Styles.label}>Vendor Name*</label>
                    <div className={Styles.inputbox}>
                    
                    <input type="name" onBlur={handleBlur} value={values.name} placeholder='Enter user name' name="name" onChange={handleChange} />
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
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Category</label>
                        <br />
                        <Select className={Styles.formselect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select category' value={values.All}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select category</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                </div>
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Subcategory</label>
                        <br />
                        <Select className={Styles.formselect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select subcategory' value={values.All}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select subcategory</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                </div>
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Languages</label>
                    <div className={Styles.inputbox}>
                    
                    <input type="text" placeholder='Enter vendor known languages' onBlur={handleBlur} value={values.language} name='language' onChange={handleChange} />
                    </div>
                    {
                    errors.language && touched.language && <p style={{ color: "red", fontSize: "12px" }}>{errors.language}</p>
                    }
                </div>
                <div style={{marginTop:20}}>
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
                        
                        <input type="text" onBlur={handleBlur} value={values.city} placeholder='Enter' name="city" onChange={handleChange} />
                        </div>
                        {
                        errors.city && touched.city && <p style={{ color: "red", fontSize: "12px" }}>{errors.city}</p>
                        }
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>State</label>
                        <div className={Styles.inputbox}>
                        
                        <input type="text" onBlur={handleBlur} value={values.state} placeholder='Enter' name="state" onChange={handleChange} />
                        </div>
                        {
                        errors.state && touched.state && <p style={{ color: "red", fontSize: "12px" }}>{errors.state}</p>
                        }
                    </div>
                    <div style={{marginTop:30}}>
                        <label className={Styles.label}>Country</label>
                        <div className={Styles.inputbox}>
                        
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.country} name='country' onChange={handleChange} />
                        </div>
                        {
                        errors.country && touched.country && <p style={{ color: "red", fontSize: "12px" }}>{errors.country}</p>
                        }
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
            <p className={Styles.informationText}>Identification details</p>
            <div className={Styles.lineStyle}/>
            <div className={Styles.profilVeiw}>
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Upload aadhar card image*</label>
                    <div className={Styles.imageUpload1}>
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
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Upload pan card image*</label>
                    <div className={Styles.imageUpload1}>
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

export default AddNewVendor