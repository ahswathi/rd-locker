import React from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import ImageUpload from '../component/ImageUpload';
import { Image, ToggleButton, Upload } from '../Svg';
import Button from '@mui/material/Button';
import { custom, formselect, save } from '../MaterialUI';
import { Box, Modal } from '@mui/material';
import Style from '../vendorManagement/vendor.module.css';

const AddNewCategory = ({onClose,open}) => {
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
        padding: "27px 22px",
        height: "fit-content",
        display: "block",
        width: '580px',
        borderRadius:'7px',
        "&:focus": {
          outline: "none",
        },
      };
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
          
          <div style={{marginTop:20}}>
                <label className={Style.label}>Profile Image</label>
                    <div className={Style.imageUpload}>
                        <div className={Style.imageView}>
                        <Image/>
                        <div className={Style.uploadBox}>
                            <Upload/> <p className={Style.uploadText}>Upload Image</p>
                        </div>
                        <div className={Style.pixel}>
                            Image size : 0px by 0px in .jpg or .png format
                        </div>
                    </div>
                </div>
            </div>
          </form>
          <div className={styles.toggleButton} style={{marginTop:10}}>
            <ToggleButton/>
            <span>Category visible on site</span>
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