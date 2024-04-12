import React, { useState } from 'react';
import Card from '../component/Card';
import Styles from '../component/Style.module.css';
import { Area, AreaChart, CartesianGrid, Tooltip, XAxis, YAxis } from 'recharts';
import Calendar from 'react-calendar';
import Modal from '../component/Modal';

const Dashboard = () => {
    const cardData = [
        {
            id: 0,
            image: '/Group1.png',
            icon: 'rating.png',
            prize: '100000',
            name: 'Vendors',
            rate: '15k'
        },
        {
            id: 1,
            image: '/Group.png',
            icon: 'rate1.png',
            prize: '100000',
            name: 'E-traveller',
            rate: '15k'
        },
        {
            id: 2,
            image: '/Group2.png',
            icon: 'rate2.png',
            prize: '100000',
            name: 'Delivery agent',
            rate: '15k'
        },
        {
            id: 3,
            image: '/incom.png',
            // icon:'rating.png',
            prize: '100000',
            name: 'Income'
        },
        {
            id: 4,
            image: '/graph.png',
            // icon:'rating.png',
            prize: '100000',
            name: 'Profit'
        },
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
            id: 0,
            img: '/downloadIcon.png',
            income: 'Income',
            amount: 'INR22,678'
        },
        {
            id: 1,
            img: '/expensIcon.png',
            income: 'Expense',
            amount: 'INR12,678'
        },
        {
            id: 2,
            img: '/profitIcon.png',
            income: 'Profit',
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
                        <div style={{ width: 20, height: 20, borderRadius: "50%", background: "#000" }}></div>
                        <p>{payload[0].payload.name}</p>
                    </div>
                    <div className={Styles.revenue}>
                        <p>Revenue  <span style={{ color: "rgba(0, 0, 0, 1)" }}>INR {payload[0].value}</span></p>
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
                <text x={0} y={0} dy={4} textAnchor="end" fill="#666" className={Styles.y_axis}>
                    {`${payload.value}k`}
                </text>
            </g>
        );
    };

    return (
        <div className={Styles.frontPage}>
            <div>
                <p className={Styles.dash}>Dashboard</p>
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
                            Overall Income
                        </h4>
                        <div className={Styles.date}>
                            <div className={Styles.width}>
                                <p className={Styles.dateText}>{date.toDateString()}</p>
                                <img
                                    src='/dropdown.png'
                                    style={{
                                        width: 8,
                                        height: 4,
                                        marginTop: 5,
                                        marginLeft: 5
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
                                <p className={Styles.dateText} style={{ marginLeft: 10 }}>{lastDate.toDateString()}</p>
                                <img
                                    src='/dropdown.png'
                                    style={{
                                        width: 8,
                                        height: 4,
                                        marginTop: 5,
                                        marginLeft: 5
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
                        <div style={{ top: 20 }}>
                            <AreaChart
                                width={700}
                                height={350}
                                data={data}
                                margin={{ top: 35, right: 10, bottom: 15, left: 10 }}
                            >
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="rgba(0, 0, 0, 0.1)" stopOpacity={1} />
                                        <stop offset="95%" stopColor="rgba(0, 0, 0, 0)" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid stroke="#eee" strokeDasharray="5 5" vertical={false} />
                                {/* <XAxis dataKey="name" axisLine={false} />
                                <YAxis tick={<CustomYAxisTick />} axisLine={false} /> */}
                                <XAxis dataKey="name" axisLine={false} tickLine={false} padding="gap" tickSize={15} />
                                <YAxis tick={<CustomYAxisTick />} axisLine={false} tickLine={false} tickSize={10} />
                                <Tooltip content={<CustomTooltip />} />
                                <Area isAnimationActive={true} type="monotone" activeDot={{ stroke: '#fff', strokeWidth: 9, r: 8 }} dataKey="uv" stroke="rgba(112, 100, 245, 1)" strokeWidth={2} fill="url(#colorUv)" />
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
                                        <img src={item.img} />
                                    </div>
                                    <div style={{ marginLeft: 15, marginTop: 5 }}>
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
        </div>
    )
}

export default Dashboard