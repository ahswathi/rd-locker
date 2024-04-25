import React, { useState } from 'react';
import styles from '../transactions/transactions.module.css';
import { Delete, Dots, Download, Left, Paid, PaidIcon, Pending, Right } from '../Svg';
import { useNavigate } from 'react-router-dom';
import DownloadPdf from './DownloadPdf';

const TransactionList = () => {
  const navigate = useNavigate();
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
            status:'Paid',
            price:'INR 887.00',
        },
    ]
  //state
  
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  
  const openDeleteModal =() => {
    setIsDeleteModalOpen(true)
  }
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  }
  const openPdfModal =() => {
    setIsPdfModalOpen(true)
  }
  const closePdfModal = () => {
    setIsPdfModalOpen(false);
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
            <div className={styles.first1}>NO</div>
            <div className={styles.second}>INVOICE SUBJECT</div>
            <div className={styles.third}>Client</div>
            <div className={styles.dateStyle}>Date</div>
            <div className={styles.fifth} >Transaction</div>
            <div className={styles.sixth}>Status</div>
            <div className={styles.seventhPrize}>Price</div>
            <div className={styles.eight}>Action</div>
            <div className={styles.nine}></div>
        </div>
        {categories.map((item,index) => {
            return(
                <div className={styles.info}>
                  <div className={styles.first1}>{(page - 1) * limit + index + 1}</div>
                  <div className={styles.second}>{item.invoice}</div>
                  <div className={styles.third}>{item.userName}</div>
                  <div className={styles.fourth}>{item.date}</div>
                  <div className={styles.fifth}>{item.trans}</div>
                  <div className={styles.sixth}onClick={openDeleteModal}>
                    {item.status === 'Pending' ? (
                      <Pending/>
                    ) : <Paid/>
                    }
                        {item.status}
            
                  </div>
                  <div className={styles.seventh}>{item.price}</div>
                  <div className={styles.eight}>
                    <div className={styles.download} onClick={openPdfModal}>
                        <Download/> <span>Download</span>
                    </div>
                  </div>
                  <div className={styles.nine}>
                      <Dots/> 
                  </div>
                </div>
            )
            })}
            <div className={styles.entryView}>
                    <div className={styles.entryText}>Showing {start} to {end} of {totalItems} entries</div>
                    <div className={styles.leftright}>
                        
                        <Left handleClick={decrement} />
                        {/* <p>01</p> */}
                        <p className={styles.onPage} style={{marginLeft:10}}>{page}</p>
                        <p className={styles.onPage} style={{marginLeft:10,marginRight:10}}>{page}</p>
                        <Right handleClick={increment} />
                        
                    </div>
            </div>
            <DownloadPdf
              open={isPdfModalOpen}
              onCloseModal={closePdfModal}
            />
        </div>
  )
}

export default TransactionList