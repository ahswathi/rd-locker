import React, { useEffect, useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../userManagement/user.module.css';
import { Contact, Customerid, Customerinfo, Email, Phone, Plan, Profile, Subscription, Subscriptioninfo } from '../Svg';


const ProfileDetails = () => {


    return (
        <div style={{ padding: 20 }}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.categoryText}>Vendors Profile</h2>
                    </div>
                    <span className={styles.home}>
                        Home
                        <img src='/tiangle.png' style={{ marginLeft: 10, marginRight: 10 }} />
                        Users
                        <img src='/tiangle.png' style={{ marginLeft: 10 }} />
                        <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>
                            User details
                        </span>
                    </span>
                </div>
            </div>
            <div className={Styles.kycDetails}>
                <div className={Styles.kycText}>
                    Jay Hadgunson
                </div>

                <div className={styles.buttons}>
                    <div className={Styles.blockText}>
                        Block Customer
                    </div>
                </div>
            </div>

            <div className={Styles.profileCard}>
                <div className={Styles.bottomContainer} style={{ marginRight: 20 }}>
                    <div className={Styles.profileContainer}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '10px 20px '
                        }}><Customerinfo />
                            <p>Customer Info</p>
                        </div>
                        <hr />
                        <div className={Styles.identityCard}>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Customerid />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Customer ID</p>
                                    <p className={Styles.descText}>Customer ID</p>
                                </div>
                            </div>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Profile />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Customer</p>
                                    <p className={Styles.descText}>Jay Hadgunson</p>
                                </div>
                            </div>
                            <div className={styles.buttons}>
                                <div className={Styles.blockText}>
                                    Block Customer
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={Styles.profileContainer}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '10px 20px '
                        }}><Contact />
                            <p>Contact</p></div>
                        <hr />
                        <div className={Styles.identityCard}>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Email />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Email</p>
                                    <p className={Styles.descText}>jay.hadgunson@mail.com</p>
                                </div>
                            </div>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Phone />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Phone number</p>
                                    <p className={Styles.descText}>+91-9876543210</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={Styles.bottomContainer} style={{ marginRight: 20 }}>
                    <div className={Styles.profileContainer}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '10px 20px '
                        }}><Subscriptioninfo />
                            <p>Subscription</p></div>
                        <hr />
                        <div className={Styles.identityCard}>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Plan />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Premium plan</p>
                                    <p className={Styles.descText}>Expiry date 12/07/24</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={Styles.profileContainer}>
                        <div style={{
                            display: 'flex', alignItems: 'center', gap: 10,
                            padding: '10px 20px '
                        }}><Customerinfo />
                            <p>Nominee Info</p></div>
                        <hr />
                        <div className={Styles.identityCard}>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Customerid />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Relation</p>
                                    <p className={Styles.descText}>Wife</p>
                                </div>
                            </div>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Profile />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Nominee name</p>
                                    <p className={Styles.descText}>Divya</p>
                                </div>
                            </div>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Email />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Email</p>
                                    <p className={Styles.descText}>divya@mail.com</p>
                                </div>
                            </div>
                            <div className={Styles.infoCard} >
                                <div>
                                    <Phone />
                                </div>
                                <div>
                                    <p className={Styles.headText}>Phone number</p>
                                    <p className={Styles.descText}>+91-9876543210</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileDetails