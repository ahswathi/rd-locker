import React, { useState } from 'react'
import styles from '../subscription/subscription.module.css'
import { Checkcircle, Delete, Edit } from '../Svg'
import EditSubscriptionPlan from './EditSubscriptionPlan';
import DeleteCategory from '../categories/DeleteCategory';

const GoldMembership = () => {
    const [editSubscription, setEditSubscription] = useState(false);
    const openEditModal = () =>{
        setEditSubscription(true);
    }
    const cloaseEditModal = () => {
        setEditSubscription(false)
    }
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
    const openDeleteModal =() => {
        setIsDeleteModalOpen(true)
    }
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    }
    const data = [
        {
            id:0,
            description:'Unlimited posts with images'
        },
        {
            id:1,
            description:'Unlimited chat with vendors and delivery agents'
        },
        {
            id:2,
            description:'10% discount on audio and video calls with vendors(professionals)'
        },
        {
            id:3,
            description:'Free Audio & Video calls with delivery agents'
        },
    ]
  return (
    <div className={styles.container}>
        <div className={styles.freeVersion}>
            <h3>Gold Membership</h3>
            <p>Yearly Plan</p>
            <h1>INR 1999</h1>
        </div>
        <div className={styles.lineStyle} style={{marginTop:30}}/>
        {data.map((item,key) => {
            return (
                <div className={styles.descView} key={key} style={{marginTop:20}}>
                    <div>
                        <Checkcircle/>
                    </div>
                    <div className={styles.plansText}>
                        {item.description}
                    </div>
                </div>
            )
        })}
        
        <div className={styles.lineStyle} style={{marginTop:15}}/>
        <div className={styles.itemView}>
            <div onClick={openEditModal}>
                <Edit/>
            </div>
            <div style={{marginLeft:15}} onClick={openDeleteModal}>
                <Delete/>
            </div>
        </div>
        <EditSubscriptionPlan
            open={editSubscription}
            onCloseModal={cloaseEditModal}
        />
        <DeleteCategory
            closeModal={closeDeleteModal} 
            open={isDeleteModalOpen}
        />
    </div>
  )
}

export default GoldMembership