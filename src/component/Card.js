import React from 'react';
import Styles from "./Style.module.css";

const Card = ({image,icon,prize,name,rate}) => {
  return (
    
    <div className={Styles.card}>
        <div className={Styles.width}>
            <div>
            <img src={image} className='width:68px,height:68px' />
            </div>
            <div className={Styles.heading}>
                <p className={Styles.prize}>{prize}</p>
                <p className={Styles.name}>{name}</p>
            </div>
            
        </div>
        <div className={Styles.rating}>
                <img src={icon}/>
                <div className={Styles.rate}>
                    <p className={Styles.rateText}>{rate}</p>
                </div>
            </div>
    </div>
  )
}

export default Card;
