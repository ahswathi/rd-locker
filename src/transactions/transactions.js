import React, { useEffect, useState } from 'react';
import Card from '../component/Card';
import Styles from '../component/Style.module.css';
import styles from '../transactions/transactions.module.css';
import SwitchTab from '../component/SwitchTab';
import { Export, Search } from '../Svg';
import {Area, AreaChart, CartesianGrid,Tooltip, XAxis, YAxis} from 'recharts';
import Calendar from 'react-calendar';
import Modal from '../component/Modal';
import TransactionList from './TransactionList';

const Transactions = () => {
    const cardData = [
        {
            id: 0,
            image: '/Group1.png',
           /*  icon:'rating.png', */
            prize: '100000',
            name: 'Sales',
          /*   rate: '15k' */
        },
        {
            id: 1,
            image: '/Group.png',
            /* icon:'rate1.png', */
            prize: '100000',
            name: 'Debited',
           /*  rate: '15k' */
        },
        {
            id: 2,
            image: '/Group2.png',
           /*  icon:'rate2.png', */
            prize: '100000',
            name: 'Credited',
            /* rate: '15k' */
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
        { val: 'All transaction', id: 0 },
        { val: 'Debits', id: 1 },
        { val: 'Credits', id: 2 },
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
        <div className={Styles.graph}>
            <div>
            <div className={Styles.income}>
                <h4>
                    Overall Sales
                </h4>
                <div className={Styles.date}>
                    <div className={Styles.width}>
                        <p className={Styles.dateText}>{date.toDateString()}</p>
                        <img 
                            src='/dropdown.png' 
                            style={{
                                width:8,
                                height:4,
                                marginTop:5,
                                marginLeft:5
                            }} 
                            onClick={openModal}
                        />
                        <Modal isOpen={isModalOpen} onClose={closeModal}>
                            <Calendar 
                                onChange={setDate} 
                                value={date} 
                                maxDetail='year'
                            />
                        </Modal>
                        <p className={Styles.dateText} style={{marginLeft:10}}>{lastDate.toDateString()}</p>
                        <img 
                            src='/dropdown.png' 
                            style={{
                                width:8,
                                height:4,
                                marginTop:5,
                                marginLeft:5
                            }} 
                            onClick={lastMonthOpenModal}
                        />
                        <Modal isOpen={islastMonth} onClose={lastMonthcloseModal}>
                            <Calendar 
                                onChange={setLastDate} 
                                value={lastDate} 
                                maxDetail='year'
                            />
                        </Modal>
                    </div>
                </div>
            </div>
            <div className={Styles.width}>
                <div style={{top:20}}>
                    <AreaChart 
                        width={670} 
                        height={350} 
                        data={data} 
                        margin={{ top: 35, right: 10, bottom: 15, left: 10 }}
                    >
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5" vertical={false}/>
                        <XAxis dataKey="name" axisLine={false} />
                        <YAxis tick={<CustomYAxisTick />} axisLine={false}/>
                        <Tooltip content={<CustomTooltip />} />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#ebebf5" fillOpacity={0.3} />
                    </AreaChart>
                </div>
            </div>
            </div>
            <div>
                {profitData.map((item) => {
                    return (
                    <div className={Styles.sideView} key={item.id}>
                        <div className={Styles.width}>
                            <div className={Styles.imgView}>
                                <img src={item.img}/>
                            </div>
                            <div style={{marginLeft:15,marginTop:5}}>
                                <p className={Styles.incomeText}>
                                    {item.income}
                                </p>
                                <h3 className={Styles.ammountText}>
                                    {item.amount}
                                </h3>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
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
                <div className={Styles.width}  style={{gap:'10px'}}>
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
<TransactionList/>


    </div>
  )
}

export default Transactions