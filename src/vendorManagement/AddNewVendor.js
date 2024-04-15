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
                    
                    <input type="text" placeholder='Enter vendor known languages' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                    </div>
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }
                </div>
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Profile Image</label>
                    <div className={Styles.ImageUpload}>
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
            <div>
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
        <div className={Styles.AddNewVendor}>
            <p className={Styles.informationText}>Identification details</p>
            <div className={Styles.lineStyle}/>
            <div className={Styles.profilVeiw}>
                <div style={{marginTop:20}}>
                    <label className={Styles.label}>Upload aadhar card image*</label>
                    <div className={Styles.ImageUpload}>
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
                    <div className={Styles.ImageUpload}>
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
        <div className={Styles.AddNewVendor}>
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