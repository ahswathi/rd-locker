import React, { useState } from 'react';
import styles from '../healthcare/healthcare.module.css';
import { Delete, Edit, FilterIcon, Left, Right } from '../Svg';
import Modal from '../component/Modal';
import EditCategory from '../categories/EditCategory';
import DeleteCategory from '../categories/DeleteCategory';

const CategoriesList = ({categories = []}) => {
  //state
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const openEditModal = () => {
    setIsEditModalOpen(true);
  };

  const openDeleteModal = () => {
    setIsDeleteModalOpen(true)
  }
  const closeEditModal = () => {
    setIsEditModalOpen(false);
  };

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
    <div>
      <div className={styles.header}>
        <div className={styles.first}>Sl No <FilterIcon /></div>
        <div className={styles.second}>Subcategory name <FilterIcon /></div>
        <div className={styles.third}>Status <FilterIcon /></div>
        <div className={styles.fourth}>Options</div>
      </div>
      {categories.map((item, index) => {
        return (
          <div className={styles.info}>
            <div className={styles.first}>{(page - 1) * limit + index + 1}</div>
            <div className={styles.second}>{item.name}</div>
            <div className={styles.third}
              style={{
                backgroundColor: item.status ? "#1A98821A" : '#F439391A'
              }}
            >
              <span
                style={{
                  // width:'25%',
                  fontFamily: 'DM Sans',
                  fontSize: 14,
                  fontWeight: '400',
                  // lineHeight: 18.23,
                  letterSpacing: 0.5,
                  textAlign: 'center',
                  color: item.status ? '#1A9882' : '#F43939',
                }}
              >{item.status ? "Active" : "Inactive"}</span></div>
            <div className={styles.fourth}>
              <div className={styles.option}>
                <div style={{ marginLeft: 20 }} onClick={openEditModal} >
                  <Edit />
                </div>
                <div style={{ marginLeft: 20 }} onClick={openDeleteModal}>
                  <Delete />
                </div>
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

      <EditCategory
        onCloseModal={closeEditModal}
        open={isEditModalOpen}
      />

      <DeleteCategory
        closeModal={closeDeleteModal}
        open={isDeleteModalOpen}
      />
    </div>
  )
}

export default CategoriesList