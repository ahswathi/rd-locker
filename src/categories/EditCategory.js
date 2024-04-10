import React from 'react'
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import ImageUpload from '../component/ImageUpload';
import { ToggleButton, ToggleButton1 } from '../Svg';
import Button from '@mui/material/Button';
import { custom, formselect, save } from '../MaterialUI';

const EditCategory = ({
    onCloseModal
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
            <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter category name' />
          </div>
          
          <label>Image</label>
            <ImageUpload/>
          <br />
          </form>
          <div className={styles.toggleButton}>
            <ToggleButton1/>
            <span>Category visible on site</span>
          </div>
          <div className={styles.buttons}>
            <Button sx={custom}  variant="contained" onClick={onCloseModal}>Cancel</Button>
            <Button sx={save} onClick={handleSubmit} variant="contained">Update</Button>
            {/* <button>Cancel</button>
            <button>Save</button> */}
          </div>
    </div>
  )
}

export default EditCategory;