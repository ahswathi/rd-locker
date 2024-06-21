import React, { useState } from 'react';
import styles from '../vendorManagement/vendor.module.css';
import { Delete, Edit, FilterIcon, Left, Right, View } from '../Svg';
import { useNavigate } from 'react-router-dom';

const BrandPartnerAdsTab = ({
    data,
    openEditModal,
    openDeleteModal
}) => {
  const navigate = useNavigate();  
  //state
  
  
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
  const formatDate = (date) => {
    const dateFromMongoDB = new Date(date);
    const formattedDate = dateFromMongoDB.toLocaleDateString('en-US', {
        day: '2-digit',
        month: 'long',
        year: '2-digit',
    });
    return formattedDate;
}
  return (
        <div className={styles.listContainer}>
            <div className={styles.header}>
                <div className={styles.fourth}>Company name <FilterIcon/></div>
                <div className={styles.third}>Email Id <FilterIcon/></div>
                <div className={styles.second}>Ads Price <FilterIcon/></div>
                <div className={styles.first}>Location <FilterIcon/></div>
                <div className={styles.fifth}>Start & End Date <FilterIcon/></div>
                <div className={styles.sixth}>Status <FilterIcon/></div>
                <div className={styles.seventh}>Options</div>
            </div>
            {data?.map((item,index) => {
                return(
                    <div className={styles.info} key={index}>
                        <div className={styles.fourth}>{item.companyName}</div>
                        <div className={styles.third}>{item.email}
                        </div>
                        <div className={styles.second}>{item.price}</div>
                        <div className={styles.first}>{item.targetLocation[0]}</div>
                        <div className={styles.fifth}>{formatDate(item.startDate)} - {formatDate(item.endDate)}</div>
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
                                    letterSpacing: 0.5,
                                    textAlign:'center',
                                    color:item.status === 'Active' ? '#1A9882' : '#F43939',
                                }}
                            >{item.status}</span></div>
                        <div className={styles.seventh}>
                        <div style={{marginLeft:10}}>
                            <View/>
                        </div>
                        <div style={{marginLeft:10}} onClick={() => openEditModal(item)}>
                            <Edit/>
                        </div>
                        <div style={{marginLeft:10}} onClick={() => openDeleteModal(item)}>
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
            
        </div>
    )
}

export default BrandPartnerAdsTab;