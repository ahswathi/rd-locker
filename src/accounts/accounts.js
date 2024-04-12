import React, { useEffect, useState } from 'react';
import Card from '../component/Card';
import Styles from '../component/Style.module.css';
import styles from '../categories/category.module.css';
import SwitchTab from '../component/SwitchTab';
import { Export,Search } from '../Svg';
import {Area, AreaChart, CartesianGrid,Tooltip, XAxis, YAxis} from 'recharts';
import Calendar from 'react-calendar';
import Modal from '../component/Modal';
import AccountsCard from './accountsCard';

const Accounts = () => {
    const cardData = [
        {
            id: 0,
            image: '/Group1.png',
            icon:'rating.png',
            prize: '100000',
            name: 'Vendors',
            rate: '15k'
        },
        {
            id: 1,
            image: '/Group.png',
            icon:'rate1.png',
            prize: '100000',
            name: 'E-traveller',
            rate: '15k'
        },
        {
            id: 2,
            image: '/Group2.png',
            icon:'rate2.png',
            prize: '100000',
            name: 'Delivery agent',
            rate: '15k'
        },
       /*  {
            id: 3,
            image: '/incom.png',
            prize: '100000',
            name: 'Income'
        },
        {
            id: 4,
            image: '/graph.png',
            prize: '100000',
            name: 'Profit'
        }, */
    ]
    const data = [
        {
            name: 'Jan', 
            uv: 90000, 
            pv: 24000, 
            amt: 24000
        },
        {
            name: 'Feb', 
            uv: 16000, 
            pv: 2200, 
            amt: 2200
        },
        {
            name: 'March', 
            uv: 20000, 
            pv: 2100, 
            amt: 2100
        },
        {
            name: 'April', 
            uv: 30000, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'May', 
            uv: 50000, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'June', 
            uv: 60000, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'JUly', 
            uv: 70430, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Augut', 
            uv: 60320, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Sept', 
            uv: 80210, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Oct', 
            uv: 90330, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Nov', 
            uv: 10030, 
            pv: 2400, 
            amt: 2400
        },
        {
            name: 'Dec', 
            uv: 1200, 
            pv: 2400, 
            amt: 2400
        },
        
    ]
    const profitData = [
        {
            id:0,
            img: '/downloadIcon.png',
            income:'Income',
            amount: 'INR22,678'
        },
        {
            id:1,
            img: '/expensIcon.png',
            income:'Expense',
            amount: 'INR12,678'
        },
        {
            id:2,
            img: '/profitIcon.png',
            income:'Profit',
            amount: 'INR22,678'
        },
    ]
    const [date, setDate] = useState(new Date());
    const [lastDate, setLastDate] = useState(new Date());

    //DateModal
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    //lastMonthModal

    const [islastMonth, setIsLastMonth] = useState(false);

    const lastMonthOpenModal = () => {
        setIsLastMonth(true);
    };

    const lastMonthcloseModal = () => {
        setIsLastMonth(false);
    };
    // Tooltip
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className={Styles.customtootip}>
                    <div className={Styles.width}>
                        <img src='/blackRoundIcon.png' style={{width:20,height:20}}/>
                        <p style={{paddingLeft:10}}>{payload[0].payload.name}</p>
                    </div>
                    <div className={Styles.revenue}>
                        <p>{`Revenue  INR${payload[0].value}`}</p>
                    </div>
                </div>
            );
        }
    
        return null;
    };

    // CustomYaxis
    const CustomYAxisTick = ({ x, y, payload }) => {
        return (
            <g transform={`translate(${x},${y})`}>
                <text x={0} y={0} dy={4} textAnchor="end" fill="#666" >
                    {`${payload.value} k`}
                </text>
            </g>
        );
    };

    const [value, setValue] = useState([
        { val: 'All vendors', id: 0 },
        { val: 'All E-traveller', id: 1 },
        { val: 'All delivery agents', id: 2 },
    ]);
    const [selected, setSelected] = useState(1);
    const [search, setSearch] = useState('')
    const changeID = (id) => {
        setSelected(id.id);
        // setValue(data)
    };
    useEffect(() => {
        setSelected(data)
    },[])


  return (
    <div className={Styles.frontPage}>
        <div>
            <p className={Styles.dash}>All Users Accounts</p>
        </div>
        
        <div className={Styles.App}>
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    image={card.image}
                    icon={card.icon}
                    prize={card.prize}
                    name={card.name}
                    rate={card.rate}
                />
            ))}
        </div>
        <div className={styles.container}>
            <div>
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
                        <img src='/filter.png'/> <span>Filter</span>
                    </div>
                    <div className={styles.export}>
                        <Export/> <span>Export</span>
                    </div>
                </div>
            </div>
        </div>
      <AccountsCard/>
    </div>
  )
}

export default Accounts