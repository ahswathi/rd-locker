import React from 'react';
import Styles from '../vendorManagement/vendor.module.css'
import { Edit } from '../Svg';

const PrivacyPolicyCard = () => {
    const PolicyData = [
        {
            id:0,
            number:1,
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
        },
        {
            id:1,
            number:2,
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
        },
        {
            id:2,
            number:3,
            desc:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,'
        },
    ]
  return (
    <div className={Styles.privacyPolicyCard}>
        <div className={Styles.entryView}>
        <div className={Styles.kycText}>
            Privacy policy
        </div>
        <div>
            <Edit/>
        </div>
        </div>
        <div className={Styles.descText} style={{marginTop:20}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
        </div>
        <div className={Styles.noteStyle}>
            <h6>Note!</h6>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            </p>
        </div>
        <div className={Styles.borderBottom}/>
        <div className={Styles.startingPoint}>
            Starting Points
        </div>
        <div className={Styles.descText} style={{marginTop:20}}>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        </div>
        <div>
            {PolicyData.map((item,key) => {
                return (
                    <div className={Styles.orderBox} key={key} style={{marginTop:20}}>
                        <div className={Styles.numStyle}>
                            {item.number}
                        </div>
                        <div className={Styles.descText} style={{marginLeft:10}}>
                            {item.desc}
                        </div>
                    </div>
                )
            })}
        </div>
        <div className={Styles.borderBottom}/>
    </div>
  )
}

export default PrivacyPolicyCard