import React, { useState } from 'react';
import styles from '../vendorManagement/vendor.module.css';
import { Delete, FilterIcon, Left, MsgBox, Right, View } from '../Svg';
import { Navigate, useNavigate } from 'react-router-dom';
import DeleteCategory from '../categories/DeleteCategory';
import EnquiriesDetailsModal from './EnquiriesDetailsModal';

const WebsiteTab = () => {
    const vendorData = [
        {
            id:1,
            dateTime:'1  April, 2024',
            vendorName:'Company name ',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'dummy content'
        },
        {
            id:2,
            dateTime:'1  April, 2024',
            vendorName:'Company name ',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'dummy content'
        },
        {
            id:3,
            dateTime:'1  April, 2024',
            vendorName:'Company name ',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'dummy content',
        },
        {
            id:4,
            dateTime:'1  April, 2024',
            vendorName:'Company name ',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'dummy content',
        },
        
    ]
  const navigate = useNavigate();  
  //state
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  }
  const closeModal = () => {
    setIsModalOpen(false)
  }
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
            <div className={styles.second}>Date&Time <FilterIcon/></div>
            <div className={styles.third}>Company name <FilterIcon/></div>
            <div className={styles.sixth}>Subject<FilterIcon/></div>
            <div className={styles.fifth}>PhoneNumber <FilterIcon/></div>
            <div className={styles.fourth}>EmailId <FilterIcon/></div>
            <div className={styles.seventh}>Options</div>
        </div>
        {vendorData.map((item,index) => {
            return(
            <div className={styles.info}>
                <div className={styles.second}>{item.dateTime}</div>
                <div className={styles.third}>{item.vendorName}</div>
                <div className={styles.sixth}>{item.status}</div>
                <div className={styles.fifth}>{item.phoneNumber}</div>
                <div className={styles.fourth}>{item.emailId}</div>
                
                <div className={styles.seventh}>
                  <div style={{marginLeft:20}} onClick={openModal}>
                      <View/>
                  </div>
                  <div style={{marginLeft:10}}>
                    <MsgBox/>
                  </div>
                  <div style={{marginLeft:10}} onClick={openDeleteModal}>
                    <Delete/>
                  </div>
                </div>
            </div>
            )
        })}
        
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
            <EnquiriesDetailsModal
              open={isModalOpen}
              onCloseModal={closeModal}
            />
            <DeleteCategory
              open={isDeleteModalOpen}
              closeModal={closeDeleteModal}
            />
    </div>
  )
}

export default WebsiteTab;