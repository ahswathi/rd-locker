import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import SwitchTab from '../component/SwitchTab';
import { Search } from '../Svg';
import VendorsCard from './VendorsCard';
import Filter from '../component/Filter';
import { Modal } from '@mui/material';
import style from '../vendorManagement/vendor.module.css'
import AllVendors from './AllVendors';


const VendorsProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const [value, setValue] = useState([
        { val: 'All vendors', id: 0 },
        { val: 'My entry', id: 1 },
        { val: 'Blocked vendors', id: 2 },
        { val: 'Trash', id: 3 },
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
                    <h2 className={styles.categoryText}>Vendors Profile</h2>
                </div>
                <span className={styles.home}>
                    home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>All vendors</span>
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
            <div>
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
                    <div className={styles.filter} onClick={openModal}>
                        <img src='/filter.png'/> <span>Filter</span>
                    </div>
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
        
        <Modal
            open={isModalOpen}
            onClose={closeModal}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className={style.modalOverLay}>
            <Filter
              onClose={closeModal}
            //   onOpen={isModalOpen}
            />
            </div>
        </Modal>
        </div>
  )
}

export default VendorsProfile