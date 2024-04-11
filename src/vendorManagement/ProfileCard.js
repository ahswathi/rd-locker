import React from 'react';
import Styles from '../vendorManagement/vendor.module.css';

const ProfileCard = () => {
    const kycDetail = [
        {
            id:0,
            img:'/Image.png',
            identity:'Aadhar Card',
        },
        {
            id:1,
            img:'/Image1.png',
            identity:'Pan Card',
        },
        {
            id:2,
            img:'/Image2.png',
            identity:'KYC Video',
        },
    ]
  return (
    <div className={Styles.profileCard}>
        <div>
            <div className={Styles.profileContainer}>
                <div className={Styles.bgimg}>
                    <img src='/BackgroundImage.png'/>
                </div>
                <div className={Styles.imgStyle}>
                    <img src='/Avatar.png'/>
                </div>
                <div className={Styles.kycText} style={{marginTop:10}}>
                   Deeksha
                </div>
                <div className={Styles.textCate}>
                    Healthcare (MBBS)
                </div>
            </div>
            <div className={Styles.profileContainer} style={{marginTop:20}}>
                <div className={Styles.kycText} style={{marginTop:10,textAlign:'left'}}>
                    KYC documents
                </div>
                <div className={Styles.textCate} style={{marginTop:10,textAlign:'left'}}>
                    Here are the documents added by the vendor during KYC
                </div>
                {kycDetail.map((item,key)=> {
                    return (
                        <div className={Styles.imgCard} key={key}>
                            <img src={item.img}/>
                            <div style={{marginLeft:30,justifyContent:'center',alignContent:'center'}}>
                                <p className={Styles.identityText}>{item.identity}</p>
                                <p className={Styles.imgaeText}>Image: <span>View Image</span></p>
                            </div>
                        </div>
                    )
                })}
                
            </div>
        </div>
        <div className={Styles.profileContainer}>
                <div className={Styles.kycText} style={{marginTop:10,textAlign:'left'}}>
                    KYC documents
                </div>
                <div className={Styles.textCate} style={{marginTop:10,textAlign:'left'}}>
                    Here are the documents added by the vendor during KYC
                </div>
                
                <div className={Styles.identityCard}>
                    <div className={Styles.infoCard} >
                        <p className={Styles.headText}>Phone number</p>
                        <p className={Styles.descText}>+91-9876543210</p>
                    </div>
                    <div className={Styles.infoCard} style={{marginLeft:20}}>
                        <p className={Styles.headText}>Email Id</p>
                        <p className={Styles.descText}>deeksha@gmail.com</p>
                    </div>
                </div>
                <div className={Styles.addressCard} >
                    <p className={Styles.headText}>
                        Location
                    </p>
                    <p className={Styles.descText}>
                        Kalyan nagar, Bangalore, Karnataka, India
                    </p>
                </div>    
                <div className={Styles.addressCard} >
                    <p className={Styles.headText}>
                        Category
                    </p>
                    <p className={Styles.descText}>
                        Healthcare (MBBS)
                    </p>
                </div> 
                <div className={Styles.identityCard}>
                    <div className={Styles.infoCard} >
                        <p className={Styles.headText}>Password</p>
                        <p className={Styles.descText}>*********</p>
                    </div>
                    <div className={Styles.infoCard} style={{marginLeft:20}}>
                        <p className={Styles.headText}>Languages</p>
                        <p className={Styles.descText}>English, Spanish, Italian</p>
                    </div>
                </div> 
                <div className={Styles.addressCard} >
                    <p className={Styles.headText}>
                        Bio
                    </p>
                    <p className={Styles.descText}>
                        Dummy content has been added here
                    </p>
                </div> 
                <div className={Styles.identityCard}>
                    <div className={Styles.infoCard} >
                        <p className={Styles.headText}>Audio consulation charges</p>
                        <p className={Styles.descText}>INR 250</p>
                    </div>
                    <div className={Styles.infoCard} style={{marginLeft:20}}>
                        <p className={Styles.headText}>Video consulation charges</p>
                        <p className={Styles.descText}>INR 250</p>
                    </div>
                </div>   
            </div>
    </div>
  )
}

export default ProfileCard