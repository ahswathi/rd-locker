import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import SwitchTab from '../component/SwitchTab';
import { Search } from '../Svg';
import VendorsCard from './VendorsCard';
import Filter from '../component/Filter';
import { Modal, Popover } from '@mui/material';
import style from '../vendorManagement/vendor.module.css'
import AllVendors from './AllVendors';
import { useNavigate } from 'react-router-dom';


const VendorsProfile = () => {
    const navigate = useNavigate();  
    //state
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [value, setValue] = useState([
        { val: 'All vendors', id: 0 },
        { val: 'My entry', id: 1 },
        { val: 'Blocked vendors', id: 2 },
        { val: 'Trash', id: 3 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('')

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
    },[])
  return (
    <div style={{padding:20}}>
        <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.categoryText}>Vendors Profile</h2>
                </div>
                <span className={styles.home}>
                    home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>All vendors</span>
                </span>
            </div>
            <div className={styles.buttonStyle} onClick={() => navigate('/vendorManagement/VendorsProfile/AddNewVendor')}>
                <div className={Styles.width}>
                    <img src='/plus.png' style={{width:16,height:16}}/>
                    <div className={styles.addcategoryText}>
                        Add Vendor
                    </div>
                </div>
                
            </div>
        </div>
        <div className={styles.container}>
            <div style={{marginTop:20}}>
                <SwitchTab 
                    value={value}
                    selected={selected}
                    onChange={(id) => changeID(id)}
                />
            </div>
            <div style={{marginTop:20}}>
                <div className={Styles.width}>
                    <div className={styles.search}>
                        <Search /> 
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search by name...' />
                    </div>
                    <div className={styles.filter} onClick={handleClick}>
                        <img src='/filter.png'/> <span>Filter</span>
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
            <AllVendors/>
            ) : (selected === 2 ? (
                <VendorsCard/>
            ) : <VendorsCard/>) 
            }
        </div>
    </div>
  )
}

export default VendorsProfile