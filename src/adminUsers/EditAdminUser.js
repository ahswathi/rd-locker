import React, { useEffect } from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import ImageUpload from '../component/ImageUpload';
import { Image, ToggleButton, ToggleButton1, Upload } from '../Svg';
import Button from '@mui/material/Button';
import { custom, save } from '../MaterialUI';
import Style from '../adminUsers/admin.module.css'
import { Box, Modal } from '@mui/material';
import CustomizedSwitches from '../categories/CustomSwitch';
import { editAdminUsers } from '../redux/adminUserSlice';
import api from '../helper/Api';
import { useDispatch } from 'react-redux';

const EditAdminUser = ({
    onCloseModal,
    open,
    data
}) => {
    // console.log('data',data);
    const dispatch = useDispatch();

    const schema = yup.object().shape({
        // email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email").required("Please enter valid email"),
        // password: yup.string().required("Password is required"),
        // confirmPassword: yup.string().required("confirmPassword is required"),
        // name: yup.string().required("name is required"),
        // phone: yup.string().required("phonenumber is required"),
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
            name: "",
            email: "",
            phone: "",
            countryCode: "+91",
            profileImg: [],
            status: true,
            address:{
                city:'',
                state:'',
                country:'',
            }
        },
        // validationSchema: schema,
        onSubmit: (values) => {
          updateSubject(values);
        }
      })

      useEffect(() => {
        if (data) {
          setValues(data)
        }
      },[data])

      const handleStatus = (e) => {
        setFieldValue("status", e.target.checked)
      }

      const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
          
          const body = new FormData()
          body.set('image',file) 
          const {data, status} = await api.fileUpload(body)
          if(status === 200) {
            setFieldValue("profileImg", data.data)
          }
        }
      };

      const updateSubject = async (values) =>{
        dispatch(editAdminUsers(values))
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
    >
      <Box sx={style}>
        {/* <div className={styles.editContainer}> */}
            <div className={Styles.notification}>
                <div className={Styles.notifText}>
                    Edit Admin User
                </div>
                <div onClick={onCloseModal}>
                    <img src='/cross.png'/>
                </div>
            </div>
            <p className={Style.informationText} style={{marginTop:10}}>Basic Information</p>
            <div className={Style.lineStyle}/>
            <div className={styles.container} style={{marginTop:10}}>
                <div>
                    <label>User Name*</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter user name' />
                    </div>
                </div>
                <div>
                    <label>Email Id*</label>
                    <br />
                    <div className={styles.input}>
                        <input type='email' name="email" onBlur={handleBlur} value={values.email} onChange={handleChange} placeholder='Enter Email Id' />
                    </div>
                </div>
                <div>
                    <label>Phone Number</label>
                    <br />
                    <div className={styles.input}>
                        <input type='number' name="phone" onBlur={handleBlur} value={values.phone} onChange={handleChange} placeholder='Enter Phone Number' />
                    </div>
                </div>
            </div>
            <div className={styles.container} style={{marginTop:5}}>
                        <div className={Style.label}>
                            Account status
                        </div>
                        <div className={styles.toggleButton}>
                        <CustomizedSwitches
                            onMessage={'Block'}
                            handleChange={handleStatus}
                            checked={values.status}
                        />
                        </div>
                    </div>
            <div style={{marginTop:5}}>
                <label className={Style.label}>Profile Image</label>
                    <div className={Style.imageUpload}>
                        <div className={Style.imageView}>
                        {values?.profileImg?.length > 0 ? (
                                <div>
                                    <img
                                        src={values.profileImg[0]}
                                        alt="Selected"
                                        style={{ maxWidth: '100%', marginTop: '0px' }}
                                    />
                                </div>
                            ) : (
                                <Image/>
                            )
                            }
                        <div>
                            <label htmlFor='catFile' className={Style.uploadBox}><Upload/> <p className={Style.uploadText}>Upload Image</p></label>
                            <input type='file' accept="image/*" id='catFile' style={{display:'none'}} onChange={handleImageChange} value={values.catFile}/>
                        </div>
                    </div>
                </div>
            </div>
            <p className={Style.informationText} style={{marginTop:20}}>Address details</p>
            <div className={Style.lineStyle}/>
            <div className={styles.container} style={{marginTop:10}}>
                <div>
                    <label>City</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="city" onBlur={handleBlur} value={values?.address?.city} onChange={handleChange} placeholder='Enter' />
                    </div>
                </div>
                <div>
                    <label>State</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="state" onBlur={handleBlur} value={values?.address?.state} onChange={handleChange} placeholder='Enter' />
                    </div>
                </div>
                <div>
                    <label>Country</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="country" onBlur={handleBlur} value={values?.address?.country} onChange={handleChange} placeholder='Enter' />
                    </div>
                </div>
            </div>
            <div className={styles.buttons}>
                <Button sx={custom}  variant="contained" onClick={onCloseModal}>Cancel</Button>
                <Button sx={save} onClick={handleSubmit} variant="contained">Update</Button>
                {/* <button>Cancel</button>
                <button>Save</button> */}
            </div>
    
    </Box>
    </Modal>
  )
}

export default EditAdminUser;