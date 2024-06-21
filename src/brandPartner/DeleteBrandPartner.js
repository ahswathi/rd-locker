import React, { useEffect } from 'react';
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import { Box, Button, Modal } from '@mui/material';
import { useFormik } from 'formik';
import { custom, delet } from '../MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBrandPartner } from '../redux/brandPartnerSlice';

const DeleteBrandPartner = ({
    closeModal,
    open,
    heading,
    data,
}) => {
    const dispatch = useDispatch();
    const isRefresh = useSelector((state) => state.brandPartner.isRefresh)
    const {
        handleSubmit,
        setValues
      } = useFormik({
        
        onSubmit: (values) => {
          updateSubject(values);
        }
      })

      useEffect(() => {
        if (data) {
          setValues(data)
        }
      },[data,isRefresh])

      const updateSubject = async (values) =>{
        dispatch(deleteBrandPartner(values))
        closeModal();
      }

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
        width: '380px',
        borderRadius:'7px',
        "&:focus": {
          outline: "none",
        },
      };
  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={Styles.notification}>
            <div className={Styles.notifText}>
                Delete Selected Data
            </div>
            <div onClick={closeModal}>
                <img src='/cross.png'/>
            </div>
        </div>
        <div className={styles.desc}>
            Are you sure you want to delete the selected data?
        </div>
        <div className={styles.buttons}>
            <Button sx={custom}  variant="contained" onClick={closeModal}>Cancel</Button>
            <Button sx={delet} onClick={handleSubmit} variant="contained">Delete</Button>
        </div>
    </Box>
    </Modal>
  )
}

export default DeleteBrandPartner;