import React, { useEffect, useState } from 'react'
import styles from '../categories/category.module.css';
import Styles from '../component/Style.module.css';
import { Filter, Search } from '../Svg';
import SwitchTab from '../component/SwitchTab';
import ChatList from './ChatList';

const Messages = () => {
    const [value, setValue] = useState([
        { val: 'E-traveller', id: 0 },
        { val: 'Vendor', id: 1 },
        { val: 'Delivery agent', id: 2 },
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
                    <h2 className={styles.categoryText}>Messages</h2>
                </div>
                <span className={styles.home}>
                    home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>Messages</span>
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
        </div>
        <div>
            {selected === 0 ? (
            <ChatList/>
            ) : (selected === 1 ? (
                <ChatList/>
            ) : <ChatList/>) 
            }
        </div>
    </div>
  )
}

export default Messages