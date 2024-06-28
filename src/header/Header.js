import React, { useState } from 'react';
import Styles from '../header/header.module.css';
import { useNavigate } from 'react-router-dom';
import Modal from '../component/Modal';
import Notifications from '../container/Notifications';
import { ArrowDown, Notification, Setting } from '../Svg';

const Header = ({ children }) => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    return (
        <div className={Styles.wrapper}>
            <div className={Styles.headermenu}>
                <div>
                    <p className={Styles.welcome}>
                        Welcome!
                    </p>
                </div>
                <div>
                    <div className={Styles.menuStyle}>
                        
                        <div>
                            <img src='/profilepic.png' />
                        </div>
                        <div style={{ paddingTop: 5, paddingLeft: 5 }}>
                            <p className={Styles.userName}>
                                Emay Walter
                            </p>
                            <div className={Styles.width}>
                                <p className={Styles.admin}>
                                    Admin
                                </p>
                                <ArrowDown />
                            </div>
                        </div>
                    </div>
                </div>
                    <Notifications 
                        open={isModalOpen}
                        onClose={closeModal}
                    />
            </div>
            <div className={Styles.main}>
                {children}
            </div>
        </div>
    )
}

export default Header