import { Box, Button, Modal, Popover } from '@mui/material'
import React, { useEffect, useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../subscription/subscription.module.css'
import StylesView from '../voucher/voucher.module.css'
import { useFormik } from 'formik';
import * as yup from "yup";
import { ActivePercentageDiscount, ActivePriceDiscount, BlackUnCheckBox, CalendarIcon, Image, InActivePercentageDiscount, InActivePriceDiscount, Upload } from '../Svg';
import Calendar from 'react-calendar';
import { custom, save } from '../MaterialUI';
import CustomizedCheckbox from '../component/CustomizedCheckbox';
import { useDispatch } from 'react-redux';
import api from '../helper/Api';
import { editVouchers } from '../redux/voucherSlice';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';

const EditVoucher = ({open,onCloseModal,data}) => {
    const dispatch = useDispatch();
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
        title: yup.string().required("title is required"),
        companyName: yup.string().required("companyName is required"),
        code: yup.string().required("code is required"),
        description: yup.string().required("description is required"),
        // discountValue: yup.string().required("discountValue is required"),
        // usageLimits: yup.string().required("usageLimits is required"),
      })
    const {
        errors,
        values,
        handleChange,
        touched,
        setValues,
        handleBlur,
        handleSubmit,
        setFieldValue,
      } = useFormik({
        initialValues: {
            title: "",
            companyName: "",
            code: "",
            description: "",
            img: [],
            details:{
                discountType:'FIXED',
                discountValue: "",
                usageLimits: "",
                noLimits:true,
                startDate:'',
                endDate:''
            }
        },
        validationSchema: schema,
        onSubmit: (values) => {
          updateSubject(values);
        }
      })

      useEffect(() => {
        if (data) {
        setValues(data)
        }
      },[data]);

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
      const handleCheck = (e) => {
        setFieldValue('noLimits', e.target.checked)
      }

      const updateSubject = async (values) => {
        dispatch(editVouchers(values))
      }
      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        border: "none",
        padding: "15px 22px",
        display: "block",
        width: '1050px',
        borderRadius:'7px',
        "&:focus": {
          outline: "none",
        },
        overflowY: 'auto',
        maxHeight: '90vh',
      };
  return (
    <Modal
      open={open}
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock={false}
    >
        <Box sx={style}>
            <p className={Styles.headingText}>Edit Voucher</p>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:5}}>
                        <label className={styles.label}>Voucher Title</label>
                        <br />
                        <div className={Styles.inputbox}>
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.title} name='title' onChange={handleChange} />
                        </div>
                        {
                            errors.title && touched.title && <p style={{ color: "red", fontSize: "12px" }}>{errors.title}</p>
                        } 
                </div>
                <div style={{marginTop:5,marginLeft:10}}>
                        <label className={styles.label}>Company name</label>
                        <br />
                        <div className={Styles.inputbox}>
                    
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.companyName} name='companyName' onChange={handleChange} />
                        </div>
                        {
                            errors.companyName && touched.companyName && <p style={{ color: "red", fontSize: "12px" }}>{errors.companyName}</p>
                        }
                </div>
            </div>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:5}}>
                        <label className={styles.label}>Voucher code</label>
                        <br />
                        <div className={Styles.inputbox}>
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.code} name='code' onChange={handleChange} />
                        </div>
                        {
                            errors.code && touched.code && <p style={{ color: "red", fontSize: "12px" }}>{errors.code}</p>
                        } 
                </div>
                <div style={{marginTop:5,marginLeft:10}}>
                    <label className={Styles.label}>Voucher description</label>
                    <div className={Styles.inputbox}>
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.description} name='description' onChange={handleChange} />
                    </div>
                    {
                        errors.description && touched.description && <p style={{ color: "red", fontSize: "12px" }}>{errors.description}</p>
                    }
                </div>
            </div>
            <div style={{marginTop:5}}>
                <label className={styles.label}>Image</label>
                <div className={StylesView.imageUpload1}>
                    <div className={StylesView.imageView}>
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
                    <div>
                        <label htmlFor='catFile' className={StylesView.uploadBox}><Upload/> <p className={StylesView.uploadText}>Upload Image</p></label>
                        <input type='file' accept="image/*" id='catFile' style={{display:'none'}} onChange={handleImageChange} value={values.catFile}/>
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
            <div className={ values.details.discountType === 'FIXED' ?
                    StylesView.activeBox : StylesView.inActiveBox
                    }
                    onClick={() => setFieldValue('details.discountType','FIXED')}
                >
                    {values.details.discountType === 'FIXED' ? (
                        <ActivePriceDiscount/>
                    ) : 
                        <InActivePriceDiscount/>
                    }
                    
                    <p>
                        Price Discount
                    </p>
                </div>
                <div className={values.details.discountType === 'PERCENTAGE' ?
                    StylesView.activeBox : StylesView.inActiveBox
                    }
                    onClick={() => setFieldValue('details.discountType','PERCENTAGE')}
                >
                    {values.details.discountType === 'PERCENTAGE' ? (
                        <ActivePercentageDiscount/>
                    ) : 
                        <InActivePercentageDiscount/>
                    }
                    <p>
                        Percentage Discount
                    </p>
                </div>
            </div>
            <div className={Styles.viewStyle}>
                
                <div style={{marginTop:15,}}>
                        <label className={styles.label}>Start Date</label>
                        <br />
                        <div className={StylesView.calendarBox}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DatePicker 
                                   sx={{ width: 470 }}
                                   onChange={(val) => setFieldValue("details.startDate", val.$d)}
                               />
                           </LocalizationProvider> 
                        </div>
                    
                </div>
                <div style={{marginTop:15,marginLeft:10}}>
                        <label className={styles.label}>End Date</label>
                        <br />
                        <div className={StylesView.calendarBox}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                               <DatePicker 
                                   sx={{ width: 470 }} 
                                   onChange={(val) => setFieldValue("details.endDate", val.$d)}
                               />
                           </LocalizationProvider> 
                        </div>
                </div>
            </div>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:15}}>
                    <label className={styles.label}>Discount Value</label>
                    <br />
                    <div className={Styles.inputbox}>
                    <div className={Styles.inrBox}>
                        INR
                    </div>
                    <div>
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.details.discountValue} name='details.discountValue' onChange={handleChange} />
                    </div>
                </div>
                {/* {
                    errors.discountValue && touched.discountValue && <p style={{ color: "red", fontSize: "12px" }}>{errors.discountValue}</p>
                }  */}
                </div>
                <div style={{marginTop:15,marginLeft:10}}>
                    <label className={styles.label}>Usage Limits</label>
                    <br />
                    <div className={Styles.inputbox}>
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.details.usageLimits} name='details.usageLimits' onChange={handleChange} />
                    </div>
                    {/* {
                    errors.usageLimits && touched.usageLimits && <p style={{ color: "red", fontSize: "12px" }}>{errors.usageLimits}</p>
                    }  */}
                <div className={Styles.descView} style={{marginTop:10}}>
                    <CustomizedCheckbox
                        handleCheck={handleCheck}
                    />
                    <p className={StylesView.limitText}>Don't limit amount of uses</p>
                </div>
                </div>
            </div>
            <div className={styles.buttons} style={{marginTop:5}}>
                <div>
                    <Button sx={custom} variant="contained" onClick={onCloseModal}>Cancle</Button>
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