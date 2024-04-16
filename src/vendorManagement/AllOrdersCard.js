import React, { useState } from 'react';
import styles from '../vendorManagement/vendor.module.css';
import Styles from '../categories/category.module.css';
import { Filter, FilterIcon, Left, Right, Search, View } from '../Svg';
import { useNavigate } from 'react-router-dom';
import { Popover } from '@mui/material';
import FilterWithDate from '../component/FilterWithDate';


const AllOrdersCard = () => {
    const vendorData = [
        {
            id:1,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Pending'
        },
        {
            id:2,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Completed'
        },
        {
            id:3,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Completed'
        },
        {
            id:4,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Completed'
        },
        {
            id:5,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Completed'
        },
        {
            id:6,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Completed'
        },
        {
            id:7,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Completed'
        },
        {
            id:8,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Completed'
        },
        
    ]
  const navigate = useNavigate();  
  //state
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(50)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0);
  const [search, setSearch] = useState('')

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
            <div className={styles.orderIcon}>
                <div className={styles.subcatText}>
                    All orders
                </div>
        
                <div className={styles.orderBox}>
                    <div className={Styles.search}>
                        <Search /> 
                        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search by name...' />
                    </div>
                    <div className={Styles.filter} onClick={handleClick} style={{marginLeft:20}}>
                        <Filter/> <span>Filter</span>
                    </div>
                    <Popover
                        id={id}
                        open={open}
                        anchorEl={anchorEl}
                        onClose={handleClose}
                        anchorOrigin={{
                          vertical: 'bottom',
                          horizontal: 'right',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                    >
                        <FilterWithDate
                            onClose={handleClose}
                        />
                    </Popover>
                </div>
            </div>
            <div className={styles.header}>
                <div className={styles.firstOrder}>OrderId<FilterIcon/></div>
                <div className={styles.secondDate}>Date&Time<FilterIcon/></div>
                <div className={styles.thirdCustomer}>CustomerName<FilterIcon/></div>
                <div className={styles.fourthEmail}>EmailId<FilterIcon/></div>
                <div className={styles.fifthPhone}>PhoneNumber<FilterIcon/></div>
                <div className={styles.eightPrize}>OrderPrice<FilterIcon/></div>
                <div className={styles.sixthStatus}>Status<FilterIcon/></div>
                <div className={styles.seventhOption}>Options</div>
            </div>
            {vendorData.map((item,index) => {
                return(
                    <div className={styles.info}>
                        <div className={styles.firstOrder}>{item.orderId}</div>
                        <div className={styles.secondDate}>{item.dateTime}</div>
                        <div className={styles.thirdCustomer}>
                        <img src='/profilepic.png'/>
                        <span>{item.customerName}</span>
                        </div>
                        <div className={styles.fourthEmail}>{item.emailId}</div>
                        <div className={styles.fifthPhone}>{item.phoneNumber}</div>
                        <div className={styles.eightPrize}>{item.orderPrize}</div>
                        <div className={styles.sixthStatus} 
                            style={{
                                backgroundColor: item.status === 'Pending' ? "#F439391A" : '#1A98821A'
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
                                color:item.status === 'Pending' ? '#FF8227' : '#0F9A1D',
                            }}
                        >{item.status}</span></div>
                        <div className={styles.seventhOption}>
                        <div style={{marginLeft:20}} onClick={() => navigate('/vendorManagement/ProfileDetails')}>
                            <View/>
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

export default AllOrdersCard;