import React, { useEffect, useState } from 'react'
import { Plus } from '../Svg'
import SwitchTab from '../component/SwitchTab'
import styles from '../categories/category.module.css';
import BrandPartnerAdsTab from './BrandPartnerAdsTab';
import CreateAdTemplate from './CreateAdTemplate';
import { useDispatch, useSelector } from 'react-redux';
import { brandPartners } from '../redux/brandPartnerSlice';
import EditBrandPartner from './EditBrandPartner';
import DeleteBrandPartner from './DeleteBrandPartner';

const BrandPartner = () => {
    const dispatch = useDispatch();
    const brandPartner = useSelector(state => state.brandPartner.brandPartnerData)
    const isRefresh = useSelector((state) => state.brandPartner.isRefresh)
    
    const [value, setValue] = useState([
        { val: 'Brand Partners Ads', id: 0 },
        { val: 'Business Vouchers', id: 1 },
    ]);
    const [selected, setSelected] = useState(0);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [data,setData] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };

    useEffect(() => {
        setSelected(selected)
    }, [])

    useEffect(() => {
        dispatch(brandPartners())
    },[dispatch,isRefresh])
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const openEditModal = (data) => {
        setData(data)
        setIsEditModalOpen(true)
    }
    const closeEditModal = () => {
        setIsEditModalOpen(false)
    }
  
  const openDeleteModal =(data) => {
    setData(data)
    setIsDeleteModalOpen(true)
  }
  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
  }
  return (
    <div style={{ padding: 20 }}>
            <div className={styles.container}>
                <div>
                    <div>
                        <h2 className={styles.categoryText}>Brand Partners</h2>
                    </div>
                    <span className={styles.home}>
                        home 
                        <img src='/tiangle.png' style={{ marginLeft: 10 }} /> 
                        <span style={{ color: 'var(--Gray-900, #1E5EFF)', marginLeft: 10 }}>
                            Brand Partners
                        </span>
                    </span>
                </div>
                <div className={styles.buttonStyle} 
                    onClick={openModal}
                >
                    <Plus />
                    <div className={styles.addcategoryText}>
                        Add New Campaign
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
            </div>
            {selected === 0 ? (
                <BrandPartnerAdsTab
                    data={brandPartner.filter((data) => data.category == 'BRAND_PARTNER')}
                    openEditModal={openEditModal}
                    openDeleteModal={openDeleteModal}
                />
            ): (
                <BrandPartnerAdsTab
                    data={brandPartner.filter((data) => data.category == 'VOUCHER')}
                    openEditModal={openEditModal}
                    openDeleteModal={openDeleteModal}
                />
            )}
            <CreateAdTemplate
                open={isModalOpen}
                onCloseModal={closeModal}
            />
            <EditBrandPartner
                onCloseModal={closeEditModal}
                open={isEditModalOpen}
                data={data}
            />
            <DeleteBrandPartner
                closeModal={closeDeleteModal} 
                open={isDeleteModalOpen}
                data={data}
            />
        </div>
  )
}

export default BrandPartner