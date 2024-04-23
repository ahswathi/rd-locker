import { Box, Button, Modal, Popover } from '@mui/material'
import React, { useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../subscription/subscription.module.css'
import StylesView from '../voucher/voucher.module.css'
import { useFormik } from 'formik';
import * as yup from "yup";
import { ActivePriceDiscount, BlackUnCheckBox, CalendarIcon, Image, InActivePercentageDiscount, Upload } from '../Svg';
import Calendar from 'react-calendar';
import { custom, save } from '../MaterialUI';

const EditVoucher = ({open,onCloseModal}) => {
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
        name: yup.string().required("Name is required"),
      })
    const {
        errors,
        values,
        handleChange,
        touched,
        setValues,
        handleBlur,
        handleSubmit,
        resetForm
      } = useFormik({
        initialValues: {
          name: "",
        },
        validationSchema: schema,
        // onSubmit: () => {
        //   updateSubject();
        // }
      })
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        border: "none",
        padding: "5px 22px",
        height: 'fit-content',
        display: "block",
        width: '1050px',
        borderRadius:'7px',
        "&:focus": {
          outline: "none",
        },
      };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
            <p className={Styles.headingText}>Edit Voucher</p>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:5}}>
                        <label className={styles.label}>Voucher Title</label>
                        <br />
                        <div className={Styles.inputbox}>
                    
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                </div>
            
            {
            errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
            } 
                </div>
                <div style={{marginTop:5,marginLeft:10}}>
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
                <div style={{marginTop:5}}>
                        <label className={styles.label}>Voucher code</label>
                        <br />
                        <div className={Styles.inputbox}>
                    
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                        </div>
                    
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }    
                </div>
                <div style={{marginTop:5,marginLeft:10}}>
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
            <div style={{marginTop:5}}>
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
                <div style={{marginTop:5}}>
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
                <div style={{marginTop:5,marginLeft:10}}>
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
            </div>
            <div className={Styles.viewStyle}>
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
                <div style={{marginTop:5,marginLeft:10}}>
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
            <div className={styles.buttons} style={{marginTop:5}}>
                <div>
                    <Button sx={custom} variant="contained">Cancle</Button>
                </div>
                <div>
                    <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
                </div>
            </div>
        </Box>
    </Modal>
  )
}

export default EditVoucher