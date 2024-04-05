import React from 'react';
import Styles from '../sidebar/sidebar.module.css'
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ children }) => {
    const navigate = useNavigate();
  return (
    <div className={Styles.sideMenuBar}>
    <section className={Styles.left}>
    <div>
        logo
    </div>
    <div className={Styles.lineStyle}/>
    <div style={{marginTop:20}}>
        <p className={Styles.generalText}>
            General
        </p>
    </div>
    <div className={Styles.lineStyle}/>
    
    <div className={Styles.width} style={{marginTop:30}}>
        <img src='./dashbord.png' style={{width:18,height:15,}}/>
        <div onClick={() => navigate('/dashboard')} className={Styles.dashboardText}> 
           Dashboard 
        </div>
    </div>
    
    <div className={Styles.width} style={{marginTop:30}}>
        <img src='./categories.png' style={{width:18,height:15,}}/>
        <div onClick={() => navigate('/categories/Categories')} className={Styles.dashboardText}>
            Categories
        </div>
    </div>
    <div className={Styles.lineStyle}/>
    <div style={{marginTop:20}}>
        <p className={Styles.generalText}>
            User
        </p>
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./document-text.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Vendor Management
            </p>
        </div>
        <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3,}}/>
        </div>
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./document-text.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                E-traveler Management
            </p>
        </div>
        <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3,}}/>
        </div>
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./document-text.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Delivery Agent
            </p>
        </div>
        <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3}}/>
        </div>
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./profile-2user.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Admin Users
            </p>
        </div>
    </div>
    <div className={Styles.lineStyle}/>
    <div style={{marginTop:20}}>
        <p className={Styles.generalText}>
            Others
        </p>
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./report.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Reports
            </p>
        </div>
        <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3,}}/>
        </div>
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./subscription.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Subscription Plans
            </p>
        </div>
        {/* <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3,}}/>
        </div> */}
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./reward.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Rewards/Vouchers
            </p>
        </div>
        
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./techSupport.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Tech Support
            </p>
        </div>
        <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3}}/>
        </div>
    </div>
    <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='./Bullhorn.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Brand Partners
            </p>
        </div>
        {/* <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3}}/>
        </div> */}
    </div>
        
    </section>
        <div className={Styles.right}>
            {children}
        </div>
    </div>
  )
}

export default Sidebar