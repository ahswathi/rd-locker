import React from 'react';
import Styles from '../component/Style.module.css';

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className={Styles.modaloverlay} onClick={onClose}>
            <div className={Styles.modalcontent} onClick={(e) => e.stopPropagation()}>
                {children}
                {/* <button onClick={onClose}>Close</button> */}
            </div>
        </div>
    );
};

export default Modal;
