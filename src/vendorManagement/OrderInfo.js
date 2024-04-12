import React from 'react';
import Styles from '../vendorManagement/vendor.module.css';
import { BegIcon, DropDownIcon, Timer } from '../Svg';
import AllOrdersCard from './AllOrdersCard';

const OrderInfo = () => {
  return (
    <div>
        <div className={Styles.orderBox}>
            <div className={Styles.orderCard}>
                    <div className={Styles.orderIcon}>
                        <BegIcon/>
                        <div className={Styles.allTimeText}>
                            All-time
                            <DropDownIcon/>
                        </div>
                    </div>
            <div className={Styles.orderIcon} style={{marginTop:10}}>
                <div>
                    <p className={Styles.orderText}>All Orders</p>
                    <h6 className={Styles.ammountText}>6</h6>
                </div>
                <div>
                    <p className={Styles.orderText}>Pending</p>
                    <h6 className={Styles.ammountText}>6</h6>
                </div>
                <div>
                    <p className={Styles.orderText}>Completed</p>
                    <h6 className={Styles.ammountText}>6</h6>
                </div>
                </div>
            </div>
            <div className={Styles.ammountCard}>
                    <div className={Styles.orderIcon}>
                        <Timer/>
                        <div className={Styles.allTimeText}>
                            All-time
                            <DropDownIcon/>
                        </div>
                    </div>
                    {/* <div className={Styles.orderIcon}> */}
                        <div style={{marginTop:20}}>
                            <p className={Styles.orderText}>Total Orders earning</p>
                            <p className={Styles.ammountText}>INR 5,000.00</p>
                        </div>
                    {/* </div> */}
            </div>
        </div>
        <div>
            <AllOrdersCard/>
        </div>
    </div>
  )
}

export default OrderInfo