import React from 'react'
import styles from '../categories/category.module.css';
import style from '../healthcare/healthcare.module.css';
import { BlackCheckBox, BlackUnCheckBox, DropDownIcon, GoBack, UnCheckedBox } from '../Svg';
import { useNavigate } from 'react-router-dom';
import Styles from '../subscription/subscription.module.css'
import { Button, MenuItem, Select } from '@mui/material';
import { custom, formselect, save } from '../MaterialUI';
import { useFormik } from 'formik';
import * as yup from "yup";

const CreateSubcscriptionPlan = () => {
    const navigate = useNavigate();
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
                    <h2 className={styles.categoryText}>Subscription Plans</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10,marginRight:10}}/> 
                        Subscription Plans
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Add new subscription
                    </span>
                </span>
            </div>
            <div className={style.buttonStyle} onClick={() => navigate('/subscription/SubscriptionPlans')}>
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
        <div className={Styles.createPlanContainer}>
            <p className={Styles.headingText}>Add New Subscription Plan</p>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Subscription Plan*</label>
                        <br />
                        <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                        </div>
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                        <label className={styles.label}>Select role</label>
                        <br />
                        <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                        </div>
                </div>
            </div>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Subscription Type</label>
                        <br />
                        <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                        </div>
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                    <label className={Styles.label}>Pricing</label>
                    <div className={Styles.inputbox}>
                    <div className={Styles.inrBox}>
                        INR
                    </div>
                        <div>
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                        </div>
                    </div>
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }
                </div>
            </div>
            <div style={{marginTop:20,}}>
                        <label className={styles.label}>Plan Status</label>
                        <br />
                        <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                        </div>
            </div>
            <div className={Styles.planText}>
                Plan includes
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <div><BlackCheckBox/></div>
                    <div className={Styles.maxText}>Max</div>
                    <div>
                    <Select className={Styles.selectPicker}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={formselect}
                        IconComponent={DropDownIcon}
                        displayEmpty
                        defaultValue=''
                        name='5' value={values.value}
                        onChange={handleChange}
                    >
                        <MenuItem value="">5</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                    </Select>
                    </div>
                    <div className={Styles.maxText} style={{marginLeft:20}}>
                        posts (without image)
                    </div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.checkBoxView}>
                <div className={Styles.descView}>
                    <div><BlackCheckBox/></div>
                    <div className={Styles.maxText}>
                        Unlimited chat with vendors and delivery agents
                    </div>
                    </div>
                    <div className={Styles.descView}>
                        <div >
                            <BlackUnCheckBox/>
                        </div>
                        <div className={Styles.maxText}>
                            Limited to 
                        </div>
                        <div>
                            <Select className={Styles.selectPicker}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={formselect}
                                IconComponent={DropDownIcon}
                                displayEmpty
                                defaultValue=''
                                name='5' value={values.value}
                                onChange={handleChange}
                            >
                                <MenuItem value="">5</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="15">15</MenuItem>
                                <MenuItem value="20">20</MenuItem>
                            </Select>
                        </div>
                        <div className={Styles.maxText} style={{marginLeft:10}}>
                            messages
                        </div>
                   
                    </div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <div><BlackUnCheckBox/></div>
                    <div className={Styles.maxText}>Audio call</div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <div><BlackUnCheckBox/></div>
                    <div className={Styles.maxText}>Video call</div>
                </div>
            </div>
            <div className={styles.buttons} style={{marginTop:20}}>
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

export default CreateSubcscriptionPlan