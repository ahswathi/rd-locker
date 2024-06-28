import React from 'react';
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { Button, MenuItem, Select } from '@mui/material';
import { useFormik } from 'formik';
import { apply, custom, delet, formselect, save } from '../MaterialUI';
import * as yup from "yup";
import { DropDownIcon } from '../Svg';

export const Filter = ({onClose}) => {
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
      })
    const {
        values,
        handleSubmit,
        handleChange,
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
    <div className={Styles.addNewContainer}>
        <div className={Styles.notification}>
            <div className={Styles.notifText}>
                Filter
            </div>
            
            <div onClick={onClose}>
                <img src='/cross.png'/>
            </div>
        </div>
        <div style={{marginTop:10}}>
           
            <Select className={Styles.formselect}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={formselect}
                IconComponent={DropDownIcon}
                displayEmpty
                defaultValue=''
                name='All' value={values.All}
                onChange={handleChange}
            >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="ACTIVE">Active</MenuItem>
                <MenuItem value="INACTIVE">Inactive</MenuItem>
                <MenuItem value="INACTIVE">Blocked</MenuItem>
            </Select>
        </div>
        <div className={Styles.buttonStyle}>
            <Button sx={apply} onClick={handleSubmit} variant="contained">Apply</Button>
        </div>
    </div>
  )
}

export default Filter