import React from "react";
import Analitics from '../../components/Analitics/Analitics'
import image from '../../multimedia-source/img/benefits.jpg'

//import iconos s2
import brookfield from '../../multimedia-source/Icons/Logos/Brookfield.png'
import JLL from '../../multimedia-source/Icons/Logos/JLL.png'
import PARK from '../../multimedia-source/Icons/Logos/PARK.png'
import POTL from '../../multimedia-source/Icons/Logos/POTL.png'
import REGENCY from '../../multimedia-source/Icons/Logos/REGENCY.png'
import WEYER from '../../multimedia-source/Icons/Logos/WEYER.png'


const sizeImg = 'h-[80px] w-auto rounded-xl object-cover'


function S2() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-4xl mb-[20px]">Benefit of Choosing Us</h1>

      <div className='grid  grid-cols-3 justify-center mb-10  '>

        <div className="p-5 bg-slate-100 rounded-l-2xl">
          <Analitics number='01.' />
          <h3 className="mt-5 mb-5 text-3xl" >Access to Exclusive Projects</h3>
          <p className="text-justify" >As a client of ProtAh, you gain the advantage of accessing exclusive and high-value real estate projects. These projects are carefully curated and offer unique opportunities that may not be available to the general public. </p>
        </div>

        <div className="p-5 bg-slate-200">
          <Analitics number='02.' />
          <h3 className="mt-5 mb-5 text-3xl	">Personal Data Privacy is Safe</h3>
          <p className="text-justify" >At ProtAh, we prioritize the security and confidentiality of your personal information. We have robust measures in place to protect your data from unauthorized access, ensuring that your privacy is safeguarded. </p>
        </div>

        <div className="p-5 bg-slate-300 rounded-r-2xl">
          <Analitics number='03.' />
          <h3 className="mt-5 mb-5 text-3xl	">Faster and Easier Transactions</h3>
          <p className="text-justify" > ProtAh streamlines the real estate transaction process, making it faster and easier for you. We leverage technology and efficient systems to expedite the buying, selling, or renting process. </p>
        </div>

      </div>
      <img src={image} alt="image" className="rounded-xl object-cover h-[500px] w-full" />

      <div className="flex justify-center" >

        <img src={brookfield} alt="brookfield" className={sizeImg} />
        <img src={JLL} alt="brookfield" className={sizeImg} />
        <img src={PARK} alt="brookfield" className={sizeImg} />
        <img src={POTL} alt="brookfield" className={sizeImg} />
        <img src={REGENCY} alt="brookfield" className={sizeImg} />
        <img src={WEYER} alt="brookfield" className={sizeImg} />

      </div>
    </div>
  );
}

export default S2;
