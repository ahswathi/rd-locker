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
import CustomizedSwitches from '../categories/CustomSwitch';
import { editSubCategory } from '../redux/subCategoriesSlice';
import { useParams } from 'react-router-dom';

const EditSubCategory = ({
    onCloseModal,
    open,
    data
}) => {
    const params = useParams();
    // console.log('datas===========',data);
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
          status: true,
          baseId:params.id
        },
        validationSchema: schema,
        onSubmit: (values) => {
          updateSubject(values);
        }
      })

      useEffect(() => {
        if (data) {
            setValues({...data, baseId: params.id})
            // setValues(data)
        }
      },[data])

      const updateSubject = async (values) =>{
        dispatch(editSubCategory(values))
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
                Edit Sub Category
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
          {
            errors.name && touched.name && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.name}</p>
          }
          </form>
          <div className={styles.toggleButton} style={{marginTop:10}}>
            <CustomizedSwitches
                 handleChange={handleStatus}
                onMessage={'SubCategory visible on site'}
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

export default EditSubCategory;