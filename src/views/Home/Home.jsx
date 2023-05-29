import React from "react";
import FindHouse from '../../components/FindHouse/FindHouse'
import GreenButton from '../../components/GreenButtom/GreenButton'
import Analitics from '../../components/Analitics/Analitics'
import S2 from '../Slide2/S2';
import S3 from '../Slide3/S3';
import { Link } from 'react-router-dom';


import backgroundImage from '../../multimedia-source/img/wallpaperHouses.jpg';

function Home() {
  return (
    <>
      <div className="w-[85%]">
        <div className='flex flex-col h-[600px] items-center rounded-xl'
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            borderRadius: '15px',
          }}      >
          <h1 className="font-bold p-7 m-5 h-[100px] text-white text-5xl text-center uppercase">Buy and Sell, Rent<br />Cooperate, Property</h1>
          <p className='text-white m-2'> Choice of property options are all here</p>
          <FindHouse />
        </div>
        <div className='grid grid-cols-2 mt-20 mb-20'>
          <div className="flex flex-col items-center">
            <h1 className="text-4xl">We Are Spread All <br /> Over the Archipelago</h1>
            <p className='text-justify p-10 max-w-[700px] ' >At ProtAh, we take pride in offering you a wide selection of properties throughout the archipelago. Whether you are looking for a house, an apartment, or a piece of land, we have got you covered! Our team of highly trained real estate agents is ready to assist you in finding your ideal place.</p>
            <Link to={"/OurProjects"} >
            <GreenButton sms='Our Project' />
            </Link>
          </div>
          <div className=' grid grid-cols-2 grid-rows-2 bg-[#f0f0f0] p-10 rounded-xl justify-center items-center text-center'>
            <div><Analitics number='300+' />Property Options</div>
            <div><Analitics number='48+' />Partners</div>
            <div><Analitics number='52k+' />Customers</div>
            <div><Analitics number='125k+' />Listening Property</div>
          </div>
        </div>
        <S2 />
        <S3 />
      </div>



    </>
  );
}

export default Home;
