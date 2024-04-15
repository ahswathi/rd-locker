import React, { useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../healthcare/healthcare.module.css';
import SwitchTab from '../component/SwitchTab';
import CategoriesList from './CategoriesList';
import { GoBack, ToggleButton } from '../Svg';
import AddNewCategory from '../categories/AddNewCategory';
import { useFormik } from 'formik';
import * as yup from "yup";
import Button from '@mui/material/Button';
import { cancle, formselect, save } from '../MaterialUI';

const HealthCare = () => {
    const data = [
        {
            id:0,
            image:'/healthcare.png',
            heading: 'Healthcare',
            subCategory:'7 subcategories'
        },
        {
            id:1,
            image:'/lawyer.png',
            heading: 'Lawyers',
            subCategory:'7 subcategories'
        },
        {
            id:2,
            image:'/etraveleguid.png',
            heading: 'E-traveller Guide',
            subCategory:'7 subcategories'
        },
        {
            id:3,
            image:'/securityagency.png',
            heading: 'Security Agency',
            subCategory:'7 subcategories'
        },
        {
            id:4,
            image:'/technicalservice.png',
            heading: 'Technical Services',
            subCategory:'7 subcategories'
        },
        {
            id:5,
            image:'/astrologer.png',
            heading: 'Astrologer',
            subCategory:'7 subcategories'
        },
        {
            id:6,
            image:'/chef.png',
            heading: 'Chef',
            subCategory:'7 subcategories'
        },
        {
            id:7,
            image:'/spiritual.png',
            heading: 'Spirutual',
            subCategory:'7 subcategories'
        },
        {
            id:8,
            image:'/photographer.png',
            heading: 'Photographers',
            subCategory:'7 subcategories'
        },
        {
            id:9,
            image:'/financeadvisor.png',
            heading: 'Finance Advisor',
            subCategory:'7 subcategories'
        },
    ]
    const [value, setValue] = useState([
        { val: 'All Categories', id: 0 },
        { val: 'New category request', id: 1 },
    ]);
    const [selected, setSelected] = useState(1);
    const [search, setSearch] = useState('');

    const changeID = (id) => {
        setSelected(id.id);
    };

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
    <div style={{padding:20}}>
        <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.categoryText}>Healthcare</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginRight:10,marginLeft:10}}/> 
                    Categories 
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        View SubCategories
                    </span>
                </span>
            </div>
            <div className={Styles.buttonStyle}>
                <div className={Styles.width}>
                    <div style={{marginTop:2,}}>
                        <GoBack/>
                    </div>
                    <div className={Styles.backText}>
                        Back
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.container}>
            <div className={Styles.listContainer}>
                <div className={Styles.subcatText}>
                    SubCategories
                </div>
                <CategoriesList/>
            </div>
            <div className={Styles.sideContainer}>
            <div className={Styles.visibilityContainer}>
                <div className={Styles.subcatText}>
                    Category Visibility
                </div>
                <div className={Styles.toggleButton}>
                    <ToggleButton/>
                    <span>Visible on site</span>
                </div>
            </div>
            <div className={Styles.newContainer}>
                <div className={Styles.subcatText}>
                    Add new subcategory
                </div>
                <form className={styles.form}>
                    <label>Subcategory visible on site</label>
                    <br />
                    <div className={styles.input}>
                        <input type="text" name="name" onBlur={handleBlur} value={values.name} onChange={handleChange} placeholder='Enter subcategory name' />
                    </div>
                </form>
                <div className={Styles.toggleButton}>
                    <ToggleButton/>
                    <span>Subcategory visible on site</span>
                </div>
                <div className={styles.buttons}>
                    <Button sx={cancle}  variant="contained">Cancel</Button>
                    <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
                    {/* <button>Cancel</button>
                    <button>Save</button> */}
                </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default HealthCare;