import React from "react";
import style from './Home.module.css';
import FindHouse from '../../components/FindHouse/FindHouse'
import GreenButton from '../../components/GreenButtom/GreenButton'
import Analitics from '../../components/Analitics/Analitics'
import S2 from '../Slide2/S2';
import S3 from '../Slide3/S3';

function Home() {
  return (
    <>
      <div className={style.containerHome}>
        <h1 className={style.tituloS1}>Buy and Sell, Rent<br />Cooperate, Property</h1>
        <p className={style.ps1}> Choice of property options are all here</p>
        <FindHouse />
      </div>
      <div className={style.inferiorS1}>
        <div className={style.archipielago}>
          <h1>We Are Spread All <br /> Over the Archipelago</h1>
          <p>At ProtAh, we take pride in offering you a wide selection of properties throughout the archipelago. Whether you are looking for a house, an apartment, or a piece of land, we have got you covered! Our team of highly trained real estate agents is ready to assist you in finding your ideal place.</p>
          <GreenButton sms='Our Project' />
        </div>
        <div className={style.Analitics}>
          <div>
            <Analitics number='300+' />
            Property Options
          </div>
          <div>
            <Analitics number='48+' />
            Partners
          </div>
          <div>
            <Analitics number='52k+' />
            Customers
          </div>
          <div>
            <Analitics number='125k+' />
            Listening Property
          </div>
        </div>
      </div>
      <S2/>
      <S3/>

    </>
  );
}

export default Home;
