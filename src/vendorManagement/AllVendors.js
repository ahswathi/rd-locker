import React, { useState } from 'react';
import styles from '../vendorManagement/vendor.module.css';
import { Delete, FilterIcon, Left, Right, View } from '../Svg';
import { useNavigate } from 'react-router-dom';
import Modal from '../component/Modal';
import DeleteCategory from '../categories/DeleteCategory';

const AllVendors = () => {
    const vendorData = [
        {
            id:1,
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            categoryName:'Healthcare(MBBS)',
            status:'Active'
        },
        {
            id:2,
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            categoryName:'Healthcare(MBBS)',
            status:'Blocked'
        },
        
    ]
  const navigate = useNavigate();  
  //state
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
  const openDeleteModal =() => {
    setIsDeleteModalOpen(true)
  }
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  }
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0);

  // calculate start & end of items -------------------
  const start = (page - 1) * limit + 1;
  const end =
    totalPages === page
      ? totalItems
      : (page - 1) * limit + limit;


  // increment the page------------------------
  const increment = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1)
    }
  }

  // decrement the page------------------------
  const decrement = () => {
    if (page > 1) {
      setPage((prev) => prev - 1)
    }
  }
  return (
        <div className={styles.listContainer}>
            <div className={styles.header}>
                <div className={styles.first}>Sl No <FilterIcon/></div>
                <div className={styles.third}>Vendor Name <FilterIcon/></div>
                <div className={styles.second}>Email Id <FilterIcon/></div>
                <div className={styles.fourth}>Phone Number <FilterIcon/></div>
                <div className={styles.fifth}>Category (Subactegory) <FilterIcon/></div>
                <div className={styles.sixth}>Status <FilterIcon/></div>
                <div className={styles.seventh}>Options</div>
            </div>
            {vendorData.map((item,index) => {
                return(
                    <div className={styles.info}>
                        <div className={styles.first}>{(page - 1) * limit + index + 1}</div>
                        <div className={styles.third}>
                        <img src='/profilepic.png'/>
                        <span>{item.vendorName}</span>
                        </div>
                        <div className={styles.second}>{item.emailId}</div>
                        <div className={styles.fourth}>{item.phoneNumber}</div>
                        <div className={styles.fifth}>{item.categoryName}</div>
                        <div className={styles.status}
                            style={{
                                backgroundColor: item.status === 'Active' ? "#1A98821A" : '#F439391A'
                            }} 
                        >
                            <span
                                style={{
                                    fontFamily: 'DM Sans',
                                    fontSize: 14,
                                    fontWeight: '400',
                                    // lineHeight: 18.23,
                                    letterSpacing: 0.5,
                                    textAlign:'center',
                                    color:item.status === 'Active' ? '#1A9882' : '#F43939',
                                }}
                            >{item.status}</span></div>
                        <div className={styles.seventh}>
                        <div style={{marginLeft:20}} onClick={() => navigate('/vendorManagement/VendorsProfile/ProfileDetails')}>
                            <View/>
                        </div>
                        <div style={{marginLeft:20}} onClick={openDeleteModal}>
                            <Delete/>
                        </div>
                        </div>
                    </div>
                )
                }
            )}
            <div className={styles.entryView}>
                <div className={styles.showingText}>Showing {start} to {end} of {totalItems} entries</div>
                <div className={styles.leftright}>
                    
                    <Left handleClick={decrement} />
                    {/* <p>01</p> */}
                    <p className={styles.onPage} style={{marginLeft:10}}>{page}</p>
                    <p className={styles.onPage} style={{marginLeft:10,marginRight:10}}>{page}</p>
                    <Right handleClick={increment} />
                    
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

export default AllVendors;