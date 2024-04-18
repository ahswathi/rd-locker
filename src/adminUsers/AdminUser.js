import React, { useEffect, useState } from 'react'
import SwitchTab from '../component/SwitchTab'
import { AdminuserIcon, Delete, Edit, Filter, FilterIcon, Left, LockIcon, Plus, Right, Search, View } from '../Svg'
import CategoriesRequestList from '../categories/CategoriesRequestList'
import Modal from '../component/Modal'
import AddNewCategory from '../categories/AddNewCategory'
import EditCategory from '../categories/EditCategory'
import DeleteCategory from '../categories/DeleteCategory';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import Style from '../vendorManagement/vendor.module.css'
import { useNavigate } from 'react-router-dom'
import EditAdminUser from './EditAdminUser'
import ChangePasswordModal from './ChangePasswordModal'

const AdminUser = () => {
    const userData = [
        {
            id:1,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Active'
        },
        {
            id:2,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Active'
        },
        {
            id:3,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Blocked'
        },
        {
            id:4,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Blocked'
        },
        {
            id:5,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Blocked'
        },
        {
            id:6,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Blocked'
        },
        {
            id:7,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Blocked'
        },
        {
            id:8,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Rahul',
            emailId:'deeksha@gmail.com',
            phoneNumber:'+91-9876543210',
            orderPrize:'INR 500',
            status:'Blocked'
        },
        
    ]

    const navigate = useNavigate();
    // state
    const [value, setValue] = useState([
        { val: 'All Users', id: 0 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isChangePassModalOpen, setIsChangePassModalOpen] = useState(false);

    const openEditModal = () => {
        setIsEditModalOpen(true)
    }
    const openDeleteModal = () => {
        setIsDeleteModalOpen(true)
    }
    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false)
    }
    const openChangePassModal =() => {
        setIsChangePassModalOpen(true)
    }
    const closeChangePassModal =() => {
        setIsChangePassModalOpen(false)
    }
    
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    }, [])

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
    <div style={{ padding: 20 }}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.categoryText}>Admin Users</h2>
                    </div>
                    <span className={styles.home}>
                        home 
                        <img src='/tiangle.png' style={{ marginLeft: 10 }} /> 
                        <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>
                            Admin Users
                        </span>
                    </span>
                </div>
                <div className={styles.buttonStyle} onClick={() => navigate('/adminUsers/AdminUser/AddNewUser')}>
                    <Plus/>
                    <div className={styles.addcategoryText}>
                        Add New User
                    </div>
                </div>
            </div>
            <div className={styles.container}>
                <div style={{marginTop:20}}>
                    <SwitchTab
                        value={value}
                        selected={selected}
                        onChange={(id) => changeID(id)}
                    />
                </div>
                <div style={{ marginTop: 20 }}>
                    <div className={Styles.width}>
                        <div className={styles.search}>
                            <Search />
                            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search by name...' />
                        </div>
                        <div className={styles.filter}>
                            <Filter/> <span>Filter</span>
                        </div>
                    </div>
                </div>
            </div>
            {userData.length < 0 ? (
                <div className={styles.mainContainer}>
                    <img src='/usersImg.png'/>
                    <h3 className={styles.create}>
                        Add First User
                    </h3>
                    <p className={styles.noCategoryText}>
                        No users are created yet!
                    </p>
                    <div className={styles.buttonStyle} onClick={() => navigate('/adminUsers/AdminUser/AddNewUser')} style={{marginTop:20}}>
                        <Plus/>
                        <div className={styles.addcategoryText}>
                            Add New User
                        </div>
                    </div>
                </div>
            ) : (      
                <div className={Style.listContainer}>
                <div className={Style.header}>
                    <div className={Style.first}>Sl No <FilterIcon/></div>
                    <div className={Style.third}>User Name <FilterIcon/></div>
                    <div className={Style.second}>Email Id <FilterIcon/></div>
                    <div className={Style.fourth}>Phone Number <FilterIcon/></div>
                    <div className={Style.sixth}>Status <FilterIcon/></div>
                    <div className={Style.seventh}>Options</div>
                </div>
                {userData.map((item,index) => {
                    return(
                        <div className={Style.info}>
                            <div className={Style.first}>{(page - 1) * limit + index + 1}</div>
                            <div className={Style.third}>
                            <img src='/profilepic.png'/>
                            <span>{item.customerName}</span>
                            </div>
                            <div className={Style.second}>{item.emailId}</div>
                            <div className={Style.fourth}>{item.phoneNumber}</div>
                            <div className={Style.status}
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
                            <div className={Style.seventh}>
                            <div style={{marginLeft:10}}>
                                <View/>
                            </div>
                            <div style={{marginLeft:10}} onClick={openEditModal}>
                                <Edit/>
                            </div>
                            <div style={{marginLeft:10}} onClick={openChangePassModal}>
                                <LockIcon/>
                            </div>
                            <div style={{marginLeft:10}} onClick={openDeleteModal}>
                                <Delete/>
                            </div>
                            
                            </div>
                        </div>
                    )
                    }
                )}
                <div className={Style.entryView}>
                    <div className={Style.showingText}>Showing {start} to {end} of {totalItems} entries</div>
                    <div className={Style.leftright}>
                        
                        <Left handleClick={decrement} />
                        {/* <p>01</p> */}
                        <p className={Style.onPage} style={{marginLeft:10}}>{page}</p>
                        <p className={Style.onPage} style={{marginLeft:10,marginRight:10}}>{page}</p>
                        <Right handleClick={increment} />
                        
                    </div>
                </div>
                </div>
            )}
            <EditAdminUser
                onCloseModal={closeEditModal}
                open={isEditModalOpen}
            />
            <ChangePasswordModal
                onCloseModal={closeChangePassModal}
                open={isChangePassModalOpen}
            />
            <DeleteCategory
                closeModal={closeDeleteModal} 
                open={isDeleteModalOpen}
            />

        </div>
  )
}

export default AdminUser