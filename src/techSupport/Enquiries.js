import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import SwitchTab from '../component/SwitchTab';
import { Filter, Plus, Search } from '../Svg';
import BrandPartnerTab from './BrandPartnerTab';
import WebsiteTab from './WebsiteTab';

const Enquiries = () => {

    
    const [value, setValue] = useState([
        { val: 'Brand partners', id: 0 },
        { val: 'Website', id: 1 },
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
                    <h2 className={styles.categoryText}>Enquiry</h2>
                </div>
                <span className={styles.home}>
                    home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>Enquiry</span>
                </span>
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
        <div>
            {selected === 0 ? (
            <BrandPartnerTab/>
            ) : <WebsiteTab/>
            }
        </div>
    </div>
  )
}

export default Enquiries