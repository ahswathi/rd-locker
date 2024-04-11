import React from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import Button from '@mui/material/Button';
import { custom, save } from '../MaterialUI';

const VendorRejection = ({onClose}) => {
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
  return (
    <div className={styles.addNewContainer}>
        <div className={Styles.notification}>
            <div className={Styles.notifText}>
                Vendor Rejection
            </div>
            <div onClick={onClose}>
                <img src='/cross.png'/>
            </div>
        </div>
        <form className={styles.form}>
          <label>Vendor Rejection</label>
          <br />
            <div className={styles.inputDesc}>
                <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter reason here' />
            </div>
        </form>
        <div className={styles.buttons}>
            <Button sx={custom}  variant="contained" onClick={onClose}>Cancel</Button>
            <Button sx={save} onClick={handleSubmit} variant="contained">Send</Button>
        </div>
    </div>
  )
}

export default VendorRejection;