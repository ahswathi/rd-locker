import React, { useEffect, useState } from 'react'
import { Plus, Search } from '../Svg';
import SwitchTab from '../component/SwitchTab';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import FreeVersion from './FreeVersion';
import GoldMembership from './GoldMembership';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { subscriptions } from '../redux/subscriptionSlice';
import { Popover } from '@mui/material';
import Filter from '../component/Filter';

const SubscriptionPlans = () => {
    const dispatch = useDispatch();
    const subscriptionData = useSelector(state => state.subscriptions.subscriptionData);
    const isRefresh = useSelector(state => state.subscriptions.isRefresh)
    // console.log('subscriptionData',subscriptionData);
    const navigate = useNavigate()
    const [value, setValue] = useState([
        { val: 'E-traveller plans', id: 0 },
        { val: 'Vendor plans', id: 1 },
        { val: 'Delivery agent plans', id: 2 },
    ]);
    const [selected, setSelected] = useState(1);
    const [search, setSearch] = useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    }, [])

    useEffect((value) => {
        dispatch(subscriptions())
    }, [dispatch, isRefresh])
    return (
        <div style={{ padding: 20 }}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.categoryText}>Subscription Plans</h2>
                    </div>
                    <span className={styles.home}>
                        home <img src='/tiangle.png' style={{ marginLeft: 10 }} /> <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>Subscription Plans</span>
                    </span>
                </div>
                <div className={styles.buttonStyle} onClick={() => navigate('/subscription/CreateSubcscriptionPlan')}>
                    <Plus />
                    <div className={styles.addcategoryText}>
                        Create Subscription
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div style={{ marginTop: 20 }}>
                    <SwitchTab
                        value={value}
                        selected={selected}
                        onChange={(id) => changeID(id)}
                    />
                </div>
                <div style={{ marginTop: 20 }}>
                    <div className={Styles.width}>
                        <div className={styles.search}>
                            <Search />
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search by name...' />
                        </div>
                        <div className={styles.filter} onClick={handleClick}>
                            <img src='/filter.png' /> <span>Filter</span>
                        </div>
                        <Popover
                            id={id}
                            open={open}
                            anchorEl={anchorEl}
                            onClose={handleClose}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                        >
                            <Filter
                                onClose={handleClose}
                            />
                        </Popover>
                    </div>
                </div>
            </div>
            {
                selected === 0 ? (
                    <div>
                        <FreeVersion
                            data={subscriptionData.filter((data) => data.role == 'CUSTOMER')}
                        />
                    </div>
                ) : selected === 1 ? (
                    <div>
                        <FreeVersion
                            data={subscriptionData.filter((data) => data.role == 'VENDOR')}
                        />
                    </div>
                ) : selected === 2 ? (
                    <div>
                        <FreeVersion
                            data={subscriptionData.filter((data) => data.role == 'DELIVERY_AGENT')}
                        />
                    </div>
                ) : null
            }

        </div>
    )
}

export default SubscriptionPlans