import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import SwitchTab from '../component/SwitchTab';
import { Plus, Search } from '../Svg';
import VendorsCard from '../vendorManagement/VendorsCard';
import DeliveryAgentCard from './DeliveryAgentCard';
import AcceptedAgentCard from './AcceptedAgentCard';
import RejectedAgentCard from './RejectedAgentCard';
import { Popover } from '@mui/material';
import Filter from '../component/Filter';

const KYCApprovals = () => {


    const [value, setValue] = useState([
        { val: 'Accepted agents', id: 0 },
        { val: 'Rejected asgents', id: 1 },
        { val: 'New requests', id: 2 },
    ]);
    const [selected, setSelected] = useState(2);
    const [search, setSearch] = useState('')
    const [anchorEl, setAnchorEl] = React.useState(null);
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    }, [])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div style={{ padding: 20 }}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.categoryText}>KYC Approvals</h2>
                    </div>
                    <span className={styles.home}>
                        home <img src='/tiangle.png' style={{ marginLeft: 10 }} /> <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>KYC approvals</span>
                    </span>
                </div>
                {/* <div className={styles.buttonStyle}>
                    <Plus/>
                    <div className={styles.addcategoryText}>
                        Add Vendor
                    </div>
            </div> */}
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
            <div>
                {selected === 2 ? (
                    <DeliveryAgentCard />
                ) : (selected === 0 ? (
                    <AcceptedAgentCard />
                ) : <RejectedAgentCard />)
                }
            </div>
        </div>
    )
}

export default KYCApprovals;