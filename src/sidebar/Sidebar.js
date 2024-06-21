import React, { useEffect, useState } from 'react';
import Styles from '../sidebar/sidebar.module.css'
import { useLocation, useNavigate } from 'react-router-dom';
import { ActiveDoccument, Brand, BrandActive, Categories, CategoriesActive, Dashboard, DashboardActive, Document, DocumentActive, DropDown, DropUp, MultiUser, MultiUserActive, Report, ReportActive, Reward, RewardActive, Subscription, SubscriptionActive, Support, SupportActive } from '../Svg';

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
                <div className={Styles.logo}>
                    logo
                </div>
                <div className={Styles.lineStyle} style={{ marginTop: 10 }} />
                <div className={Styles.main_title}>
                    <p className={Styles.generalText}>
                        General
                    </p>
                </div>
                <div className={Styles.lineStyle} />

                <div onClick={() => navigate('/dashboard')} className={path === 'dashboard' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {
                            path === "" ?
                                <DashboardActive />
                                :
                                <Dashboard />
                        }
                        <div className={Styles.dashboardText}>
                            Dashboard
                        </div>
                    </div>
                </div>

                <div onClick={() => navigate('/categories/Categories')} className={path === 'categories' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {
                            path === "categories" ?
                                <CategoriesActive />
                                :
                                <Categories />
                        }
                        <div className={Styles.dashboardText}>
                            Categories
                        </div>
                    </div>
                </div>
                <div className={Styles.lineStyle} />
                <div className={Styles.main_title}>
                    <p className={Styles.generalText}>
                        User
                    </p>
                </div>
                <div onClick={() => navigate('/vendorManagement/KYCApproval')} className={path === 'vendorManagement' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'vendorManagement' ?
                            (
                                <DocumentActive />
                            )
                            :
                            <Document />
                        }
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
                            <div onClick={() => navigate('/vendorManagement/KYCApproval')} className={subpath === 'KYCApproval' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical} style={{ top: "-5px", height: 30 }}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                KYC Approvals
                            </div>
                            <div onClick={() => navigate('/vendorManagement/VendorsProfile')} className={subpath === 'VendorsProfile' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                Vendors profile
                            </div>
                            <div onClick={() => navigate('/vendorManagement/PrivacyPolicy')} className={subpath === 'PrivacyPolicy' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                Privacy policy
                            </div>
                        </div> : ''
                }
                <div onClick={() => navigate('/eTravelerManagement/ETravellerProfile')} className={path === 'eTravelerManagement' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'eTravelerManagement' ?
                            (
                                <DocumentActive />
                            )
                            :
                            <Document />
                        }
                        <p className={Styles.dashboardText}>
                            E-Traveller Management
                        </p>
                    </div>
                    {path === 'eTravelerManagement' ? (
                        <div>
                            <DropDown />
                        </div>
                    ) : <DropUp />}
                </div>
                {
                    path === 'eTravelerManagement' ?
                        <div className={Styles.subpaths}>
                            <div onClick={() => navigate('/eTravelerManagement/ETravellerProfile')} className={subpath === 'ETravellerProfile' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical} style={{ top: "-5px", height: 30 }}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                ETraveller Profile
                            </div>
                        </div> : ''
                }
                
                <div onClick={() => navigate('/deliveryAgent/KYCApprovals')} className={path === 'deliveryAgent' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'deliveryAgent' ?
                            (
                                <DocumentActive />
                            )
                            :
                            <Document />
                        }
                        <p className={Styles.dashboardText}>
                            Delivery Agent
                        </p>
                    </div>
                    {path === 'deliveryAgent' ? (
                        <div>
                            <DropDown />
                        </div>
                    ) : <DropUp />}
                </div>
                {
                    path === 'deliveryAgent' ?
                        <div className={Styles.subpaths}>
                            <div onClick={() => navigate('/deliveryAgent/KYCApprovals')} className={subpath === 'KYCApprovals' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical} style={{ top: "-5px", height: 30 }}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                KYC Approvals
                            </div>
                            <div onClick={() => navigate('/deliveryAgent/DeliveryAgentProfile')} className={subpath === 'DeliveryAgentProfile' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                Agent Profile
                            </div>
                        </div> : ''
                }
                <div onClick={() => navigate('/adminUsers/AdminUser')} className={path === 'adminUsers' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'adminUsers' ? 
                            (
                                <MultiUserActive/>
                            ) : (
                                <MultiUser/>
                            )}
                        <p className={Styles.dashboardText}>
                            Admin Users
                        </p>
                    </div>
                </div>
                <div className={Styles.lineStyle} />
                <div className={Styles.main_title}>
                    <p className={Styles.generalText}>
                        Others
                    </p>
                </div>
                <div onClick={() => navigate('/reports/accounts')} className={path === 'reports' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'reports' ? (
                            <ReportActive />
                        ) : <Report />}
                        <p className={Styles.dashboardText}>
                            Reports
                        </p>
                    </div>
                    {path === 'report' ? (
                        <DropDown />
                    ) : <DropUp />}
                </div>
                {
                    path === 'reports' ?
                        <div className={Styles.subpaths}>
                            <div onClick={() => navigate('/reports/accounts')} className={subpath === 'accounts' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical} style={{ top: "-5px", height: 30 }}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                Accounts
                            </div>
                            <div onClick={() => navigate('/reports/transactions')} className={subpath === 'transactions' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                Transactions
                            </div>
                            {/*  <div onClick={() => navigate('/receipt')} className={subpath === 'receipt' ? Styles.submenu : ''}>Receipt</div> */}
                        </div> : ''
                }


                <div onClick={() => navigate('/subscription/SubscriptionPlans')} className={path === 'subscription' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                    {path === 'subscription' ? 
                            (
                                <SubscriptionActive/>
                            ) : (
                                <Subscription/>
                            )}
                        <p className={Styles.dashboardText}>
                            Subscription Plans
                        </p>
                    </div>
                </div>

                <div onClick={() => navigate('/voucher/Voucher')} className={path === 'voucher' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'voucher' ? (
                            <RewardActive /> 
                        ):(
                            <Reward /> 
                        )}
                        <p className={Styles.dashboardText}>
                            Rewards/Vouchers
                        </p>
                    </div>
                </div>

                <div onClick={() => navigate('/techSupport/Messages')} className={path === 'techSupport' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'techSupport'? (
                            <SupportActive />
                        ) : (
                            <Support /> 
                        )}
                        <p className={Styles.dashboardText}>
                            Tech Support
                        </p>
                    </div>
                    {path === 'techSupport' ? (
                        <DropDown />
                    ) : <DropUp />}
                </div>
                {
                    path === 'techSupport' ?
                        <div className={Styles.subpaths}>
                            <div onClick={() => navigate('/techSupport/Messages')} className={subpath === 'Messages' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical} style={{ top: "-5px", height: 30 }}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                Messages
                            </div>
                            <div onClick={() => navigate('/techSupport/Enquiries')} className={subpath === 'Enquiries' ? Styles.submenu : Styles.menuText}>
                                <div className={Styles.lines}>
                                    <span className={Styles.vertical}></span>
                                    <span className={Styles.horizontal}></span>
                                </div>
                                Enquiries
                            </div>
                        </div> : ''
                }
                
                <div onClick={() => navigate('/brandPartner/BrandPartner')} className={path === 'brandPartner' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'brandPartner' ? (
                            <BrandActive />
                        ): <Brand />
                        }
                        <p className={Styles.dashboardText}>
                            Brand Partners
                        </p>
                    </div>
                </div>
                {/* <div>
            <img src='./forwardIcon.png' style={{width:4,height:9,marginBottom:3}}/>
        </div> */}

            </section>
        </div>
    )
}

export default Sidebar