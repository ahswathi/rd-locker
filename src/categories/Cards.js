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
    status,
    data
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
            <div>
            <div className={styles.cardImg}>
                <img src={image} height={50} width={50} />
            </div>
            <div className={styles.heading}>
                <h5>
                    {heading}
                </h5>
            </div>
            <div className={styles.subcategory} onClick={() => navigate(`/categories/view/${data._id}?name=${data.name}`)}>
                <h6>
                    7 Sub Categories
                </h6>
                <div className={styles.activeView}
                    style={{
                        backgroundColor: status === true ? "#1A98821A" : '#F439391A'
                    }}
                >
                    <span className={styles.activetext}
                        style={{
                            color: status === true ? '#1A9882' : '#F43939'
                        }}
                    >{status === true ? 'Active' : 'InActive'}</span>
                </div>
            </div>
            </div>
            {isHovered && (
                <div className={styles.icons}>
                    <div>
                        <View className={styles.icon} />
                    </div>
                    <div onClick={() => openEditModal(data)}>
                        <Edit className={styles.icon} />
                    </div>
                    <div onClick={() => openDeleteModal(data)}>
                        <Delete className={styles.icon} />
                    </div>
                </div>
            )}

        </div>
    )
}

export default Cards