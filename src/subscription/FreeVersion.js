import React, { useState } from 'react'
import styles from '../subscription/subscription.module.css'
import { Checkcircle, Delete, Edit } from '../Svg'
import EditSubscriptionPlan from './EditSubscriptionPlan'
import DeleteCategory from '../categories/DeleteCategory'

const FreeVersion = () => {
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
  return (
    <div className={styles.container}>
        <div className={styles.freeVersion}>
            <h3>Free Version</h3>
            <p>Yearly Plan</p>
            <h1>INR 0</h1>
        </div>
        <div className={styles.lineStyle} style={{marginTop:30}}/>
        <div className={styles.descView} style={{marginTop:20}}>
            <div>
                <Checkcircle/>
            </div>
            <div className={styles.descText}>
                Max 5 posts (without image)
            </div>
        </div>
        <div className={styles.descView} style={{marginTop:20}}>
            <div>
                <Checkcircle/>
            </div>
            <div className={styles.plansText}>
                Unlimited chat with vendors and delivery agents
            </div>
        </div>
        <div className={styles.descView} style={{marginTop:20}}>
            <div>
                <Checkcircle/>
            </div>
            <div className={styles.audioText}>
                Audio call
            </div>
        </div>
        <div className={styles.descView} style={{marginTop:20}}>
            <div>
                <Checkcircle/>
            </div>
            <div className={styles.audioText}>
                Video call
            </div>
        </div>
        <div className={styles.lineStyle} style={{marginTop:50}}/>
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

export default FreeVersion