import React, { useState } from 'react'
import styles from '../categories/category.module.css';
import style from '../healthcare/healthcare.module.css';
import { ActivePercentageDiscount, ActivePriceDiscount, BlackCheckBox, BlackUnCheckBox, CalendarIcon, DropDownIcon, GoBack, Image, InActivePercentageDiscount, InActivePriceDiscount, UnCheckedBox, Upload } from '../Svg';
import { useNavigate } from 'react-router-dom';
import { Button, InputAdornment, Popover, TextField,} from '@mui/material';
import { custom, save } from '../MaterialUI';
import { useFormik } from 'formik';
import * as yup from "yup";
import Styles from '../subscription/subscription.module.css'
import StylesView from '../voucher/voucher.module.css'
import api from '../helper/Api';
import CustomizedCheckbox from '../component/CustomizedCheckbox';
import { useDispatch } from 'react-redux';
import { addVouchers } from '../redux/voucherSlice';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import dayjs from 'dayjs';


const AddVoucher = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // const [date, setDate] = useState(new Date());
    // console.log('date',date);
    // const [endDate, setEndDate] = useState(new Date());
    // const [anchorEl, setAnchorEl] = useState(null);
    // console.log('anchorEl',anchorEl);

    // const handleClick = (event) => {
    //     setAnchorEl(event.currentTarget);
    // };

    // const handleClose = () => {
    //     setAnchorEl(null);
    // };

    // const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;
    const schema = yup.object().shape({
        title: yup.string().required("title is required"),
        companyName: yup.string().required("companyName is required"),
        code: yup.string().required("code is required"),
        description: yup.string().required("description is required"),
        // 'details.discountValue': yup.string().required("discountValue is required"),
        // 'details.usageLimits': yup.string().required("usageLimits is required"),
        // 'details.discountType': yup.string().required("discountType is required"),
        // 'details.startDate': yup.string().required("startDate is required"),
        // 'details.endDate': yup.string().required("endDate is required"),
      })
    
      const {
        errors, 
        values, 
        handleChange, 
        touched, 
        setFieldValue, 
        handleBlur, 
        handleSubmit,
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
                startDate: '',
                endDate:"",
            }
        },
        validationSchema: schema,
        onSubmit: (values) => {
          handleSubject(values);
        }
      })
      console.log(errors)
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

      const handleSubject = async (values) => {
        // dispatch(addVouchers(values))
      }
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
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.title} name='title' onChange={handleChange} />
                        </div>
                        {
                            errors.title && touched.title && <p style={{ color: "red", fontSize: "12px" }}>{errors.title}</p>
                        } 
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
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
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Voucher code</label>
                        <br />
                        <div className={Styles.inputbox}>
                            <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.code} name='code' onChange={handleChange} />
                        </div>
                        {
                            errors.code && touched.code && <p style={{ color: "red", fontSize: "12px" }}>{errors.code}</p>
                        }    
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                    <label className={Styles.label}>Voucher description</label>
                    <div className={Styles.inputbox}>
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.description} name='description' onChange={handleChange} />
                    </div>
                    {
                        errors.description && touched.description && <p style={{ color: "red", fontSize: "12px" }}>{errors.description}</p>
                    }
                </div>
            </div>
            <div style={{marginTop:20}}>
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
                              {/* <button onClick={handleUpload}>Upload</button> */}
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
                {/* {
                    errors.details?.discountType && touched.details?.discountType && <p style={{ color: "red", fontSize: "12px" }}>{errors.details?.discountType}</p>
                } */}
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
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.details.discountValue} name='details.discountValue' onChange={handleChange} />
                    </div>
                </div>
                {/* {
                errors.details?.discountValue && touched.details?.discountValue && <p style={{ color: "red", fontSize: "12px" }}>{errors.details?.discountValue}</p>
                }  */}
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
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
                        {/* {
                        errors.details?.startDate && touched.details?.startDate && <p style={{ color: "red", fontSize: "12px" }}>{errors.details?.startDate}</p>
                        }                */}
                </div>
            </div>
            <div className={Styles.viewStyle}>
                <div style={{marginTop:20,}}>
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
                        {/* {
                        errors.details?.endDate && touched.details?.endDate && <p style={{ color: "red", fontSize: "12px" }}>{errors.details?.endDate}</p>
                        } */}
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                    <label className={styles.label}>Usage Limits</label>
                    <br />
                    <div className={Styles.inputbox}>
                        <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.details.usageLimits} name='details.usageLimits' onChange={handleChange} />
                    </div>
                    {/* {
                    errors.details?.usageLimits && touched.details?.usageLimits && <p style={{ color: "red", fontSize: "12px" }}>{errors.details?.usageLimits}</p>
                    }  */}
                <div className={Styles.descView} style={{marginTop:10}}>
                     {/* <div style={{marginTop:3}}>
                    <BlackUnCheckBox/>
                    </div> */}
                    
                    <CustomizedCheckbox
                        handleCheck={handleCheck}
                    />
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