import React, { useState } from 'react';
import Card from '../component/Card';
import Styles from '../component/Style.module.css';

const Dashboard = () => {
    const cardData = [
        {
            id: 0,
            image: '/Group1.png',
            prize: '10,000',
            name: 'All Users',
        },
        {
            id: 1,
            image: '/Group.png',
            prize: '5000',
            name: 'Subscribed users',
        },
        {
            id: 2,
            image: '/Group2.png',
            prize: '10,000',
            name: 'Income',
        },
        
    ]
  

   

  return (
    <div className={Styles.frontPage}>
        <div className={Styles.dash} style={{paddingLeft:10}}>
            Dashboard
        </div>
        <div className={Styles.App}>
            {cardData.map((card) => (
                <Card
                    key={card.id}
                    image={card.image}
                    prize={card.prize}
                    name={card.name}
                />
            ))}
        </div>
        
    </div>
  )
}

export default Dashboard