import React from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import ImageUpload from '../component/ImageUpload';
import { Image, ToggleButton, ToggleButton1, Upload } from '../Svg';
import Button from '@mui/material/Button';
import { custom, save } from '../MaterialUI';
import Style from '../vendorManagement/vendor.module.css';
import { Box, Modal } from '@mui/material';

const EditAdminUser = ({
    onCloseModal,
    open
}) => {
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
        width: '780px',
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
        {/* <div className={styles.editContainer}> */}
            <div className={Styles.notification}>
                <div className={Styles.notifText}>
                    Edit Admin User
                </div>
                <div onClick={onCloseModal}>
                    <img src='/cross.png'/>
                </div>
            </div>
            <p className={Style.informationText} style={{marginTop:20}}>Basic Information</p>
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
                        <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter Email Id' />
                    </div>
                </div>
                <div>
                    <label>Phone Number</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter Phone Number' />
                    </div>
                </div>
            </div>
            <div className={styles.container} style={{marginTop:10}}>
                        <div className={Style.label}>
                            Account status
                        </div>
                        <div className={styles.toggleButton}>
                            <div>
                                <ToggleButton1/>
                            </div>
                            <span>
                                Block
                            </span>
                        </div>
                    </div>
            <div style={{marginTop:20}}>
                <label className={Style.label}>Profile Image</label>
                    <div className={Style.imageUpload}>
                        <div className={Style.imageView}>
                        <Image/>
                        <div className={Style.uploadBox}>
                            <Upload/> <p className={Style.uploadText}>Upload Image</p>
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
                        <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter' />
                    </div>
                </div>
                <div>
                    <label>State</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter' />
                    </div>
                </div>
                <div>
                    <label>Country</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter' />
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