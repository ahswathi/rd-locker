import React, { useEffect, useState } from 'react';
import Styles from '../sidebar/sidebar.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { ActiveDoccument, Doccument, DropDown, DropUp, Report } from '../Svg';

const Sidebar = ({ children }) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [path, setPath] = useState('');
    const [subpath, setSubpath] = useState('');
    const pathname = location.pathname.split('/')[1];
    const subpathname = location.pathname.split('/')[2];



    
    useEffect(() => {
        setPath(pathname)
        setSubpath(subpathname)
    }, [pathname, subpathname])

    return (
        <div className={Styles.sideMenuBar}>
            <section className={Styles.left}>
                <div>
                    logo
                </div>
                <div className={Styles.lineStyle} />
                <div style={{ marginTop: 20 }}>
                    <p className={Styles.generalText}>
                        General
                    </p>
                </div>
                <div className={Styles.lineStyle} />

                <div className={Styles.width} style={{ marginTop: 30 }}>
                    <img src='/dashbord.png' style={{ width: 18, height: 15, }} />
                    <div onClick={() => navigate('/')} className={Styles.dashboardText}>
                        Dashboard
                    </div>
                </div>

                <div className={Styles.width} style={{ marginTop: 30 }}>
                    <img src='/categories.png' style={{ width: 18, height: 15, }} />
                    <div onClick={() => navigate('/categories/Categories')} className={Styles.dashboardText}>
                        Categories
                    </div>
                </div>
                <div className={Styles.lineStyle} />
                <div style={{ marginTop: 20,marginBottom:20 }}>
                    <p className={Styles.generalText}>
                        User
                    </p>
                </div>
                <div className={path === 'vendorManagement' ? `${Styles.menuActive}` : `${Styles.menuStyle}`} onClick={() => navigate('/vendorManagement')}>
                    <div className={Styles.width}>
                        {path === 'vendorManagement' ? (
                            <ActiveDoccument />
                        ) : <Doccument />}
                        <p className={Styles.dashboardText}>
                            Vendor Management
                        </p>
                    </div>
                    {path === 'vendorManagement' ? (
                        <div>
                            <DropDown />
                        </div>
                    ) : <DropUp />}

                </div>
                {
                    path === 'vendorManagement' ?
                        <div className={Styles.subpaths}>
                            <div onClick={() => navigate('/vendorManagement/KYCApproval')} className={subpath === 'KYCApproval' ? Styles.submenu : Styles.menuText}>KYC Approvals</div>
                            <div onClick={() => navigate('/vendorManagement/VendorsProfile')} className={subpath === 'VendorsProfile' ? Styles.submenu : Styles.menuText}>Vendors profile</div>
                            <div onClick={() => navigate('/vendorManagement/PrivacyPolicy')} className={subpath === 'PrivacyPolicy' ? Styles.submenu : Styles.menuText}>Privacy policy</div>
                        </div> : ''
                }
                <div className={Styles.menuStyle} style={{ marginTop: 30 }}>
                    <div className={Styles.width}>
                        <img src='/document-text.png' style={{ width: 18, height: 15, }} />
                        <p className={Styles.dashboardText}>
                            E-traveler Management
                        </p>
                    </div>
                    <div>
                        <DropUp />
                    </div>
                </div>
                <div className={Styles.menuStyle} style={{ marginTop: 30 }}>
                    <div className={Styles.width}>
                        <img src='/document-text.png' style={{ width: 18, height: 15, }} />
                        <p className={Styles.dashboardText}>
                            Delivery Agent
                        </p>
                    </div>
                    <div>
                        <DropUp />
                    </div>
                </div>
                <div className={Styles.menuStyle} style={{ marginTop: 30 }}>
                    <div className={Styles.width}>
                        <img src='/profile-2user.png' style={{ width: 18, height: 15, }} />
                        <p className={Styles.dashboardText}>
                            Admin Users
                        </p>
                    </div>
                </div>
                <div className={Styles.lineStyle} />
                <div style={{ marginTop: 20 }}>
                    <p className={Styles.generalText}>
                        Others
                    </p>
                </div>
                {/* <div className={Styles.menuStyle} style={{marginTop:30}}>
        <div className={Styles.width}>
            <img src='/report.png' style={{width:18,height:15,}}/>
            <p className={Styles.dashboardText}>
                Reports
            </p>
        </div>
        <div>
            <DropUp/>
        </div>
    </div> */}
                <div className={path === 'report' ? `${Styles.menuActive}` : `${Styles.menuStyle}`} style={{ marginTop: 30 }} onClick={() => navigate('/report')}>
                    <div className={Styles.width}>
                        {path === 'report' ? (
                            <Report />
                        ) : <Doccument />}
                        <p className={Styles.dashboardText}>
                            Reports
                        </p>
                    </div>
                    {path === 'report' ? (
                        <DropDown />
                    ) : <DropUp />}

                </div>
                {
                    path === 'report' ?
                        <div className={Styles.subpaths}>
                            <div onClick={() => navigate('/accounts')} className={subpath === 'accounts' ? Styles.submenu : ''}>Accounts</div>
                            <div onClick={() => navigate('/transactions')} className={subpath === 'transactions' ? Styles.submenu : ''}>Transactions</div>
                           {/*  <div onClick={() => navigate('/receipt')} className={subpath === 'receipt' ? Styles.submenu : ''}>Receipt</div> */}
                       </div> : ''
                }


                <div className={Styles.menuStyle} style={{ marginTop: 30 }}>
                    <div className={Styles.width}>
                        <img src='/subscription.png' style={{ width: 18, height: 15, }} />
                        <p className={Styles.dashboardText}>
                            Subscription Plans
                        </p>
                    </div>
                    {/* <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3,}}/>
        </div> */}
                </div>
                <div className={Styles.menuStyle} style={{ marginTop: 30 }}>
                    <div className={Styles.width}>
                        <img src='/reward.png' style={{ width: 18, height: 15, }} />
                        <p className={Styles.dashboardText}>
                            Rewards/Vouchers
                        </p>
                    </div>

                </div>
                <div className={Styles.menuStyle} style={{ marginTop: 30 }}>
                    <div className={Styles.width}>
                        <img src='/techSupport.png' style={{ width: 18, height: 15, }} />
                        <p className={Styles.dashboardText}>
                            Tech Support
                        </p>
                    </div>
                    <div>
                        <DropUp />
                    </div>
                </div>
                <div className={Styles.menuStyle} style={{ marginTop: 30 }}>
                    <div className={Styles.width}>
                        <img src='/Bullhorn.png' style={{ width: 18, height: 15, }} />
                        <p className={Styles.dashboardText}>
                            Brand Partners
                        </p>
                    </div>
                    {/* <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3}}/>
        </div> */}
                </div>

            </section>
        </div>
    )
}

export default Sidebar