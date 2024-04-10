import React, { useState } from 'react';
import styles from '../categories/category.module.css';
import { Delete, Left, Right } from '../Svg';

const CategoriesRequestList = () => {
    const categories = [
        {
            id:0,
            sno:1,
            date:'1  April, 2024',
            userName:'Rahul',
            categoryName:'Category name(subcategory)',
        },
        {
            id:1,
            sno:2,
            date:'1  April, 2024',
            userName:'Rahul',
            categoryName:'Category name(subcategory)',
        },
        {
            id:2,
            sno:3,
            date:'1  April, 2024',
            userName:'Rahul',
            categoryName:'Category name(subcategory)',
        },
        {
            id:3,
            sno:4,
            date:'1  April, 2024',
            userName:'Rahul',
            categoryName:'Category name(subcategory)',
        },
        {
            id:4,
            sno:5,
            date:'1  April, 2024',
            userName:'Rahul',
            categoryName:'Category name(subcategory)',
        },
        {
            id:5,
            sno:6,
            date:'1  April, 2024',
            userName:'Rahul',
            categoryName:'Category name(subcategory)',
        },
        {
            id:6,
            sno:7,
            date:'1  April, 2024',
            userName:'Rahul',
            categoryName:'Category name(subcategory)',
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
            <div className={styles.first}>Sl No #</div>
            <div className={styles.second}>Request date #</div>
            <div className={styles.third}>User name #</div>
            <div className={styles.fourth}>Category/Subcategory</div>
            <div className={styles.fifth}>Options #</div>
        </div>
        {categories.map((item,index) => {
            return(
                <div className={styles.info}>
                  <div className={styles.first}>{(page - 1) * limit + index + 1}</div>
                  <div className={styles.second}>{item.date}</div>
                  <div className={styles.third}>{item.userName}</div>
                  <div className={styles.fourth}>{item.categoryName}</div>
                  <div className={styles.fifth}>
                    <div style={{marginLeft:20}} onClick={openDeleteModal}>
                        <Delete/>
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

export default CategoriesRequestList