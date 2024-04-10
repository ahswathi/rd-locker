import React, { useState } from 'react';
import Styles from '../header/header.module.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../component/Modal';
import Notifications from '../container/Notifications';

const Header = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
  return (
        <div className={Styles.headermenu}>
            <div>
                <p className={Styles.welcome}>
                    welcome!
                </p>
            </div>
            <div>
                <div className={Styles.menuStyle}>
                    <div style={{marginRight:20,marginTop:5}} >
                        <img src='/setting.png'/>
                    </div>
                    <div style={{marginRight:10,marginTop:5}} onClick={openModal}>
                        <img src='/notification.png'/>
                    </div>
                    <div>
                        <img src='/profilepic.png'/>
                    </div>
                    <div style={{paddingTop:5,paddingLeft:5}}>
                        <p className={Styles.userName}>
                            Emay Walter
                        </p>
                        <div className={Styles.width}>
                            <p className={Styles.admin}>
                                Admin
                            </p>
                            <img src='/drop.png' style={{width:8,height:4,marginLeft:5,marginTop:5}}/>
                        </div>
                    </div>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <Notifications/>
            </Modal>
        </div>
       
  )
}

export default Header