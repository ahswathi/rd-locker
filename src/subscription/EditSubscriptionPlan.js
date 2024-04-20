import React from 'react'
// import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import { BlackCheckBox, BlackUnCheckBox, DropDownIcon} from '../Svg';
import Button from '@mui/material/Button';
import { custom, formselect, save } from '../MaterialUI';
import Styles from '../subscription/subscription.module.css'
import { Box, MenuItem, Modal, Select } from '@mui/material';

const EditSubscriptionPlan = ({
    onCloseModal,
    open
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
        width: '1000px',
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
        <p className={Styles.headingText}>Add New Subscription Plan</p>
            <div className={Styles.descView}>
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Subscription Plan*</label>
                        <br />
                        <Select className={Styles.formselect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                        <label className={styles.label}>Select role</label>
                        <br />
                        <Select className={Styles.formselect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                </div>
            </div>
            <div className={Styles.descView}>
                <div style={{marginTop:20}}>
                        <label className={styles.label}>Subscription Type</label>
                        <br />
                        <Select className={Styles.formselect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
                </div>
                <div style={{marginTop:20,marginLeft:20}}>
                    <label className={Styles.label}>Pricing</label>
                    <div className={Styles.inputbox}>
                    <div className={Styles.inrBox}>
                        INR
                    </div>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.password} name='password' onChange={handleChange} />
                    </div>
                    {
                    errors.password && touched.password && <p style={{ color: "red", fontSize: "12px" }}>{errors.password}</p>
                    }
                </div>
            </div>
            <div style={{marginTop:20,}}>
                        <label className={styles.label}>Plan Status</label>
                        <br />
                        <Select className={Styles.formselect}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='Select' value={values.Select}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="ACTIVE">Active</MenuItem>
                            <MenuItem value="INACTIVE">Inactive</MenuItem>
                        </Select>
            </div>
            <div className={Styles.planText}>
                Plan includes
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <div><BlackCheckBox/></div>
                    <div className={Styles.maxText}>Max</div>
                    <div>
                    <Select className={Styles.selectPicker}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={formselect}
                        IconComponent={DropDownIcon}
                        displayEmpty
                        defaultValue=''
                        name='5' value={values.value}
                        onChange={handleChange}
                    >
                        <MenuItem value="">5</MenuItem>
                        <MenuItem value="10">10</MenuItem>
                        <MenuItem value="15">15</MenuItem>
                        <MenuItem value="20">20</MenuItem>
                    </Select>
                    </div>
                    <div className={Styles.maxText} style={{marginLeft:20}}>
                        posts (without image)
                    </div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.checkBoxView}>
                <div className={Styles.descView}>
                    <div><BlackCheckBox/></div>
                    <div className={Styles.maxText}>
                        Unlimited chat with vendors and delivery agents
                    </div>
                    </div>
                    <div className={Styles.descView}>
                        <div >
                            <BlackUnCheckBox/>
                        </div>
                        <div className={Styles.maxText}>
                            Limited to 
                        </div>
                        <div>
                            <Select className={Styles.selectPicker}
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                sx={formselect}
                                IconComponent={DropDownIcon}
                                displayEmpty
                                defaultValue=''
                                name='5' value={values.value}
                                onChange={handleChange}
                            >
                                <MenuItem value="">5</MenuItem>
                                <MenuItem value="10">10</MenuItem>
                                <MenuItem value="15">15</MenuItem>
                                <MenuItem value="20">20</MenuItem>
                            </Select>
                        </div>
                        <div className={Styles.maxText}>
                            messages
                        </div>
                   
                    </div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <div><BlackUnCheckBox/></div>
                    <div className={Styles.maxText}>Audio call</div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <div><BlackUnCheckBox/></div>
                    <div className={Styles.maxText}>Video call</div>
                </div>
            </div>
            <div className={styles.buttons} style={{marginTop:20}}>
                <div>
                    <Button sx={custom} variant="contained">Cancle</Button>
                </div>
                <div>
                    <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
                </div>
            </div>
        </Box>
    </Modal>
  )
}

export default EditSubscriptionPlan;