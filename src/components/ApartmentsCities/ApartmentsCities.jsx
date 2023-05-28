import React from "react";
import style from './ApartmentsCities.module.css';


function ApartmentsCities(props) {
    return (
        <div className={style.ApartmentsCities}>
            <img src={props.imagen} alt="" />
            <p> {props.namecity}</p>
        </div>

    )
}

export default ApartmentsCities;