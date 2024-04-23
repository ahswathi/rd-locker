import React, { useEffect, useState } from 'react'
import { Delete, Discount, Edit, Filter, FilterIcon, Left, Plus, Right, Search, View } from '../Svg';
import SwitchTab from '../component/SwitchTab';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import { useNavigate } from 'react-router';
import Style from '../voucher/voucher.module.css'
import EditVoucher from './EditVoucher';
import DeleteCategory from '../categories/DeleteCategory';

const Voucher = () => {
    const navigate = useNavigate()
    //State
    const [value, setValue] = useState([
        { val: 'All Vouchers', id: 0 },
        
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('')
    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(50)
    const [totalPages, setTotalPages] = useState(1)
    const [totalItems, setTotalItems] = useState(0);

    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    },[])

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
    const [isEditModal,setIsEditModal] = useState(false);
    const openEditModal = () =>{
        setIsEditModal(true);
    }
    const closeEditModal = () => {
        setIsEditModal(false)
    }
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  
    const openDeleteModal =() => {
        setIsDeleteModalOpen(true)
    }
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false);
    }
    const userData = [
        {
            id:1,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Summer discount 10% off',
            companyName:'Company Name',
            code:'ABC12',
            UsageLimits:'10',
            status:'Active'
        },
        {
            id:2,
            orderId:'#123456',
            dateTime:'April 1, 2024 11:30AM',
            customerName:'Summer discount 10% off',
            companyName:'Company Name',
            code:'ABC12',
            UsageLimits:'No limit',
            status:'Expire'
        },
        
        
    ]
  return (
    <div style={{padding:20}}>
        <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.categoryText}>Vouchers</h2>
                </div>
                <span className={styles.home}>
                    home 
                    <img src='/tiangle.png' style={{marginLeft:10}}/> 
                    <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>
                        Vouchers Plans
                    </span>
                </span>
            </div>
            <div className={styles.buttonStyle} onClick={()=> navigate('/voucher/Voucher/AddVoucher')}>
                    <Plus/>
                    <div className={styles.addcategoryText}>
                        Add New Voucher
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
            <div style={{marginTop:20}}>
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
                    <div className={styles.buttonStyle} onClick={() => navigate('/voucher/Voucher/AddVoucher')} style={{marginTop:20}}>
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
                    <div className={Style.second}>Voucher name <FilterIcon/></div>
                    <div className={Style.third}>Code<FilterIcon/></div>
                    <div className={Style.fourth}>Valid date <FilterIcon/></div>
                    <div className={Style.fifth}>Usage Limits <FilterIcon/></div>
                    <div className={Style.sixth}>Status <FilterIcon/></div>
                    <div className={Style.seventh}>Options</div>
                </div>
                {userData.map((item,index) => {
                    return(
                        <div className={Style.info}>
                            <div className={Style.first}>{(page - 1) * limit + index + 1}</div>
                            <div className={Style.second}>
                            <Discount/>
                            <div>
                            <span>{item.customerName}</span>
                            <br/>
                            <p>{item.companyName}</p>
                            </div>
                            </div>
                            <div className={Style.third}>{item.code}</div>
                            <div className={Style.fourth}>{item.dateTime}</div>
                            <div className={Style.sixth}>{item.UsageLimits}
                                
                            </div>
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
            <EditVoucher
                open={isEditModal}
                onCloseModal={closeEditModal}
            />
            <DeleteCategory
                open={isDeleteModalOpen}
                closeModal={closeDeleteModal}
            />
    </div>
  )
}

export default Voucher