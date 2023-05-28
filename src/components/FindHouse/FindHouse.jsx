import React, { useState } from "react";
import style from './FindHouse.module.css';
import house from '../../multimedia-source/Icons/house.png'
import apartment from '../../multimedia-source/Icons/apartment.png'
import office from '../../multimedia-source/Icons/office.png'
import shop from '../../multimedia-source/Icons/shop.png'
import database from './database'

function FindHouse() {
  const [properties, setProperties] = useState(database[0])

  const handleButtonClick = (event) => {
    const value = event.target.innerText;
    const foundProperty = database.find((property) => property.tipo === value);
    setProperties(foundProperty);
  };

  return (
    <div className={style.container}>
      <div className={style.items}>
        <div className={style.iconAlign}>
          <img src={house} alt="House Icon" />
          <button onClick={handleButtonClick} className={style.button}>House</button>
        </div>

        <div className={style.iconAlign}>
          <img src={apartment} alt="Apartment Icon" />
          <button onClick={handleButtonClick} className={style.button} >Apartment</button>
        </div>

        <div className={style.iconAlign}>
          <img src={office} alt="Office Icon" />
          <button onClick={handleButtonClick} className={style.button} >Office</button>
        </div>

        <div className={style.iconAlign}>
          <img src={shop} alt="Shophouse Icon" />
          <button onClick={handleButtonClick} className={style.button} >Shophouse</button>
        </div>
      </div>
      <div className={style.dataList}>
        {properties.categorias.map((index) => (
          <div key={Math.random()} className={style.map} >
            <img src={index.imagen} className={style.image} />
            <p>{index.categoria}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FindHouse;
