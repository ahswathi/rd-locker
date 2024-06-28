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
                        <p className={Styles.dashboardText}>
                            Dashboard
                        </p>
                    </div>
                </div>
                <div onClick={() => navigate('/adminUsers/AdminUser')} className={path === 'adminUsers' ? `${Styles.width} ${Styles.active}` : Styles.width}>
                    <div>
                        {path === 'adminUsers' ? 
                            (
                                <MultiUserActive/>
                            ) : (
                                <MultiUser/>
                            )}
                        <p className={Styles.dashboardText}>
                             Users
                        </p>
                    </div>
                </div>

                
                <div className={Styles.lineStyle} />
                
              

            </section>
        </div>
    )
}

export default Sidebar