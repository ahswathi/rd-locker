import React, { useEffect, useState } from 'react'
import { Filter, Plus, Search } from '../Svg';
import SwitchTab from '../component/SwitchTab';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import FreeVersion from './FreeVersion';
import GoldMembership from './GoldMembership';
import { useNavigate } from 'react-router-dom';

const SubscriptionPlans = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState([
        { val: 'E-traveller plans', id: 0 },
        { val: 'Vendor plans', id: 1 },
        { val: 'Delivery agent plans', id: 2 },
    ]);
    const [selected, setSelected] = useState(0);
    const [search, setSearch] = useState('')
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(selected)
    },[])
  return (
    <div style={{padding:20}}>
        <div className={styles.container}>
            <div>
                <div>
                    <h2 className={styles.categoryText}>Subscription Plans</h2>
                </div>
                <span className={styles.home}>
                    home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>Subscription Plans</span>
                </span>
            </div>
            <div className={styles.buttonStyle} onClick={()=> navigate('/subscription/CreateSubcscriptionPlan')}>
                    <Plus/>
                    <div className={styles.addcategoryText}>
                        Create Subscription
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
        {
            selected === 0 ? (
                <div className={Styles.width}>
                    <div>
                        <FreeVersion/>
                    </div>
                    <div>
                        <GoldMembership/>
                    </div>
                </div>
            ): (
                <div className={Styles.width}>
                    <div>
                        <FreeVersion/>
                    </div>
                    <div>
                        <GoldMembership/>
                    </div>
                </div>
            )
        }
    </div>
  )
}

export default SubscriptionPlans