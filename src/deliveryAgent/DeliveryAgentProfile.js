import React, { useEffect, useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../vendorManagement/vendor.module.css';
import { useFormik } from 'formik';
import * as yup from "yup";
import Modal from '../component/Modal';
import SwitchTab from '../component/SwitchTab';
import { BlockToggle, ToggleButton, ToggleButton1 } from '../Svg';
import { useLocation } from 'react-router-dom';
import ProfileCard from '../vendorManagement/ProfileCard';
import OrderInfo from '../vendorManagement/OrderInfo';
import VendorRejection from '../vendorManagement/VendorRejection';

const DeliveryAgentProfile = () => {
    const location = useLocation();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [value, setValue] = useState([
        { val: 'Profile Info', id: 0 },
        { val: 'Orders Info', id: 1 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('');
    const [toggleButton, setToggleButton] = useState('')
    const toggleBlock = location.pathname.split('/')[1];
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    },[])
    useEffect(() => {
        setToggleButton(toggleBlock)
    }, [toggleBlock])

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
                    <h2 className={styles.categoryText}>Delivery agent Profile</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10,marginRight:10}}/> 
                        All agents
                    <img src='/tiangle.png' style={{marginLeft:10}}/>
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Profile Details
                    </span>
                </span>
            </div>
        </div>
        <div className={Styles.kycDetails}>
            <div className={Styles.kycText}>
                Deeksha KYC details
            </div>
            <div>
                <SwitchTab
                    value={value}
                    selected={selected}
                    onChange={(id) => changeID(id)}
                />
            </div>
            <div className={styles.buttons}>
                <div className={Styles.blockText}>
                    Block
                </div>
                <div style={{marginLeft:10}}>
                    {toggleButton ? (
                        <div onClick={openModal}>
                            <ToggleButton1/>
                        </div>
                    ) : 
                        <div >
                            <BlockToggle/>
                        </div>
                    }
                </div>
            </div>
        </div>
        <div>
            {selected === 0 ? (
            <ProfileCard/>
            ) : <OrderInfo/>}
        </div>
        <Modal isOpen={isModalOpen} onClose={closeModal}>
            <VendorRejection
              onClose={closeModal}
              heading={'Block Delivery agent'}
              label={'Reason for Blocking'}
            />
        </Modal>
    </div>
  )
}

export default DeliveryAgentProfile