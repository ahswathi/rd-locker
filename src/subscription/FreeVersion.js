import React, { useState } from 'react'
import styles from '../subscription/subscription.module.css'
import { Checkcircle, Delete, Edit } from '../Svg'
import EditSubscriptionPlan from './EditSubscriptionPlan'
import Styles from '../component/Style.module.css';
import DeleteSubscription from './DeleteSubscription'

const FreeVersion = ({data = []}) => {
    console.log('data===============',data);
    const [editData,setEditData] = useState(null)
    const [editSubscription, setEditSubscription] = useState(false);
    const openEditModal = (data) =>{
        setEditData(data)
        setEditSubscription(true);
    }
    const cloaseEditModal = () => {
        setEditSubscription(false)
    }
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
    const openDeleteModal =(data) => {
        setEditData(data)
        setIsDeleteModalOpen(true)
    }
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    }
  return (
    <div className={Styles.width}>
    { data?.map((item,key) => {
        return (
            <div className={styles.container} key={key}>
                <div className={styles.freeVersion}>
                    <h3>{item?.planType}</h3>
                    <p>{item?.planDuration}</p>
                    <h1>INR {item?.price}</h1>
                </div>
                <div className={styles.lineStyle} style={{marginTop:30}}/>
                <div className={styles.descView} style={{marginTop:20}}>
                    <Checkcircle/>
                    <div className={styles.descText}>
                        Max {item.features?.maxPost} posts (without image)
                    </div>
                </div>
                <div className={styles.descView} style={{marginTop:20}}>
                <Checkcircle/>
                    <div className={styles.plansText}>
                        {item.features?.maxChat} chat with vendors and delivery agents
                    </div>
                </div>
                <div className={styles.descView} style={{marginTop:20}}>
                    <Checkcircle/>
                    {item.features?.audioCall === false ? (
                        <div className={styles.audioText}>
                            Audio call
                        </div>
                    ) : 
                        <div className={styles.activeAudioText}>
                            10% discount on audio and video calls with vendors
                        </div>
                    }
                </div>
                <div className={styles.descView} style={{marginTop:20}}>
                    <Checkcircle/>
                    {item.features?.audioCall === false ? (
                        <div className={styles.audioText}>
                            Video call
                        </div>
                    ) : 
                        <div className={styles.activeAudioText}>
                            Free Audio & Video calls with delivery agents
                        </div>
                    }
                </div>
                <div className={styles.lineStyle} style={{marginTop:50}}/>
                <div className={styles.itemView}>
                    <div onClick={() => openEditModal(item)}>
                        <Edit/>
                    </div>
                    <div style={{marginLeft:15}} onClick={() => openDeleteModal(item)}>
                        <Delete/>
                    </div>
                </div>
                <EditSubscriptionPlan
                    open={editSubscription}
                    onCloseModal={cloaseEditModal}
                    data={editData}
                />
                <DeleteSubscription
                    closeModal={closeDeleteModal} 
                    open={isDeleteModalOpen}
                    data={editData}
                />
            </div>
        )
    })
    
    }
    </div>
  )
}

export default FreeVersion