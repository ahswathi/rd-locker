import { Box, Modal } from '@mui/material'
import React from 'react'
import StylesView from '../voucher/voucher.module.css'
import techSupport from '../techSupport/techSupport.module.css'
import Styles from '../vendorManagement/vendor.module.css';
import { CancleIcon, MsgBox } from '../Svg';


const EnquiriesDetailsModal = ({open,onCloseModal}) => {
    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        bgcolor: "white",
        border: "none",
        padding: "15px 22px",
        height: 'fit-content',
        display: "block",
        width: '794px',
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
            <div className={techSupport.modalView}>
                <h3>Brand partner enquiry details</h3>
                <div onClick={onCloseModal}>
                    <CancleIcon/>
                </div>
            </div>
            <div>
                <MsgBox/>
            </div>
            <div className={Styles.identityCard}>
                <div className={Styles.infoCard} >
                    <p className={Styles.headText}>Date</p>
                    <p className={Styles.descText}>1 April 24, 10:30AM</p>
                </div>
                <div className={Styles.infoCard} style={{marginLeft:20}}>
                    <p className={Styles.headText}>Company name</p>
                    <p className={Styles.descText}>Company name</p>
                </div>
            </div>
            <div className={Styles.identityCard}>
                <div className={Styles.infoCard} >
                    <p className={Styles.headText}>Contact person</p>
                    <p className={Styles.descText}>Rahaul</p>
                </div>
                <div className={Styles.infoCard} style={{marginLeft:20}}>
                    <p className={Styles.headText}>Phone number</p>
                    <p className={Styles.descText}>+91-9876543210</p>
                </div>
            </div>
            <div className={Styles.identityCard}>
                <div className={Styles.infoCard} >
                    <p className={Styles.headText}>Email Id</p>
                    <p className={Styles.descText}>company@gmail.com</p>
                </div>
                <div className={Styles.infoCard} style={{marginLeft:20}}>
                    <p className={Styles.headText}>Advertise location</p>
                    <p className={Styles.descText}>Bangalore, Karnataka</p>
                </div>
            </div>
            <div className={Styles.addressCard} >
                <p className={Styles.headText}>
                    Message
                </p>
                <p className={Styles.descText}>
                    Dummy content added here as a description by the brand partner
                </p>
            </div>  
            <div className={Styles.addressCard} >
                <div className={techSupport.modalView}>
                <p className={Styles.headText}>Image</p>
                <div>
                    <img src='/phoneImage.png' height={150} width={250}/>
                </div>
                </div>
            </div>  
        </Box>
    </Modal>
  )
}

export default EnquiriesDetailsModal