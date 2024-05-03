import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import SwitchTab from '../component/SwitchTab';
import { Filter, Plus, Search } from '../Svg';
import Cards from './Cards';
import { useNavigate } from 'react-router-dom';
import Modal from '../component/Modal';
import AddNewCategory from './AddNewCategory';
import EditCategory from './EditCategory';
import DeleteCategory from './DeleteCategory';
import CategoriesRequestList from './CategoriesRequestList';
import { useDispatch, useSelector } from 'react-redux';
import { categories } from '../redux/categoriesSlice';

const Categories = () => {
    // const data = [
    //     {
    //         id: 0,
    //         image: '/healthcare.png',
    //         heading: 'Healthcare',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 1,
    //         image: '/lawyer.png',
    //         heading: 'Lawyers',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 2,
    //         image: '/etraveleguid.png',
    //         heading: 'E-traveller Guide',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 3,
    //         image: '/securityagency.png',
    //         heading: 'Security Agency',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 4,
    //         image: '/technicalservice.png',
    //         heading: 'Technical Services',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 5,
    //         image: '/astrologer.png',
    //         heading: 'Astrologer',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 6,
    //         image: '/chef.png',
    //         heading: 'Chef',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 7,
    //         image: '/spiritual.png',
    //         heading: 'Spirutual',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 8,
    //         image: '/photographer.png',
    //         heading: 'Photographers',
    //         subCategory: '7 subcategories'
    //     },
    //     {
    //         id: 9,
    //         image: '/financeadvisor.png',
    //         heading: 'Finance Advisor',
    //         subCategory: '7 subcategories'
    //     },
    // ]
    const dispatch = useDispatch();
    const catData  = useSelector(state => state.categories.catData)
    const isRefresh  = useSelector(state => state.categories.isRefresh)
    

    useEffect(() => {
        dispatch(categories(catData))
    },[dispatch, isRefresh])


    const [data,setData] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const [value, setValue] = useState([
        { val: 'All Categories', id: 0 },
        { val: 'New category request', id: 1 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('')
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    }, [])

    return (
        <div style={{ padding: 20 }}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.categoryText}>Categories</h2>
                    </div>
                    <span className={styles.home}>
                        home <img src='/tiangle.png' style={{ marginLeft: 10 }} /> <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>Categories</span>
                    </span>
                </div>
                <div className={styles.buttonStyle} onClick={openModal}>
                    <Plus />
                    <div className={styles.addcategoryText}>
                        Add Categories
                    </div>
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
                        <div className={styles.filter}>
                            <Filter /> <span>Filter</span>
                        </div>
                    </div>
                </div>
            </div>

            {selected == 0 ? (
                <>
                    {catData.length > 0 ? (
                        <div className={styles.cardWrap}>
                            {catData.map((item, key) => {
                                console.log('item',item);
                                return (
                                    <div key={key} >
                                        <Cards
                                            image={item.img}
                                            heading={item.name}
                                            subCategory={item.subCategory}
                                            status={item.status}
                                            openEditModal={openEditModal}
                                            openDeleteModal={openDeleteModal}
                                            data={item}
                                            
                                        />
                                    </div>
                                )
                            })}

                        </div>
                    ) :
                        <div className={styles.mainContainer}>
                            
                                <img src='/illustration.png' />
                                <h3 className={styles.create} onClick={openModal}>
                                    Create First Category
                                </h3>
                                <p className={styles.noCategoryText}>
                                    No category is created yet!
                                </p>
                        
                        </div>
                    }
                </>
            ) :
                <CategoriesRequestList />
            }
                <AddNewCategory
                    onClose={closeModal}
                    open={isModalOpen} 
                />
                <EditCategory
                    onCloseModal={closeEditModal}
                    open={isEditModalOpen}
                    data={data}
                />
                <DeleteCategory
                    heading={'Delete Category'}
                    closeModal={closeDeleteModal}
                    open={isDeleteModalOpen}
                    data={data}
                />
        </div>
    )
}

export default Categories