import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import SwitchTab from '../component/SwitchTab';
import { Search } from '../Svg';
import Modal from '../component/Modal';
import DeleteCategory from '../categories/DeleteCategory';
import VendorsCard from './VendorsCard';

const KYCApproval = () => {

    
    const [value, setValue] = useState([
        { val: 'Accepted vendors', id: 0 },
        { val: 'Rejected vendors', id: 1 },
        { val: 'New requests', id: 2 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('')
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
                    <h2 className={styles.categoryText}>KYC Approvals</h2>
                </div>
                <span className={styles.home}>
                    home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>KYC approvals</span>
                </span>
            </div>
            <div className={styles.buttonStyle}>
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
                    <div className={styles.filter}>
                        <img src='/filter.png'/> <span>Filter</span>
                    </div>
                </div>
            </div>
        </div>
        <div>
            {selected === 0 ? (
            <VendorsCard/>
            ) : (selected === 1 ? (
                <VendorsCard/>
            ) : <VendorsCard/>) 
            }
        </div>
    </div>
  )
}

export default KYCApproval