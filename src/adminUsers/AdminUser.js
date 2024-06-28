import React, { useEffect, useState } from 'react'
import SwitchTab from '../component/SwitchTab'
import { Delete, Edit, FilterIcon, Left, LockIcon, Plus, Right, Search, View } from '../Svg'
import DeleteCategory from '../categories/DeleteCategory';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import Style from '../adminUsers/vendor.module.css'
import { useNavigate } from 'react-router-dom'
import EditAdminUser from './EditAdminUser'
import ChangePasswordModal from './ChangePasswordModal'
import { useDispatch, useSelector } from 'react-redux'
import { adminUsers } from '../redux/adminUserSlice';
import DeleteAdminUser from './DeleteAdminUser';
import { Popover } from '@mui/material';
import Filter from '../component/Filter';

const AdminUser = () => {

    const dispatch = useDispatch();
    const adminUserData = useSelector(state => state.adminUsers.adminUserData);
    const isRefresh = useSelector(state => state.adminUsers.isRefresh);
    // console.log('adminUserData',adminUserData);


    const navigate = useNavigate();
    // state
    const [data, setData] = useState(null)
    const [value, setValue] = useState([
        { val: 'All Users', id: 0 },
        { val: 'Premium members', id: 1 },
        { val: 'Trash', id: 2 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('');
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [isChangePassModalOpen, setIsChangePassModalOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const openEditModal = (data) => {
        setData(data)
        setIsEditModalOpen(true)
    }
    const openDeleteModal = (data) => {
        setData(data)
        setIsDeleteModalOpen(true)
    }
    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }
    const closeDeleteModal = () => {
        setIsDeleteModalOpen(false)
    }
    const openChangePassModal = (data) => {
        setData(data)
        setIsChangePassModalOpen(true)
    }
    const closeChangePassModal = () => {
        setIsChangePassModalOpen(false)
    }

    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    }, [])

    useEffect(() => {
        dispatch(adminUsers())
    }, [dispatch, isRefresh])

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
                        <h2 className={styles.categoryText}> Users</h2>
                    </div>
                    <span className={styles.home}>
                        Home
                        <img src='/tiangle.png' style={{ marginLeft: 10 }} />
                        <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>
                             Users
                        </span>
                    </span>
                </div>
                
            </div>
            <div className={styles.container}>
                <div style={{ marginTop: 20 }}>
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
                        <div className={styles.filter} onClick={handleClick}>
                            <img src='/filter.png' /> <span>Filter</span>
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
                            <Filter
                                onClose={handleClose}
                            />
                        </Popover>
                    </div>
                </div>
            </div>
            {adminUserData?.length > 0 ? (
                <div className={Style.listContainer}>
                    <div className={Style.header}>
                        <div className={Style.first}>Sl No <FilterIcon /></div>
                        <div className={Style.third}>User Name <FilterIcon /></div>
                        <div className={Style.second}>Email Id <FilterIcon /></div>
                        <div className={Style.fourth}>Phone Number <FilterIcon /></div>
                        <div className={Style.sixth}>Status <FilterIcon /></div>
                        <div className={Style.seventh}>Options</div>
                    </div>
                    {adminUserData?.map((item, index) => {
                        return (
                            <div className={Style.info}>
                                <div className={Style.first}>{(page - 1) * limit + index + 1}</div>
                                <div className={Style.third}>
                                    {item.profileImg[0] ? (
                                        <img src={item.profileImg[0]} height={30} width={30} />
                                    ) :
                                        <img src='/dummyImg.png' height={30} width={30} />
                                    }
                                    <span>{item.name}</span>
                                </div>
                                <div className={Style.second}>{item.email}</div>
                                <div className={Style.fourth}>+91-{item.phone}</div>
                                <div className={Style.status}
                                    style={{
                                        backgroundColor: item.status === true ? "#1A98821A" : '#F439391A'
                                    }}
                                >
                                    <span
                                        style={{
                                            fontFamily: 'DM Sans',
                                            fontSize: 14,
                                            fontWeight: '400',
                                            // lineHeight: 18.23,
                                            letterSpacing: 0.5,
                                            textAlign: 'center',
                                            color: item.status === true ? '#1A9882' : '#F43939',
                                        }}
                                    >{item.status === true ? 'Active' : 'Blocked'}</span></div>
                                <div className={Style.seventh}>
                                    <div style={{ marginLeft: 10 }}>
                                        <View />
                                    </div>
                                    <div style={{ marginLeft: 10 }} onClick={() => openEditModal(item)}>
                                        <Edit />
                                    </div>
                                    <div style={{ marginLeft: 10 }} onClick={() => openChangePassModal(item)}>
                                        <LockIcon />
                                    </div>
                                    <div style={{ marginLeft: 10 }} onClick={() => openDeleteModal(item)}>
                                        <Delete />
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
                            <p className={Style.onPage} style={{ marginLeft: 10 }}>{page}</p>
                            <p className={Style.onPage} style={{ marginLeft: 10, marginRight: 10 }}>{page}</p>
                            <Right handleClick={increment} />

                        </div>
                    </div>
                </div>

            ) : (
                <div className={styles.mainContainer}>
                    <img src='/usersImg.png' />
                    <h3 className={styles.create}>
                    No First User
                    </h3>
                    <p className={styles.noCategoryText}>
                        No users are created yet!
                    </p>
                </div>
            )}
            <EditAdminUser
                onCloseModal={closeEditModal}
                open={isEditModalOpen}
                data={data}
            />
            <ChangePasswordModal
                onCloseModal={closeChangePassModal}
                open={isChangePassModalOpen}
                data={data}
            />
            <DeleteAdminUser
                closeModal={closeDeleteModal}
                open={isDeleteModalOpen}
                data={data}
            />

        </div>
    )
}

export default AdminUser