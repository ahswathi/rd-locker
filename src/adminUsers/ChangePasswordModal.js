import { Box, Button, Modal } from '@mui/material'
import React, { useEffect } from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import { custom, save } from '../MaterialUI';
import { changePassword } from '../redux/adminUserSlice';
import { useDispatch } from 'react-redux';

const ChangePasswordModal = ({
  open,
  onCloseModal,
  data
}) => {
  // console.log('ChangePasswordModal',data);
    const dispatch = useDispatch();
    const schema = yup.object().shape({
      password: yup.string().required("currentPassword is required"),
      newPassword: yup.string().required("newPassword is required"),
      confirmPassword: yup.string().required("confirmPassword is required"),
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
          password: "",
          newPassword: "",
          confirmPassword: "",
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
        dispatch(changePassword(values))
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
                    <input type="password" name="password" onBlur={handleBlur} value={values.password} onChange={handleChange} placeholder='Enter current password' />
                </div>
                {
                  errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                }
                <label>New Password*</label>
                <br />
                <div className={styles.input}>
                    <input type="password" name="newPassword" onBlur={handleBlur} value={values.newPassword} onChange={handleChange} placeholder='Enter new password' />
                </div>
                {
                  errors.newPassword && touched.newPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.newPassword}</p>
                }
                <label>Confirm Password*</label>
                <br />
                <div className={styles.input}>
                    <input type='password' name="confirmPassword" onBlur={handleBlur} value={values.confirmPassword} onChange={handleChange} placeholder='Enter Confirm Password' />
                </div>
                {
                  errors.confirmPassword && touched.confirmPassword && <p style={{ color: "red", fontSize: "12px" }}>{errors.confirmPassword}</p>
                }
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