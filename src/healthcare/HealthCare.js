import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../healthcare/healthcare.module.css';
import CategoriesList from './CategoriesList';
import { GoBack, ToggleButton } from '../Svg';
import { useFormik } from 'formik';
import * as yup from "yup";
import Button from '@mui/material/Button';
import { cancle, save } from '../MaterialUI';
import { useLocation, useParams } from 'react-router-dom';
import api from '../helper/Api';
import CustomizedSwitches from '../categories/CustomSwitch';
import { useDispatch, useSelector } from 'react-redux';
import { addSubCategory } from '../redux/subCategoriesSlice';

const HealthCare = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const {isRefresh} = useSelector((state) => state.subCategories)
    const [categories, setCategories] = useState([])
    // console.log("categories", categories)
    
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const name = queryParams.get('name');

    const fetch = async () => {
        try {
            const { data, status } = await api.subCategories({ _id: params.id })

            if (status === 200) {
                setCategories(data.data)
            }
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetch();
    }, [isRefresh])


    const schema = yup.object().shape({
        name: yup.string().required("SubCategory name is required"),
    })
    const {
        errors,
        values,
        handleChange,
        touched,
        setFieldValue,
        handleBlur,
        handleSubmit,
        resetForm
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

    const updateSubject = async (values) => {
        dispatch(addSubCategory(values));
    }

    const handleStatus = (e) => {
        setFieldValue("status", e.target.checked)
    }
    

    return (
        <div style={{ padding: 20 }}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.categoryText}>{name}</h2>
                    </div>
                    <span className={styles.home}>
                        home
                        <img src='/tiangle.png' style={{ marginRight: 10, marginLeft: 10 }} />
                        Categories
                        <img src='/tiangle.png' style={{ marginLeft: 10 }} />
                        <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>
                            View SubCategories
                        </span>
                    </span>
                </div>
                <div className={Styles.buttonStyle}>
                    <div className={Styles.width}>
                        <div>
                            <GoBack />
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
                    <CategoriesList categories={categories} />
                </div>
                <div className={Styles.sideContainer}>
                    <div className={Styles.visibilityContainer}>
                        <div className={Styles.subcatText}>
                            Category Visibility
                        </div>
                        <div style={{marginTop:20}}>
                            <CustomizedSwitches
                                // handleChange={handleStatus}
                                onMessage={'Visible on site'}
                            />
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
                            {
                                errors.name && touched.name && <p style={{ color: "red", fontSize: "12px", textAlign: "left" }}>{errors.name}</p>
                            }
                        </form>
                        <div>
                            <CustomizedSwitches
                                handleChange={handleStatus}
                                onMessage={'Subcategory visible on site'}
                            />
                        </div>
                        <div className={styles.buttons}>
                            <Button sx={cancle} variant="contained">Cancel</Button>
                            <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthCare;