import React from 'react'
import { AlertIcon, DropDownIcon, GoBack, Image, LocationIcon, Upload } from '../Svg'
import { useNavigate } from 'react-router-dom';
import styles from '../categories/category.module.css';
import style from '../healthcare/healthcare.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import Styles from '../subscription/subscription.module.css'
import brandStyle from '../brandPartner/brand.module.css'
import { Button, MenuItem, Select } from '@mui/material';
import { custom, formselect, save } from '../MaterialUI';
import VendorStyles from '../vendorManagement/vendor.module.css';
import StylesView from '../voucher/voucher.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import api from '../helper/Api';
import { addBrandPartner } from '../redux/brandPartnerSlice';

const AddNewVoucher = () => {
  const dispatch = useDispatch();
  const { selectCategory } = useSelector(state => state.brandPartner)

  const schema = yup.object().shape({
    email: yup.string().matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, "Please enter valid email").required("Please enter valid email"),
    companyName: yup.string().required("companyName is required"),
    price: yup.string().required("price is required"),
    targetLocation: yup.array().required("location is required"),
    code: yup.string().required("code is required"),
  })

  const {
    errors, values, handleChange, touched, setFieldValue, handleBlur, handleSubmit,
  } = useFormik({
    initialValues: {
      email: "",
      companyName: "",
      price: "",
      targetLocation: [],
      contentType: "",
      startDate: "",
      endDate: "",
      code: "",
      assets: [],
      callToAction: {
        type: "BUTTON",
        text: "https://instagram.com"
      }

    },
    validationSchema: schema,
    onSubmit: (values) => {
      updateSubject(values);
    }
  })
  const updateSubject = async (values) => {
    dispatch(addBrandPartner({ ...values, category: selectCategory }))
  }
  const navigate = useNavigate();
  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {

      const body = new FormData()
      body.set('image', file)
      const { data, status } = await api.fileUpload(body)
      if (status === 200) {
        setFieldValue("assets", data.data)
      }
    }
  };
  return (
    <div style={{ padding: 20 }}>
      <div className={styles.container}>
        <div>
          <div>
            <h2 className={styles.categoryText}>Brand Partners</h2>
          </div>
          <span className={styles.home}>
            home
            <img src='/tiangle.png' style={{ marginLeft: 10, marginRight: 10 }} />
            Brand Partners
            <img src='/tiangle.png' style={{ marginLeft: 10 }} />
            <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>
              Add new voucher
            </span>
          </span>
        </div>
        <div className={style.buttonStyle} onClick={() => navigate('/brandPartner/BrandPartner')}>
          <div className={style.width}>
            <div>
              <GoBack />
            </div>
            <div className={style.backText}>
              Back
            </div>
          </div>
        </div>
      </div>
      <div className={styles.listContainer}>
        <div className={styles.subcatText}>
          {selectCategory === 'BRAND_PARTNER' ? 'Add Brand Partner' : 'Add Voucher'}
        </div>
        <div className={styles.container}>
          <div>
            <div style={{ marginTop: 20 }}>
              <label className={styles.label}>Company Name</label>
              <br />
              <div className={Styles.inputbox}>
                <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.companyName} name='companyName' onChange={handleChange} />
              </div>
              {
                errors.companyName && touched.companyName && <p style={{ color: "red", fontSize: "12px" }}>{errors.companyName}</p>
              }
            </div>
            <div style={{ marginTop: 20 }}>
              <label className={styles.label}>Contact Email id</label>
              <br />
              <div className={Styles.inputbox}>
                <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.email} name='email' onChange={handleChange} />
              </div>
              {
                errors.email && touched.email && <p style={{ color: "red", fontSize: "12px" }}>{errors.email}</p>
              }
            </div>
            <div style={{ marginTop: 20 }}>
              <label className={styles.label}>Voucher Price</label>
              <br />

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
            <div className={brandStyle.labelText} style={{ marginTop: 20 }}>
              Media Content
              <div style={{ marginTop: 5, marginLeft: 5 }}>
                <AlertIcon />
              </div>
            </div>
            <div className={Styles.width}>
              <Select className={Styles.formselects}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={formselect}
                IconComponent={DropDownIcon}
                displayEmpty
                defaultValue='Image'
                name='contentType'
                value={values.contentType}
                onChange={handleChange}
              >
                <MenuItem value="">Select Media Content</MenuItem>
                <MenuItem value="IMAGE">Image</MenuItem>
                <MenuItem value="VIDEO">Video</MenuItem>
              </Select>
            </div>
            <div style={{ marginTop: 20 }}>
              <label className={Styles.label}>Image</label>
              <div className={VendorStyles.imageUpload}>
                <div className={VendorStyles.imageView}>
                  {values?.assets?.length > 0 ? (
                    <div>
                      <img
                        src={values.assets[0]}
                        alt="Selected"
                        style={{ maxWidth: '100%', marginTop: '0px' }}
                      />
                    </div>
                  ) : (
                    <Image />
                  )
                  }
                  <div>
                    <label htmlFor='catFile' className={VendorStyles.uploadBox}><Upload /> <p className={VendorStyles.uploadText}>Upload Image</p></label>
                    <input type='file' accept="image/*" id='catFile' style={{ display: 'none' }} onChange={handleImageChange} value={values.catFile} />
                  </div>
                  <div className={VendorStyles.pixel}>
                    Image size : 0px by 0px in .jpg or .png format
                  </div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <label className={styles.label}>Search for location</label>
              <br />

              <div className={Styles.inputbox}>
                <div className={Styles.inrBox}>
                  <LocationIcon />
                </div>
                <input type="text" placeholder='Enter the location to target audience' onBlur={handleBlur} value={values.targetLocation[0]} name='targetLocation' onChange={(e) => setFieldValue('targetLocation', [e.target.value])} />
              </div>
              {
                errors.targetLocation && touched.targetLocation && <p style={{ color: "red", fontSize: "12px" }}>{errors.targetLocation}</p>
              }
            </div>
            <div>
              <p className={StylesView.headingText1}>Promotional details</p>
              <p className={styles.home} style={{ marginTop: 6 }}>Type of Voucher you want to create</p>
            </div>
            <div style={{ marginTop: 20 }}>
              <label className={styles.label}>Coupon Code <span className={brandStyle.digitText}>(6 digits code)</span></label>
              <br />
              <div className={Styles.inputbox}>
                <input type="text" placeholder='Enter' onBlur={handleBlur} value={values.code} name='code' onChange={handleChange} />
              </div>
              {
                errors.code && touched.code && <p style={{ color: "red", fontSize: "12px" }}>{errors.code}</p>
              }
            </div>

          </div>
          <div className={brandStyle.bannerStyle}>
            <h4>Voucher Banner Preview</h4>
            <img src='/Mask.png' />
          </div>
        </div>
        <div className={Styles.viewStyle} style={{ marginTop: 20 }}>
          <div style={{ marginTop: 5 }}>
            <label className={styles.label}>Publish Start Date</label>
            <br />
            <div className={StylesView.calendarBox}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: 470 }}
                  style={{ width: 300 }}
                  onChange={(val) => setFieldValue("startDate", val.$d)}
                />
              </LocalizationProvider>
            </div>
          </div>
          <div style={{ marginTop: 5, }}>
            <label className={styles.label}>End Date</label>
            <br />
            <div className={StylesView.calendarBox}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: 470 }}
                  onChange={(val) => setFieldValue("endDate", val.$d)}
                />
              </LocalizationProvider>
            </div>

          </div>
        </div>
        {selectCategory === 'BRAND_PARTNER' ? (
          <>
            <div className={brandStyle.labelText} style={{ marginTop: 20 }}>
              Call To Option
              <div className={brandStyle.optional}>
                Optional
              </div>
              <div style={{ marginTop: 5, marginLeft: 5 }}>
                <AlertIcon />
              </div>
            </div>
            <div className={Styles.width} style={{ marginTop: 5 }}>
              <Select className={Styles.formselects}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={formselect}
                IconComponent={DropDownIcon}
                displayEmpty
                defaultValue='Image'
                name='contentType'
                value={values.contentType}
                onChange={handleChange}
              >
                <MenuItem value="">Select</MenuItem>
                <MenuItem value="IMAGE">Image</MenuItem>
                <MenuItem value="VIDEO">Video</MenuItem>
              </Select>
            </div>
            <div className={brandStyle.buttonView} style={{ marginTop: 20 }}>
              <div className={brandStyle.buttonStyle}>
                Button Text
              </div>
              <div className={Styles.inputbox} style={{ marginLeft: 20 }}>
                <div className={brandStyle.httpBox}>
                  https://
                </div>
                <input type='url' placeholder='Enter' onBlur={handleBlur} value={values.callToAction.text} name='text' onChange={handleChange} />
              </div>
            </div>
          </>
        ) : null
        }
        <div className={styles.buttons} style={{ marginTop: 20 }}>
          <div>
            <Button sx={custom} variant="contained">Cancle</Button>
          </div>
          <div>
            <Button sx={save} onClick={handleSubmit} variant="contained">Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AddNewVoucher