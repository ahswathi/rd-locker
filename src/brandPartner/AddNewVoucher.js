import React, { useState } from 'react'
import { AlertIcon, CalendarIcon, DropDownIcon, GoBack, Image, LocationIcon, Upload } from '../Svg'
import { useNavigate } from 'react-router-dom';
import styles from '../categories/category.module.css';
import style from '../healthcare/healthcare.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import Styles from '../subscription/subscription.module.css'
import brandStyle from '../brandPartner/brand.module.css'
import { Button, MenuItem, Popover, Select } from '@mui/material';
import { custom, formselect, save } from '../MaterialUI';
import VendorStyles from '../vendorManagement/vendor.module.css';
import StylesView from '../voucher/voucher.module.css'
import Calendar from 'react-calendar';

const AddNewVoucher = () => {
  const [date, setDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
      setAnchorEl(null);
  };

  const openPopUp = Boolean(anchorEl);
  const id = openPopUp ? 'simple-popover' : undefined;

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
  const navigate = useNavigate();
  return (
    <div style={{padding:20}}>
      <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.categoryText}>Brand Partners</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10,marginRight:10}}/> 
                        Brand Partners
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Add new voucher
                    </span>
                </span>
            </div>
            <div className={style.buttonStyle} onClick={() => navigate('/brandPartner/BrandPartner')}>
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
      <div className={styles.listContainer}>
        <div className={styles.subcatText}>
          Add Voucher
        </div>
        <div className={styles.container}>
            <div>
                  <div style={{marginTop:20}}>
                      <label className={styles.label}>Company Name</label>
                        <br />
                      <div className={Styles.inputbox}>
                          <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                      </div>
                        {
                        errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                        } 
                  </div>
                  <div style={{marginTop:20}}>
                      <label className={styles.label}>Contact Email id</label>
                        <br />
                      <div className={Styles.inputbox}>
                          <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                      </div>
                        {
                        errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                        } 
                  </div>
                  <div style={{marginTop:20}}>
                      <label className={styles.label}>Voucher Price</label>
                        <br />
                      
                      <div className={Styles.inputbox}>
                          <div className={Styles.inrBox}>
                            INR
                          </div>
                          <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                      </div>
                        {
                        errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                        } 
                  </div>
                  <div className={brandStyle.labelText} style={{marginTop:20}}>
                      Media Content 
                      <div style={{marginTop:5,marginLeft:5}}>
                          <AlertIcon/>
                      </div>
                  </div>
                  <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select Media Content' value={values.Select}
                            onChange={handleChange}
                          
                        >
                            <MenuItem value="">Select Media Content</MenuItem>
                            <MenuItem value="ACTIVE">Image</MenuItem>
                            <MenuItem value="INACTIVE">Video</MenuItem>
                        </Select>
                  </div>
                  <div style={{marginTop:20}}>
                    <label className={Styles.label}>Image</label>
                    <div className={VendorStyles.imageUpload}>
                        <div className={VendorStyles.imageView}>
                        <Image/>
                        <div className={VendorStyles.uploadBox}>
                            <Upload/> <p className={VendorStyles.uploadText}>Upload Image</p>
                        </div>
                        <div className={VendorStyles.pixel}>
                            Image size : 0px by 0px in .jpg or .png format
                        </div>
                        </div>
                    </div>
                  </div>
                  <div style={{marginTop:20}}>
                      <label className={styles.label}>Search for location</label>
                        <br />
                      
                      <div className={Styles.inputbox}>
                          <div className={Styles.inrBox}>
                            <LocationIcon/>
                          </div>
                          <input type="text" placeholder='Enter the location to target audience' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                      </div>
                        {
                        errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                        } 
                  </div>
                  <div>
                    <p className={StylesView.headingText1}>Promotional details</p>
                    <p className={styles.home} style={{marginTop:6}}>Type of Voucher you want to create</p>
                  </div>
                  <div style={{marginTop:20}}>
                      <label className={styles.label}>Coupon Code <span className={brandStyle.digitText}>(6 digits code)</span></label>
                        <br />
                      <div className={Styles.inputbox}>
                          <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                      </div>
                        {
                        errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                        } 
                  </div>
                  
              </div>
              <div className={brandStyle.bannerStyle}>
                  <h4>Voucher Banner Preview</h4>
                  <img src='/Mask.png'/>
              </div>
        </div>
        <div className={Styles.viewStyle} style={{marginTop:20}}>
            <div style={{marginTop:5}}>
                  <label className={styles.label}>Publish Start Date</label>
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
                      open={openPopUp}
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
            <div style={{marginTop:5,}}>
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
                        open={openPopUp}
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

export default AddNewVoucher