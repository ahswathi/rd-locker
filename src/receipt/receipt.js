import React from 'react'
import styles from '../receipt/receipt.module.css'
import { Export } from '../Svg'

const Receipt = () => {
  return (
    <div className={styles.container}>
        <div className={styles.row1}>
            <img src='logo.png' />
        </div>

        <div className={styles.row2}>
            <div className={styles.row2}>
                Hello Charles Hall, <br/>
                This is the receipt for a payment of INR 268.00 you made to Relik - Admin Dashboard Demo.
            </div>
            <div className={styles.row3}>
                    <div className={styles.export}>
                        <Export/> <span>Download</span>
                    </div>
                    <div className={styles.export}>
                        <Export/> <span>Export</span>
                    </div>
            </div>
        </div>
        <div className={styles.row3}>
            <div className={styles.col}>
                    <div className={styles.title}>
                    Payment No.
                    </div>
                    <div className={styles.subtitle}>
                    ABC123
                    </div>
            </div>
            <div className={styles.col}>
                    <div className={styles.title}>
                    Payment date
                    </div>
                    <div className={styles.subtitle}>
                    October 2, 2021 - 03:45 pm
                    </div>
            </div>
        </div>
        <hr className={styles.hline} />

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