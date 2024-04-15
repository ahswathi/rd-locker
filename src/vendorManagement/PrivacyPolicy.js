import React, { useEffect, useState } from 'react';
import styles from '../categories/category.module.css';
import Styles from '../vendorManagement/vendor.module.css';
import VerticalTab from '../component/VerticalTab';
import PrivacyPolicyCard from './PrivacyPolicyCard';
import TermsAndConditions from './Terms&Conditions';

const PrivacyPolicy = () => {
  const [value, setValue] = useState([
    { val: 'Privacy Policy', id: 0 },
    { val: 'Terms & Condition ', id: 1 },
    { val: 'Agreement Contract', id: 2 },
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
        <div>
            <h2 className={styles.categoryText}>Privacy policy</h2>
        </div>
        <span className={styles.home}>
            home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>All Privacy policy</span>
        </span>
        <div className={Styles.profilVeiw} style={{marginTop:40}}>
          <div>
          <VerticalTab
              value={value}
              selected={selected}
              onChange={(id) => changeID(id)}
          />
          </div>
          <div>
            {selected === 0 ? (
            <PrivacyPolicyCard/>
            ) : (selected === 1 ? (
                <TermsAndConditions/>
            ) : <PrivacyPolicyCard/>) 
            }
          </div>
        </div>
    </div>
  
  )
}

export default PrivacyPolicy