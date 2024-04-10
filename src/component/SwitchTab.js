import React, { useState } from 'react';
import styles from '../categories/category.module.css';

const SwitchTab = (props) => {
    const { value, selected, onChange } = props;
    // const [activeTab, setActiveTab] = useState(tabs[0].id);

    // const handleTabClick = (tabId) => {
    //     setActiveTab(tabId);
    // };

    const onChange_ = (val) => {
        console.log(val);
        onChange(val);
      };

    return (
        <div>
            <div className={styles.tabView}>

                {value.map((val,key) => {
                    return (
                        <div key={key} className={val.id === selected ? `${styles.active}` : `${styles.inActive}`}>
                            <div onClick={() => onChange_(val, val.val)} className={val.id === selected ? `${styles.activeText}` : `${styles.inActiveText}`}>{val.val}</div>
                        </div>
                    )
                })}
            </div>
            {/* <div className="tab-content">
                {tabs.map(tab => (
                    <div key={tab.id} className={tab.id === activeTab ? 'active' : 'inactive'}>
                        {tab.content}
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default SwitchTab;
