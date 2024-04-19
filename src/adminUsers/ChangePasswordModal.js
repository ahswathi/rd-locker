import { Box, Button, Modal } from '@mui/material'
import React from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import { custom, save } from '../MaterialUI';

const ChangePasswordModal = ({open,onCloseModal}) => {
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
        width: '480px',
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
            <div className={Styles.notification}>
                <div className={Styles.notifText}>
                    Change Password 
                </div>
                <div onClick={onCloseModal}>
                    <img src='/cross.png'/>
                </div>
            </div>
            <form className={styles.form}>
                <label>Current Password*</label>
                <br />
                <div className={styles.input}>
                    <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter current password' />
                </div>
    
                <label>New Password*</label>
                <br />
                <div className={styles.input}>
                    <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter new password' />
                </div>
        
                <label>Confirm Password*</label>
                <br />
                <div className={styles.input}>
                    <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter Confirm Password' />
                </div>
            </form>
            <div className={styles.buttons}>
                <Button sx={custom}  variant="contained" onClick={onCloseModal}>Cancel</Button>
                <Button sx={save} onClick={handleSubmit} variant="contained">Update</Button>
          </div>
        </Box>
    </Modal>
  )
}

export default ChangePasswordModal