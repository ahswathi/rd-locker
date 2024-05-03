import React, { useEffect } from 'react'
// import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import { BlackCheckBox, BlackUnCheckBox, DropDownIcon} from '../Svg';
import Button from '@mui/material/Button';
import { custom, formselect, save } from '../MaterialUI';
import Styles from '../subscription/subscription.module.css'
import { Box, MenuItem, Modal, Select } from '@mui/material';
import CustomizedCheckbox from '../component/CustomizedCheckbox';
import { useDispatch, useSelector } from 'react-redux';
import { editSubscription } from '../redux/subscriptionSlice';

const EditSubscriptionPlan = ({
    onCloseModal,
    open,
    data
}) => {
    // console.log('selecteddata',data);
    const dispatch = useDispatch();
    
    const schema = yup.object().shape({
        price: yup.string().required("price is required"),
        planDuration: yup.string().required("planDuration is required"),
        role: yup.string().required("role is required"),
        planType: yup.string().required("planType is required"),
        status: yup.string().required("status is required"),
      })
    const {
        errors,
        values,
        handleChange,
        touched,
        setValues,
        handleBlur,
        handleSubmit,
        setFieldValue,
      } = useFormik({
        initialValues: {
            planDuration: "",
            role: "",
            planType: "",
            price: 0,
            status: true,
            features: {
                maxChat: 0,
                maxPost: 0,
                unlimitedChat:true,
                audioCall:true,
                videoCall:true
            }
        },
        validationSchema: schema,
        onSubmit: (values) => {
          updateSubject(values);
        }
      })
      console.log('value===================',values);
      const handlePost = (e) => {
        setFieldValue('maxPost',e.target.value)
      }
      const handleUnlimitedChat = (e) => {
        setFieldValue('unlimitedChat',e.target.checked)
      }
      const handleMessage = (e) => {
        setFieldValue('maxChat',e.target.value)
      }
      const handleAudioCall = (e) => {
        setFieldValue('audioCall',e.target.checked)
      }
      const handleVideoCall = (e) => {
        setFieldValue('videoCall',e.target.checked)
      }

      useEffect(() => {
        if (data) {
          setValues(data)
        }
      },[data])

      const updateSubject = async (values) =>{
        dispatch(editSubscription(values))
      }

      const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        border: "none",
        padding: "10px 22px",
        height: '600px',
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
        <p className={Styles.headingText}>Edit Subscription Plan</p>
            <div className={Styles.descView}>
                <div style={{marginTop:10}}>
                        <label className={styles.label}>Subscription Plan*</label>
                        <br />
                        <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='planDuration' 
                            value={values.planDuration}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="YEARLY">Yearly</MenuItem>
                            {/* <MenuItem value="Monthly">Monthly</MenuItem> */}
                        </Select>
                        </div>
                </div>
                <div style={{marginTop:10,marginLeft:20}}>
                        <label className={styles.label}>Select role</label>
                        <br />
                        <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='role' 
                            value={values.role}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="CUSTOMER">E-travellers</MenuItem>
                            <MenuItem value="VENDOR">Vendors</MenuItem>
                            <MenuItem value="DELIVERY_AGENT">Delivery Agents</MenuItem>
                        </Select>
                        </div>
                </div>
            </div>
            <div className={Styles.descView}>
                <div style={{marginTop:10}}>
                    <label className={styles.label}>Subscription Type</label>
                    <br />
                    <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='planType' 
                            value={values.planType}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Select</MenuItem>
                            <MenuItem value="FREE">Free Version</MenuItem>
                            <MenuItem value="GOLD">GoldMembership</MenuItem>
                        </Select>
                    </div>
                </div>
                <div style={{marginTop:10,marginLeft:20}}>
                    <label className={Styles.label}>Pricing</label>
                    <div className={Styles.inputbox}>
                    <div className={Styles.inrBox}>
                        INR
                    </div>
                    <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.price} name='price' onChange={handleChange} />
                    </div>
                    {
                    errors.price && touched.price && <p style={{ color: "red", fontSize: "12px" }}>{errors.price}</p>
                    }
                </div>
            </div>
            <div style={{marginTop:10,}}>
                    <label className={styles.label}>Plan Status</label>
                    <br />
                    <div className={Styles.width}>
                        <Select className={Styles.formselects}
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            sx={formselect}
                            IconComponent={DropDownIcon}
                            displayEmpty
                            defaultValue=''
                            name='status' value={values.status}
                            onChange={handleChange}
                        >
                            <MenuItem value="">Status</MenuItem>
                            <MenuItem value={true}>Active</MenuItem>
                            <MenuItem value={false}>Inactive</MenuItem>
                        </Select>
                    </div>
            </div>
            <div className={Styles.planText}>
                Plan includes
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <CustomizedCheckbox 
                        handleCheck={handlePost}
                        checked={values.features.maxPost}
                    />
                    <div className={Styles.maxText}>Max</div>
                    <div>
                    <Select className={Styles.selectPicker}
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        sx={formselect}
                        IconComponent={DropDownIcon}
                        displayEmpty
                        defaultValue=''
                        name='features.maxPost' 
                        value={values.features.maxPost}
                        onChange={handleChange}
                    >
                        <MenuItem value={0}>50</MenuItem>
                        <MenuItem value={100}>100</MenuItem>
                        <MenuItem value={200}>200</MenuItem>
                        <MenuItem value={300}>300</MenuItem>
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
                    <CustomizedCheckbox
                        handleCheck={handleUnlimitedChat}
                        checked={values.features.unlimitedChat}
                    />
                    <div className={Styles.maxText}>
                        Unlimited chat with vendors and delivery agents
                    </div>
                    </div>
                    <div className={Styles.descView}>
                        <CustomizedCheckbox
                          handleCheck={handleMessage}
                          checked={values.features.maxChat}
                        />
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
                                name='features.maxChat' 
                                value={values.features.maxChat}
                                onChange={handleChange}
                            >
                                <MenuItem value={0}>50</MenuItem>
                                <MenuItem value={100}>100</MenuItem>
                                <MenuItem value={200}>200</MenuItem>
                                <MenuItem value={300}>300</MenuItem>
                            </Select>
                        </div>
                        <div className={Styles.maxText} style={{marginLeft:15}}>
                            messages
                        </div>
                   
                    </div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <CustomizedCheckbox
                        handleCheck={handleAudioCall}
                        checked={values.features.audioCall}
                    />
                    <div className={Styles.maxText}>Audio call</div>
                </div>
            </div>
            <div className={Styles.maxViewBox}>
                <div className={Styles.descView}>
                    <CustomizedCheckbox
                        handleCheck={handleVideoCall}
                        checked={values.features.videoCall}
                    />
                    <div className={Styles.maxText}>Video call</div>
                </div>
            </div>
            <div className={styles.buttons} style={{marginTop:20}}>
                <div>
                    <Button sx={custom} variant="contained" onClick={onCloseModal}>Cancle</Button>
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