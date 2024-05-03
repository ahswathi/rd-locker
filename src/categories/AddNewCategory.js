import React, { useState } from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import ImageUpload from '../component/ImageUpload';
import { Image, ToggleButton, Upload } from '../Svg';
import Button from '@mui/material/Button';
import { custom, formselect, save } from '../MaterialUI';
import { Box, Modal, Stack, Switch } from '@mui/material';
import Style from '../vendorManagement/vendor.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../redux/categoriesSlice';
import CustomSwitchExample from './CustomSwitch';
import CustomizedSwitches from './CustomSwitch';
import api from '../helper/Api';

const AddNewCategory = ({onClose,open}) => {
  const dispatch = useDispatch();
  // const isRefresh  = useSelector(state => state.categories.isRefresh)
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
      })
    const {
        errors,
        values,
        handleChange,
        touched,
        setValues,
        setFieldValue,
        handleBlur,
        handleSubmit,
        resetForm
      } = useFormik({
        initialValues: {
          name: "",
          img: [],
          status: true
        },
        validationSchema: schema,
        onSubmit: (values) => {
          updateSubject(values);
        }
      })
      
      const updateSubject = async (values) =>{
          dispatch(addCategory(values))
          onClose()
      }

      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        border: "none",
        padding: "27px 22px",
        height: "fit-content",
        display: "block",
        width: '580px',
        borderRadius:'7px',
        "&:focus": {
          outline: "none",
        },
      };

      

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

      const handleStatus = (e) => {
        setFieldValue("status", e.target.checked)
      }

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={Styles.notification}>
            <div className={Styles.notifText}>
                Add New Category
            </div>
            <div onClick={onClose}>
                <img src='/cross.png'/>
            </div>
        </div>
        <form className={styles.form}>
          <label>Subject Name</label>
          <br />
          <div className={styles.input}>
            <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter category name' />
          </div>
          {
            errors.name && touched.name && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.name}</p>
          }
          <div style={{marginTop:20}}>
                <label className={Style.label}>Profile Image</label>
                    <div className={Style.imageUpload}>
                        <div className={Style.imageView}>
                        {values.img.length > 0 ? (
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
                        <div >
                            
                            <label htmlFor='catFile' className={Style.uploadBox}><Upload/> <p className={Style.uploadText}>Upload Image</p></label>
                            <input type='file' accept="image/*" id='catFile' style={{display:'none'}} onChange={handleImageChange} value={values.catFile}/>
                        </div>
                        <div className={Style.pixel}>
                            Image size : 0px by 0px in .jpg or .png format
                        </div>
                    </div>
                </div>
          </div>
          </form>
          <div style={{marginTop:10}}>
            <CustomizedSwitches
                handleChange={handleStatus}
                onMessage={'Category visible on site'}
            />
            {/* <span>Category visible on site</span> */}
          </div>
          <div className={styles.buttons}>
            <Button sx={custom}  variant="contained" onClick={onClose}>Cancel</Button>
            <Button sx={save} onClick={handleSubmit} variant="contained">Update</Button>
            {/* <button>Cancel</button>
            <button>Save</button> */}
          </div>
    </Box>
    </Modal>
  )
}

export default AddNewCategory;