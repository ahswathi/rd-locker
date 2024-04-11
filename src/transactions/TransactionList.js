import React, { useState } from 'react';
import styles from '../transactions/transactions.module.css';
import { Delete, Dots, Download, Left, Pending, Right } from '../Svg';

const TransactionList = () => {
    const categories = [
        {
            id:0,
            sno:'ABC123',
            invoice:'Order Fee',
            userName:'Wade Warren',
            date:'15 Dec 2024	, 10:30AM',
            trans:'Debit',
            status:'Pending',
            price:'INR 887.00',
        },
        {
            id:1,
            sno:'ABC123',
            invoice:'Order Fee',
            userName:'Wade Warren',
            date:'15 Dec 2024	, 10:30AM',
            trans:'Debit',
            status:'Pending',
            price:'INR 887.00',
        },
        {
            id:2,
            sno:'ABC123',
            invoice:'Order Fee',
            userName:'Wade Warren',
            date:'15 Dec 2024	, 10:30AM',
            trans:'Debit',
            status:'Pending',
            price:'INR 887.00',
        },
    ]
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
            <div className={styles.subcatText}>
                SubCategories
            </div>
            <div className={styles.header}>
            <div className={styles.first}>NO</div>
            <div className={styles.first}>INVOICE SUBJECT</div>
            <div className={styles.first}>Client</div>
            <div className={styles.first}>Date</div>
            <div className={styles.first}>Transaction</div>
            <div className={styles.first}>Status</div>
            <div className={styles.first}>Price</div>
            <div className={styles.first}>Action</div>
        </div>
        {categories.map((item,index) => {
            return(
                <div className={styles.info}>
                  <div className={styles.first}>{(page - 1) * limit + index + 1}</div>
                  <div className={styles.first}>{item.invoice}</div>
                  <div className={styles.first}>{item.userName}</div>
                  <div className={styles.first}>{item.date}</div>
                  <div className={styles.first}>{item.trans}</div>
                  <div className={styles.first}>
                    <div style={{marginRight:20}} onClick={openDeleteModal}>
                        <Pending/>{item.status}
                    </div>
                  </div>
                  <div className={styles.first}>{item.price}</div>
                  <div className={styles.first}>
                    <div className={styles.download}>
                        <Download/> <span>Download</span>
                    </div>
                  </div>
                  {/* <div className={styles.first}>
                    <div className={styles.dots}>
                        <Dots/> 
                    </div>
                  </div> */}
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

export default TransactionList