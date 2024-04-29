
import React, { useEffect, useState } from 'react'
import { Filter, Plus, Search } from '../Svg';
import SwitchTab from '../component/SwitchTab';
import styles from '../categories/category.module.css';
import Styles from '../header/header.module.css';
import { useNavigate } from 'react-router-dom';
import EditProfile from './EditProfile';
import SecurityManage from './SecurityManage';

const Settings = () => {
    const navigate = useNavigate()
    const [value, setValue] = useState([
        { val: 'Edit Profile', id: 0 },
        { val: 'Security Manage', id: 1 },
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
                    <h2 className={styles.categoryText}>Settings</h2>
                </div>
                <span className={styles.home}>
                    home <img src='/tiangle.png' style={{marginLeft:10}}/> <span style={{ color: 'var(--Gray-900, #1E5EFF)',marginLeft:10 }}>Settings</span>
                </span>
            </div>
        </div>
            <div style={{marginTop:20}} className={Styles.switchContainer}>
                <SwitchTab 
                    value={value}
                    selected={selected}
                    onChange={(id) => changeID(id)}
                />
            

        {
            selected === 0 ? (
                <div>
                    <EditProfile/>
                </div>
            ): (
                <div>
                    <SecurityManage/>
                </div>
            )
        }
        </div>
    </div>
  )
}

export default Settings