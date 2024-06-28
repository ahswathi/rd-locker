import React from 'react';
import Styles from "./Style.module.css";

const Card = ({image,prize,name}) => {
  return (
    <div className={Styles.card}>
        <div className={Styles.width}>
            <div>
              <img src={image} />
            </div>
            <div className={Styles.heading}>
                <p className={Styles.prize}>{prize}</p>
                <p className={Styles.name}>{name}</p>
            </div>
        </div>
    </div>
  )
}

export default Card;
