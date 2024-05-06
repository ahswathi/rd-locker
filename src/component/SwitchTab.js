import React, { useState } from 'react';
import styles from '../categories/category.module.css';

const SwitchTab = (props) => {
    const { value, selected, onChange } = props;
    // const [activeTab, setActiveTab] = useState(tabs[0].id);

    // const handleTabClick = (tabId) => {
    //     setActiveTab(tabId);
    // };

    const onChange_ = (val) => {
        onChange(val);
      };

    return (
        <div className={styles.tabView}>
                {value.map((val,key) => {
                    return (
                        <div key={key} className={val.id === selected ? `${styles.active}` : `${styles.inActive}`}>
                            <div onClick={() => onChange_(val, val.val)} className={val.id === selected ? `${styles.activeText}` : `${styles.inActiveText}`}>{val.val}</div>
                        </div>
                    )
                })}
        </div>
    );
};

export default SwitchTab;
