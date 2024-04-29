import React, { useEffect, useState } from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Image, ToggleButton, ToggleButton1, Upload } from '../Svg';
import Button from '@mui/material/Button';
import { custom, save } from '../MaterialUI';
import Style from '../vendorManagement/vendor.module.css';
import { Box, Modal } from '@mui/material';
import { useDispatch } from 'react-redux';
import { editCategory } from '../redux/categoriesSlice';
import CustomizedSwitches from './CustomSwitch';
import api from '../helper/Api';

const EditCategory = ({
    onCloseModal,
    open,
    data
}) => {
    const dispatch = useDispatch();
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
        setFieldValue
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

      useEffect(() => {
        if (data) {
          setValues(data)
        }
      },[data])

      const updateSubject = async (values) =>{
        dispatch(editCategory(values))
        onCloseModal()
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
      onClose={onCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={Styles.notification}>
            <div className={Styles.notifText}>
                Edit Category
            </div>
            <div onClick={onCloseModal}>
                <img src='/cross.png'/>
            </div>
        </div>
        <form className={styles.form}>
          <label>Subject Name</label>
          <br />
          <div className={styles.input}>
            <input type="text" name="name" onBlur={handleBlur} value={values.name } onChange={handleChange} placeholder='Enter category name' />
          </div>
          
          <div style={{marginTop:20}}>
                <label className={Style.label}>Profile Image</label>
                    <div className={Style.imageUpload}>
                        <div className={Style.imageView}>
                        {values?.img?.length > 0 ? (
                            <div>
                              <img
                                src={values.img[0]}
                                alt="Selected"
                                style={{ maxWidth: '100px',maxHeight:'50px', marginTop: '0px' }}
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
          <div className={styles.toggleButton} style={{marginTop:10}}>
            <CustomizedSwitches
                 handleChange={handleStatus}
                onMessage={'Category visible on site'}
            />
          </div>
          <div className={styles.buttons}>
            <Button sx={custom}  variant="contained" onClick={onCloseModal}>Cancel</Button>
            <Button sx={save} onClick={handleSubmit} variant="contained">Update</Button>
          </div>
    </Box>
    </Modal>
  )
}

export default EditCategory;