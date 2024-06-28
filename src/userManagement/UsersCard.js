import React, { useState } from 'react';
import styles from '../userManagement/user.module.css';
import { Delete, FilterIcon, Left, Right, View } from '../Svg';
import { Navigate, useNavigate } from 'react-router-dom';
import DeleteCategory from '../categories/DeleteCategory';

const UsersCard = ({
  index,
  subsciption,
  customerName,
  emailId,
  phoneNumber,
  status
}) => {
  const vendorData = [
    // {
    //     id:0,
    //     sno:'Sl No',
    //     subsciption:'Date & Time',
    //     customerName:'Vendor name',
    //     emailId:'Email Id',
    //     phoneNumber:'Phone number',
    //     status:'Status'
    // },
    {
      id: 1,
      subsciption: 'Premium',
      customerName: 'Rahul',
      emailId: 'deeksha@gmail.com',
      phoneNumber: '+91-9876543210',
      status: 'Pending'
    },
    {
      id: 2,
      subsciption: 'Basic ',
      customerName: 'Rahul',
      emailId: 'deeksha@gmail.com',
      phoneNumber: '+91-9876543210',
      status: 'Pending'
    },
    {
      id: 3,
      subsciption: 'Basic ',
      customerName: 'Rahul',
      emailId: 'deeksha@gmail.com',
      phoneNumber: '+91-9876543210',
      status: 'Pending',
    },
    {
      id: 4,
      subsciption: 'Basic ',
      customerName: 'Rahul',
      emailId: 'deeksha@gmail.com',
      phoneNumber: '+91-9876543210',
      status: 'Pending',
    },
    {
      id: 5,
      subsciption: 'Premium',
      customerName: 'Rahul',
      emailId: 'deeksha@gmail.com',
      phoneNumber: '+91-9876543210',
      status: 'Pending',
    },
    {
      id: 6,
      subsciption: 'Premium',
      customerName: 'Rahul',
      emailId: 'deeksha@gmail.com',
      phoneNumber: '+91-9876543210',
      status: 'Pending',
    },
  ]
  const navigate = useNavigate();
  //state

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const openDeleteModal = () => {
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
        <div className={styles.first}>SlNo <FilterIcon /></div>
        <div className={styles.second}> customerName<FilterIcon /></div>
        <div className={styles.third}> EmailId<FilterIcon /></div>
        <div className={styles.fourth}> PhoneNumber<FilterIcon /></div>
        <div className={styles.fifth}>Subsciption <FilterIcon /></div>
        <div className={styles.sixth}>Status <FilterIcon /></div>
        <div className={styles.seventh}>Options</div>
      </div>
      {vendorData.map((item, index) => {
        return (
          <div className={styles.info}>
            <div className={styles.first}>{(page - 1) * limit + index + 1}</div>
            <div className={styles.second}>
              <img src='/profilepic.png' /> &ensp;
              <span>{item.customerName}</span>
            </div>
            <div className={styles.third}>
              {item.emailId}
            </div>
            <div className={styles.fourth}>{item.phoneNumber}</div>
            <div className={styles.fifth}>{item.subsciption}</div>

            <div className={styles.status}><span>{item.status}</span></div>
            <div className={styles.seventh}>
              <div style={{ marginLeft: 20 }} onClick={() => navigate('/userManagement/KYCApproval/RegistrationDetails')}>
                <View />
              </div>
              <div style={{ marginLeft: 20 }} onClick={openDeleteModal}>
                <Delete />
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
          <p className={styles.onPage} style={{ marginLeft: 10 }}>{page}</p>
          <p className={styles.onPage} style={{ marginLeft: 10, marginRight: 10 }}>{page}</p>
          <Right handleClick={increment} />

        </div>
      </div>
            <DeleteCategory
                closeModal={closeDeleteModal} 
                open={isDeleteModalOpen}
            />
    </div>
  )
}

export default UsersCard;