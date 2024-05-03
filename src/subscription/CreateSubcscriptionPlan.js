import React, { useState,useEffect } from 'react'
import styles from '../categories/category.module.css';
import style from '../healthcare/healthcare.module.css';
import { DropDownIcon, GoBack,} from '../Svg';
import { useNavigate } from 'react-router-dom';
import Styles from '../subscription/subscription.module.css'
import { Button, MenuItem, Select } from '@mui/material';
import { custom, formselect, save } from '../MaterialUI';
import { useFormik } from 'formik';
import * as yup from "yup";
import CustomizedCheckbox from '../component/CustomizedCheckbox';
import { useDispatch } from 'react-redux';
import { addSubscription } from '../redux/subscriptionSlice';

const CreateSubcscriptionPlan = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const schema = yup.object().shape({
        price: yup.string().required("price is required"),
        planDuration: yup.string().required("plan is required"),
        role: yup.string().required("role is required"),
        planType: yup.string().required("planType is required"),
        status: yup.string().required("status is required"),
      })
    
      const {
        errors, values, handleChange, touched, setFieldValue, handleBlur, resetForm, handleSubmit,
      } = useFormik({
        initialValues: {
            planDuration:'',
            planType:'',
            role:'',
            price: 0,
            status: true,
            features: {
                maxChat: 0,
                maxPost: 0,
                unlimitedChat:true,
                audioCall:true,
                videoCall:true
            }
            
        },
        validationSchema: schema,
        onSubmit: (values) => {
          handleSubject(values);
        }
      })
      
    const handlePost = (e) => {
        setFieldValue("features.maxPost", 0)
    }
    const handleUnlimitedChat = (e) => {
        setFieldValue("features.unlimitedChat", e.target.checked)
    }
    const handleChat = (e) => {
        setFieldValue("features.maxChat", 0)
    }

    const handleAudioCall = (e) => {
        setFieldValue("features.audioCall", e.target.checked)
    }

    const handleVideoCall = (e) => {
        setFieldValue("features.videoCall", e.target.checked)
    }


    const handleSubject = async (values) => {
        dispatch(addSubscription(values))
    }
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
                    <div>
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
                            name='planDuration' 
                            value={values.planDuration}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="YEARLY">Yearly</MenuItem>
                            {/* <MenuItem value="Monthly">Monthly</MenuItem> */}
                        </Select>
                    </div>
                    {
                        errors.planDuration && touched.planDuration && <p style={{ color: "red", fontSize: "12px" }}>{errors.planDuration}</p>
                    }
                </div>
                <div style={{marginTop:20,marginLeft:10}}>
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
                            name='role' 
                            value={values.role}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="CUSTOMER">E-travellers</MenuItem>
                            <MenuItem value="VENDOR">Vendors</MenuItem>
                            <MenuItem value="DELIVERY_AGENT">Delivery Agents</MenuItem>
                        </Select>
                    </div>
                    {
                        errors.role && touched.role && <p style={{ color: "red", fontSize: "12px" }}>{errors.role}</p>
                    }
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
                            name='planType' 
                            value={values.planType}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="FREE">Free Version</MenuItem>
                            <MenuItem value="GOLD">GoldMembership</MenuItem>
                        </Select>
                    </div>
                    {
                        errors.planType && touched.planType && <p style={{ color: "red", fontSize: "12px" }}>{errors.planType}</p>
                    }
                </div>
                <div style={{marginTop:20,marginLeft:0}}>
                    <label className={Styles.label}>Pricing</label>
                    <div className={Styles.inputbox}>
                    <div className={Styles.inrBox}>
                        INR
                    </div>
                        <div>
                            <input type='number' placeholder='Enter' onBlur={handleBlur} value={values.price} name='price' onChange={handleChange} />
                        </div>
                    </div>
                    {
                        errors.price && touched.price && <p style={{ color: "red", fontSize: "12px" }}>{errors.price}</p>
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
                            name='status' value={values.status}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value={true}>Active</MenuItem>
                            <MenuItem value={false}>Inactive</MenuItem>
                        </Select>
                    </div>
                    {
                        errors.status && touched.status && <p style={{ color: "red", fontSize: "12px" }}>{errors.status}</p>
                    }
            </div>
            <div className={Styles.planText}>
                Plan includes
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                        <CustomizedCheckbox
                            handleCheck={handlePost}
                        />
                    <div className={Styles.maxText}>Max</div>
                    <div>
                    <Select className={Styles.selectPicker}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={formselect}
                        IconComponent={DropDownIcon}
                        displayEmpty
                        defaultValue=''
                        name='features.maxPost' 
                        value={values.features.maxPost}
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
                    <CustomizedCheckbox
                        handleCheck={handleUnlimitedChat}
                    />
                    <div className={Styles.maxText}>
                        Unlimited chat with vendors and delivery agents
                    </div>
                    </div>
                    <div className={Styles.descView}>
                        <CustomizedCheckbox
                            handleCheck={handleChat}
                        />
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
                                name='features.maxChat' 
                                value={values.features.maxChat}
                                onChange={handleChange}
                            >
                                <MenuItem value="">5</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="15">15</MenuItem>
                                <MenuItem value="20">20</MenuItem>
                            </Select>
                        </div>
                        <div className={Styles.maxText} style={{marginLeft:20}}>
                            messages
                        </div>
                   
                    </div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <CustomizedCheckbox
                        handleCheck={handleAudioCall}
                    />
                    <div className={Styles.maxText}>Audio call</div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <CustomizedCheckbox
                        handleCheck={handleVideoCall}
                    />
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