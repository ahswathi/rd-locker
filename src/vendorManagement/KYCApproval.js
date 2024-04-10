import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import SwitchTab from '../component/SwitchTab';
import { Search } from '../Svg';
import Cards from '../categories/Cards';
import { useNavigate } from 'react-router-dom';
import Modal from '../component/Modal';
import DeleteCategory from '../categories/DeleteCategory';
import CategoriesRequestList from '../categories/CategoriesRequestList';

const KYCApproval = () => {
    const data = [
        {
            id:0,
            image:'/healthcare.png',
            heading: 'Healthcare',
            subCategory:'7 subcategories'
        },
        {
            id:1,
            image:'/lawyer.png',
            heading: 'Lawyers',
            subCategory:'7 subcategories'
        },
        {
            id:2,
            image:'/etraveleguid.png',
            heading: 'E-traveller Guide',
            subCategory:'7 subcategories'
        },
        {
            id:3,
            image:'/securityagency.png',
            heading: 'Security Agency',
            subCategory:'7 subcategories'
        },
        {
            id:4,
            image:'/technicalservice.png',
            heading: 'Technical Services',
            subCategory:'7 subcategories'
        },
        {
            id:5,
            image:'/astrologer.png',
            heading: 'Astrologer',
            subCategory:'7 subcategories'
        },
        {
            id:6,
            image:'/chef.png',
            heading: 'Chef',
            subCategory:'7 subcategories'
        },
        {
            id:7,
            image:'/spiritual.png',
            heading: 'Spirutual',
            subCategory:'7 subcategories'
        },
        {
            id:8,
            image:'/photographer.png',
            heading: 'Photographers',
            subCategory:'7 subcategories'
        },
        {
            id:9,
            image:'/financeadvisor.png',
            heading: 'Finance Advisor',
            subCategory:'7 subcategories'
        },
    ]
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const openEditModal = () => {
        setIsEditModalOpen(true)
    }
    const openDeleteModal = () => {
        setIsDeleteModalOpen(true)
    }
    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false)
    }

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    
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
        setSelected(data)
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
            <div className={styles.buttonStyle} onClick={openModal}>
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
                    <div className={styles.filter}>
                        <img src='/filter.png'/> <span>Filter</span>
                    </div>
                </div>
            </div>
        </div>
        
        <Modal isOpen={isDeleteModalOpen} onClose={closeDeleteModal}>
            <DeleteCategory
                closeModal={closeDeleteModal} 
            />
        </Modal>
        
    </div>
  )
}

export default KYCApproval