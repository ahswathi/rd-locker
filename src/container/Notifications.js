import React from 'react';
import Styles from '../component/Style.module.css';
import { Box, Modal } from '@mui/material';

const Notifications = ({open,onClose}) => {
    const notifData = [
        {
            id:0,
            online:'/onlineIcon.png',
            profile:'/profilepic.png',
            successNotif:'This is a success notification.',
            paymentDoneMsg:'@brianf Payment is done for the vendor',
            duration:'3 hours ago'
        },
        {
            id:1,
            online:'/onlineIcon.png',
            profile:'/profilepic.png',
            successNotif:'Dummy content',
            duration:'yesterday',
            decline:'Decline',
            accept:'Accept'
        },
        {
            id:2,
            profile:'/profilepic.png',
            successNotif:'This is a success notification.',
            paymentDoneMsg:'Dummy content added here',
            duration:'April 1 2024',
            view:'View'
        },
    ]
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
        width: '480px',
        borderRadius:'7px',
        "&:focus": {
          outline: "none",
        },
      };
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
        <Box sx={style}>
        <div className={Styles.notification}>
            <div className={Styles.notifText}>
                Notifications
            </div>
            <div onClick={onClose}>
                <img src='/cross.png'/>
            </div>
        </div>
        <div className={Styles.width} style={{marginTop:10}}>
            <img src='/BellSimple.png' style={{width:20,height:20,marginRight:10,marginTop:5}}/>
            <h6 className={Styles.dateText} style={{marginTop:5}}>
                All
            </h6>
            <div className={Styles.numberText}>
                12
            </div>
        </div>
        <div className={Styles.lineStyle}/>
        <div className={Styles.markAllRead}>
            <button className={Styles.viewStyle}>Mark All as Read</button>
        </div>
        {notifData.map((item) => {
            return (
                <div className={Styles.notifCard}>
                    <div className={Styles.menuStyle}>
                        <div className={Styles.width}>
                            <div>
                                <img src={item.online}/>
                            </div>
                            <div style={{marginLeft:10}}>
                                <img src={item.profile}/>
                            </div>
                            <div style={{marginLeft:10}}>
                                <p className={Styles.messageText}>
                                    {item.successNotif}
                                </p>
                                {item.paymentDoneMsg ? (
                                <div className={Styles.paymentBg}>
                                    <p className={Styles.messageText}>
                                        {item.paymentDoneMsg}
                                    </p>
                                </div>
                                ) : null}
                                
                                {item.decline && item.accept ? (
                                <div className={Styles.width} style={{marginTop:20,marginBottom:10}}>
                                    <div className={Styles.decline}>
                                        <img src='/cross.png' style={{height:15,width:15}}/>
                                        <p className={Styles.declineText}>
                                            {item.decline}
                                        </p>
                                    </div>
                                    <div className={Styles.accept}>
                                        <img src='/right.png' style={{height:15,width:15}}/>
                                        <p className={Styles.acceptText}>
                                            {item.accept}
                                        </p>
                                    </div>
                                </div>
                                ):null}
                                {item.view ? (
                                <div style={{marginBottom:10}}>
                                    <button className={Styles.viewStyle}>{item.view}</button>
                                </div>
                                ): null}
                                <div className={Styles.hourText}>
                                    {item.duration}
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src='/DotsThreeVertical.png'/>
                        </div>
                    </div>
                </div>
            )
        })}
    </Box>
    </Modal>
  )
}

export default Notifications;