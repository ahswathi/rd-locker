import React, { useEffect, useState } from 'react'
import { Plus } from '../Svg'
import SwitchTab from '../component/SwitchTab'
import styles from '../categories/category.module.css';
import BrandPartnerAdsTab from './BrandPartnerAdsTab';
import CreateAdTemplate from './CreateAdTemplate';

const BrandPartner = () => {
    const [value, setValue] = useState([
        { val: 'Brand Partners Ads', id: 0 },
        { val: 'Business Vouchers', id: 1 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('')
    const [isModalOpen, setIsModalOpen] = useState(false);
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };

    useEffect(() => {
        setSelected(selected)
    }, [])
    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
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
                <BrandPartnerAdsTab/>
            ): (
                <BrandPartnerAdsTab/>
            )}
            <CreateAdTemplate
                open={isModalOpen}
                onCloseModal={closeModal}
            />
        </div>
  )
}

export default BrandPartner