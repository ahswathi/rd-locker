import React, { useState } from 'react';
import styles from '../categories/category.module.css';
import { Delete, Edit, View } from '../Svg';
import { useNavigate } from 'react-router-dom';

const Cards = ({
    image,
    heading,
    subCategory,
    openEditModal,
    openDeleteModal,
    status
}) => {
    const navigate = useNavigate();
    //State
    const [isHovered, setIsHovered] = useState(false);
    
    
  return (
    <div  
        className={styles.card}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
    >
        <div className={styles.cardImg}>
            <img src={image} height={50} width={50}/>
        </div>
        <div className={styles.heading}>
            <h5>
                {heading}
            </h5>
        </div>
        <div className={styles.subcategory} onClick={() => navigate('/healthcare/HealthCare')}>
            <h6>
                7 Sub Categories
            </h6>
            <div className={styles.activeView}>
                <span className={styles.activetext}>{status}</span>
            </div>
        </div>
        {isHovered && (
            <div className={styles.icons}>
                <View className={styles.icon} />
                <div onClick={openEditModal}>
                <Edit className={styles.icon} />
                </div>
                <div onClick={openDeleteModal}>
                <Delete className={styles.icon} />
                </div>
            </div>
        )}
        
    </div>
  )
}

export default Cards