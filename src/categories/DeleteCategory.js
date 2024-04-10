import React from 'react';
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { custom, delet, formselect, save } from '../MaterialUI';
import * as yup from "yup";

const DeleteCategory = ({
    closeModal
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
  return (
    <div className={styles.addNewContainer}>
        <div className={Styles.notification}>
            <div className={Styles.notifText}>
                Delete Category
            </div>
            <div onClick={closeModal}>
                <img src='/cross.png'/>
            </div>
        </div>
        <div className={styles.desc}>
            Are you sure you want to delete the selected data?
        </div>
        <div className={styles.buttons}>
            <Button sx={custom}  variant="contained" onClick={closeModal}>Cancel</Button>
            <Button sx={delet} onClick={handleSubmit} variant="contained">Delete</Button>
        </div>
    </div>
  )
}

export default DeleteCategory;