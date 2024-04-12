import React from 'react'
import styles from '../receipt/receipt.module.css'

const Receipt = () => {
  return (
    <div>
        <div className={styles.row1}>
            <img src='logo.png' />
        </div>
        <div className={styles.row2}>
            <div className={styles.row2}>
            Hello Charles Hall, <br/>
This is the receipt for a payment of INR 268.00 you made to Relik - Admin Dashboard Demo.
            </div>
        </div>
        <div className={styles.row3}>
            
        </div>
        <div className={styles.row4}>
            
        </div>
        <div className={styles.row5}>
            
        </div>
        <div className={styles.row6}>
            
        </div>
    </div>
  )
}

export default Receipt