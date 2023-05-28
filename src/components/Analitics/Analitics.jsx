import React from "react";
import style from './Analitics.module.css';

function Analitics(props){
    return (
        <>
        <h1 className={style.titleNumbers}>{props.number}</h1>
        </>
    )
}

export default Analitics