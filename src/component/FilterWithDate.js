import React, { useState } from 'react';
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { Button, MenuItem, Select } from '@mui/material';
import { useFormik } from 'formik';
import { Apply, Reset, formselect } from '../MaterialUI';
import * as yup from "yup";
import { CheckedBox, DropDownIcon, UnCheckedBox } from '../Svg';
import Calendar from 'react-calendar';


const FilterWithDate = ({onClose}) => {
    const [date, setDate] = useState(new Date());
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
      const calendarData = [
        [{
            id:0,
            name:'This Week'
        },
        {
            id:1,
            name:'This Month'
        },
        {
            id:2,
            name:'This Year'
        }],
        [{
            id:3,
            name:'Last Week'
        },
        {
            id:4,
            name:'Last Month'
        },
        {
            id:5,
            name:'Last Year'
        }],
      ]
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
            <label className={styles.desc}>Status</label>
            <br />
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
            </Select>
        </div>
        <div className={Styles.notifText} style={{marginTop:10}}>
            By Date
        </div>
        <div className={Styles.App}>
            {calendarData.map((item,key) => {
                return (
                <div>
                    {item?.map((card) => (
                        <div key={key} className={Styles.width} style={{marginTop:20,marginRight:20}}>
                            <CheckedBox/>
                            {/* <UnCheckedBox/> */}
                            <div className={Styles.weekText}>
                                {card.name}
                            </div>
                        </div>
                    ))}
                </div>
                )
            })
            }
        </div>
        <div className={Styles.lineStyle}/>
        <div className={Styles.width} style={{marginTop:20,marginRight:20}}>
            <CheckedBox/>
            {/* <UnCheckedBox/> */}
            <div className={Styles.weekText}>
                Date Range
            </div>
        </div>
        <div>
            <div className={Styles.dateRange}>
                <div className={Styles.from}>
                    From
                </div>
                <div className={Styles.toStyle}>
                    To
                </div>
            </div>
            <Calendar 
                onChange={setDate} 
                value={date} 
            />
        </div>
        <div className={Styles.buttonStyle}>
            <Button sx={Reset} onClick={handleSubmit} variant="contained">Reset</Button>
            <Button sx={Apply} onClick={handleSubmit} variant="contained">Apply</Button>
        </div>
    </div>
  )
}

export default FilterWithDate