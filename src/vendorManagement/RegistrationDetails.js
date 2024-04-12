import React, { useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../vendorManagement/vendor.module.css';
import { Button } from '@mui/material';
import { useFormik } from 'formik';
import { accept, custom, delet, formselect, save } from '../MaterialUI';
import * as yup from "yup";
import ProfileCard from './ProfileCard';
import Modal from '../component/Modal';
import VendorRejection from './VendorRejection';

const RegistrationDetails = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const schema = yup.object().shape({
        name: yup.string().required("Name is required"),
      })
    const {
        handleSubmit,
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
                    <h2 className={styles.categoryText}>KYC Approvals</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10}}/> 
                    <span style={{marginLeft:10 }}>
                        KYC approvals
                    </span>
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Registration details
                    </span>
                </span>
            </div>
        </div>
        <div className={Styles.kycDetails}>
            <div className={Styles.kycText}>
                Deeksha KYC details
            </div>
            <div className={styles.buttons}>
                <div>
                    <Button sx={delet} onClick={openModal} variant="contained">Reject</Button>
                </div>
                <div>
                    <Button sx={accept} onClick={handleSubmit} variant="contained">Accept</Button>
                </div>
            </div>
        </div>
        <div>
            <ProfileCard/>
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <VendorRejection
              onClose={closeModal}
            />
        </Modal>
    </div>
  )
}

export default RegistrationDetails