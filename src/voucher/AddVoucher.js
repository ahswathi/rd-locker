import React, { useState } from 'react'
import styles from '../categories/category.module.css';
import style from '../healthcare/healthcare.module.css';
import { ActivePriceDiscount, BlackCheckBox, BlackUnCheckBox, CalendarIcon, DropDownIcon, GoBack, Image, InActivePercentageDiscount, UnCheckedBox, Upload } from '../Svg';
import { useNavigate } from 'react-router-dom';
import { Button, Popover,} from '@mui/material';
import { custom, save } from '../MaterialUI';
import { useFormik } from 'formik';
import * as yup from "yup";
import Styles from '../subscription/subscription.module.css'
import StylesView from '../voucher/voucher.module.css'
import { DatePicker } from 'rsuite';
import Calendar from 'react-calendar';

const AddVoucher = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
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
                    <h2 className={styles.categoryText}>Vouchers</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10,marginRight:10}}/> 
                        All vouchers
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Add new voucher
                    </span>
                </span>
            </div>
            <div className={style.buttonStyle} onClick={() => navigate('/voucher/Voucher')}>
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
            <p className={Styles.headingText}>Add New Voucher</p>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Voucher Title</label>
                        <br />
                        <div className={Styles.inputbox}>
                    
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                </div>
            
            {
            errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
            } 
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                        <label className={styles.label}>Company name</label>
                        <br />
                        <div className={Styles.inputbox}>
                    
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                        </div>
                    
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }
                </div>
            </div>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Voucher code</label>
                        <br />
                        <div className={Styles.inputbox}>
                    
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                        </div>
                    
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }    
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                    <label className={Styles.label}>Voucher description</label>
                    <div className={Styles.inputbox}>
                        <div>
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                        </div>
                    </div>
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }
                </div>
            </div>
            <div style={{marginTop:20}}>
                <label className={styles.label}>Image</label>
                <div className={StylesView.imageUpload1}>
                    <div className={StylesView.imageView}>
                    <Image/>
                    <div className={StylesView.uploadBox}>
                        <Upload/> <p className={StylesView.uploadText}>Upload Image</p>
                    </div>
                    <div className={StylesView.pixel}>
                        Image size : 0px by 0px in .jpg or .png format
                    </div>
                    </div>
                </div>
            </div>
            <div>
                <p className={StylesView.headingText1}>Promotional details</p>
                <p className={styles.home} style={{marginTop:6}}>Type of Voucher you want to create</p>
            </div>
            <div className={Styles.descView}>
                <div className={StylesView.activeBox}>
                    <ActivePriceDiscount/>
                    <p>
                        Price Discount
                    </p>
                </div>
                <div className={StylesView.inActiveBox}>
                    <InActivePercentageDiscount/>
                    <p>
                        Percentage Discount
                    </p>
                </div>
            </div>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:20}}>
                    <label className={styles.label}>Discount Value</label>
                    <br />
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
                <div style={{marginTop:20,marginLeft:20}}>
                        <label className={styles.label}>Start Date</label>
                        <br />
                        <div className={StylesView.calendarBox} onClick={handleClick}>
                            <p>
                                {date.toDateString()}
                            </p>
                            <div>
                                <CalendarIcon/>
                            </div>
                        </div>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Calendar 
                                onChange={setDate} 
                                value={date} 
                            />
                        </Popover>
                    
                </div>
            </div>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:20,}}>
                        <label className={styles.label}>End Date</label>
                        <br />
                        <div className={StylesView.calendarBox} onClick={handleClick}>
                            <p>
                                {endDate.toDateString()}
                            </p>
                            <div>
                                <CalendarIcon/>
                            </div>
                        </div>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                              vertical: 'bottom',
                              horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Calendar 
                                onChange={setEndDate} 
                                value={endDate} 
                            />
                        </Popover>
                    
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                    <label className={styles.label}>Usage Limits</label>
                    <br />
                    <div className={Styles.inputbox}>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                </div>
                {
                errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                } 
                <div className={Styles.descView} style={{marginTop:10}}>
                    <div style={{marginTop:3}}>
                    <BlackUnCheckBox/>
                    </div>
                    <p className={StylesView.limitText}>Don't limit amount of uses</p>
                </div>
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

export default AddVoucher