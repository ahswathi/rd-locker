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
            <div className={styles.col}>
                    <div className={styles.subtitle}>
                    Company
                    </div>
                    <div className={styles.title}>
                    Street Address <br/>
                    State, City <br/>
                    Region, Postal Code <br/>
                    Aradee@example.com <br/>
                    </div>
            </div>
            <div className={styles.col}>
                    <div className={styles.subtitle}>
                    Client
                    </div>
                    <div className={styles.title}>
                    Street Address <br/>
                    State, City <br/>
                    Region, Postal Code <br/>
                    ltd@example.com
                    </div>
            </div>
        </div>
        <div className={styles.row5}>
            <div className={styles.listContainer}>
                <div className={styles.info_head}>
                    <div className={styles.data1}>PRODUCT </div>
                    <div className={styles.data}>QNT </div>
                    <div className={styles.data}>UNIT</div>
                    <div className={styles.data}>AMOUNT </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.prod_details}>
                        <div>1</div>
                        <div className={styles.content}>
                            <div className={styles.title}>
                            Dummy content
                            </div>
                            <div className={styles.subtitle}>
                            Dummy content added here
                            </div>
                        </div>
                    </div>
                    <div className={styles.data}>1</div>
                    <div className={styles.data}>INR 1.800,00	</div>
                    <div className={styles.data}> INR 1.800,00 </div>
                </div>
        <hr className={styles.hline} />
                <div className={styles.info}>
                    <div className={styles.data1}></div>
                    <div className={styles.data}></div>
                    <div className={styles.bold}>Sub-Total	</div>
                    <div className={styles.data}> INR 1.800,00 </div>
                </div>
        <hr className={styles.hline} />
                <div className={styles.info}>
                    <div className={styles.data1}></div>
                    <div className={styles.data}></div>
                    <div className={styles.bold}>Vat Price	</div>
                    <div className={styles.data}> INR 1.800,00 </div>
                </div>
        <hr className={styles.hline} />
                <div className={styles.info}>
                    <div className={styles.data1}></div>
                    <div className={styles.data}></div>
                    <div className={styles.bold}>TOTAL AMOUNT</div>
                    <div className={styles.bold}> INR 1.800,00 </div>
                </div>
            </div>
        </div>


        <div className={styles.row6}>
        Thank you very much for doing business with us. We look forward to working with you again!
        </div>
    </div>
  )
}

export default Receipt