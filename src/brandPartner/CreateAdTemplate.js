import { Box, Button, Modal } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Brand, BrandActive, CancleIcon, Reward, RewardActive } from '../Svg'
import Styles from '../component/Style.module.css';
import brandStyle from '../brandPartner/brand.module.css';
import { custom, save } from '../MaterialUI';
import styles from '../categories/category.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory } from '../redux/brandPartnerSlice';

const CreateAdTemplate = ({ open, onCloseModal }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { selectCategory } = useSelector(state => state.brandPartner)
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
        width: '445px',
        borderRadius: '7px',
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
                <div className={Styles.notification}>
                    <div className={Styles.notifText}>
                        Create Ad template
                    </div>
                    <div onClick={onCloseModal}>
                        <CancleIcon />
                    </div>
                </div>
                <div className={Styles.name} style={{ marginTop: 20 }}>
                    Category
                </div>
                <div className={Styles.width} style={{ marginTop: 10 }}>
                    <div className={
                        selectCategory === 'BRAND_PARTNER'
                            ? brandStyle.activeBrandView
                            : brandStyle.brandView
                    }
                        onClick={() => dispatch(setCategory('BRAND_PARTNER'))}
                    >
                        {selectCategory === 'BRAND_PARTNER' ? (
                            <BrandActive />
                        ) :
                            <Brand />
                        }
                        <div className={
                            selectCategory === 'BRAND_PARTNER'
                                ? brandStyle.activeText
                                : brandStyle.inActiveText
                        }>
                            Brand Partners
                        </div>
                    </div>
                    <div className={
                        selectCategory === 'VOUCHER'
                            ? brandStyle.activeBrandView
                            : brandStyle.brandView}
                        onClick={() => dispatch(setCategory('VOUCHER'))}
                    >
                        {selectCategory === 'VOUCHER' ? (
                            <RewardActive />
                        ) : (
                            <Reward />
                        )
                        }
                        <div className={selectCategory === 'VOUCHER'
                            ? brandStyle.activeText
                            : brandStyle.inActiveText}>
                            Vouchers
                        </div>
                    </div>
                </div>
                <div className={styles.buttons} style={{ marginTop: 20 }}>
                    <div>
                        <Button sx={custom} variant="contained" onClick={onCloseModal}>Cancle</Button>
                    </div>
                    <div>
                        <Button sx={save} variant="contained" onClick={() => navigate('/brandPartner/AddNewVoucher')}>Next</Button>
                    </div>
                </div>
            </Box>
        </Modal>
    )
}

export default CreateAdTemplate