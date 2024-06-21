import React, { useEffect, useState } from 'react'
import SwitchTab from '../component/SwitchTab';
import { Search } from '../Svg';
import VendorsCard from '../vendorManagement/VendorsCard';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import ETravelerCard from './ETravelerProfileCard';
import { Popover } from '@mui/material';
import Filter from '../component/Filter';

const ETravellerProfile = () => {
    const [value, setValue] = useState([
        { val: 'All E-traveller', id: 0 },
        { val: 'Trash', id: 1 },
    ]);
    const [selected, setSelected] = useState(0);
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
                        <h2 className={styles.categoryText}>E-traveller Profiles</h2>
                    </div>
                    <span className={styles.home}>
                        home <img src='/tiangle.png' style={{ marginLeft: 10 }} /> <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>All E-traveller</span>
                    </span>
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
            <div>
                {selected === 0 ? (
                    <ETravelerCard />
                ) : (selected === 1 ? (
                    <VendorsCard />
                ) : <VendorsCard />)
                }
            </div>
        </div>
    )
}

export default ETravellerProfile