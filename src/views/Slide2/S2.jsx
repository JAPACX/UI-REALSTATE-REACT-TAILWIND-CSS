import React from "react";
import style from './S2.module.css';
import Analitics from '../../components/Analitics/Analitics'
import image from '../../multimedia-source/img/benefits.jpg'

//import iconos s2
import brookfield from '../../multimedia-source/Icons/Logos/Brookfield.png'
import JLL from '../../multimedia-source/Icons/Logos/JLL.png'
import PARK from '../../multimedia-source/Icons/Logos/PARK.png'
import POTL from '../../multimedia-source/Icons/Logos/POTL.png'
import REGENCY from '../../multimedia-source/Icons/Logos/REGENCY.png'
import WEYER from '../../multimedia-source/Icons/Logos/WEYER.png'

function S2() {
  return (
    <>
      
      <h1>Benefit of Choosing Us</h1>

      <div className={style.benefits}>

        <div>
          <Analitics number='01.' />
          <h3>Access to Exclusive Projects</h3>
          <p>As a client of ProtAh, you gain the advantage of accessing exclusive and high-value real estate projects. These projects are carefully curated and offer unique opportunities that may not be available to the general public. </p>
        </div>

        <div>
          <Analitics number='02.' />
          <h3>Personal Data Privacy is Safe</h3>
          <p>At ProtAh, we prioritize the security and confidentiality of your personal information. We have robust measures in place to protect your data from unauthorized access, ensuring that your privacy is safeguarded. </p>
        </div>

        <div>
          <Analitics number='03.' />
          <h3>Faster and Easier Transactions</h3>
          <p> ProtAh streamlines the real estate transaction process, making it faster and easier for you. We leverage technology and efficient systems to expedite the buying, selling, or renting process. </p>
        </div>

      </div>
      <img src={image} alt="image" className={style.image} />

      <div className={style.icons}> 

      <img src={brookfield} alt="brookfield" className={style.image} />
      <img src={JLL} alt="brookfield" className={style.image} />
      <img src={PARK} alt="brookfield" className={style.image} />
      <img src={POTL} alt="brookfield" className={style.image} />
      <img src={REGENCY} alt="brookfield" className={style.image} />
      <img src={WEYER} alt="brookfield" className={style.image} />

      </div>
    </>
  );
}

export default S2;
