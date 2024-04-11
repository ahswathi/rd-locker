import React, { useState } from 'react';
import styles from '../vendorManagement/vendor.module.css';
import { Delete, FilterIcon, Left, Right, View } from '../Svg';
import { Navigate, useNavigate } from 'react-router-dom';

const VendorsCard = ({
    index,
    dateTime,
    vendorName,
    emailId,
    phoneNumber,
    status
}) => {
    const vendorData = [
        // {
        //     id:0,
        //     sno:'Sl No',
        //     dateTime:'Date & Time',
        //     vendorName:'Vendor name',
        //     emailId:'Email Id',
        //     phoneNumber:'Phone number',
        //     status:'Status'
        // },
        {
            id:1,
            dateTime:'1  April, 2024',
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'Pending'
        },
        {
            id:2,
            dateTime:'1  April, 2024',
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'Pending'
        },
        {
            id:3,
            dateTime:'1  April, 2024',
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'Pending',
        },
        {
            id:4,
            dateTime:'1  April, 2024',
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'Pending',
        },
        {
            id:5,
            dateTime:'1  April, 2024',
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'Pending',
        },
        {
            id:6,
            dateTime:'1  April, 2024',
            vendorName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            status:'Pending',
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
            <div className={styles.second}>Date & Time <FilterIcon/></div>
            <div className={styles.third}>Vendor name <FilterIcon/></div>
            <div className={styles.fourth}>Email Id <FilterIcon/></div>
            <div className={styles.fifth}>Phone number <FilterIcon/></div>
            <div className={styles.sixth}>Status <FilterIcon/></div>
            <div className={styles.seventh}>Options</div>
        </div>
        {vendorData.map((item,index) => {
            return(
            <div className={styles.info}>
                <div className={styles.first}>{(page - 1) * limit + index + 1}</div>
                <div className={styles.second}>{item.dateTime}</div>
                <div className={styles.third}>
                  <img src='/profilepic.png'/>
                  <span>{item.vendorName}</span>
                  </div>
                <div className={styles.fourth}>{item.emailId}</div>
                <div className={styles.fifth}>{item.phoneNumber}</div>

                <div className={styles.status}><span>{item.status}</span></div>
                <div className={styles.seventh}>
                <div style={{marginLeft:20}} onClick={() => navigate('/vendorManagement/RegistrationDetails')}>
                    <View/>
                </div>
                </div>
            </div>
            )
        })}
        
            <div className={styles.entryView}>
                    <div>Showing {start} to {end} of {totalItems} entries</div>
                    <div className={styles.leftright}>
                        
                        <Left handleClick={decrement} />
                        {/* <p>01</p> */}
                        <p className={styles.onPage} style={{marginLeft:10}}>{page}</p>
                        <p className={styles.onPage} style={{marginLeft:10,marginRight:10}}>{page}</p>
                        <Right handleClick={increment} />
                        
                    </div>
            </div>
        </div>
  )
}

export default VendorsCard;