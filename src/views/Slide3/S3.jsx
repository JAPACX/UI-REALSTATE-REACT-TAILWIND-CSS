import React from "react";
import style from './S3.module.css';
import GreenButton from '../../components/GreenButtom/GreenButton'
import ApartmentsCities from '../../components/ApartmentsCities/ApartmentsCities'

//imagenes 
import permata from '../../multimedia-source/cities/permata.jpg'
import cahaya from '../../multimedia-source/cities/cahaya.jpg'
import sharia from '../../multimedia-source/cities/sharia.jpg'
import southgate from '../../multimedia-source/cities/southgate.png'
import setay from '../../multimedia-source/cities/setay.jpg'
import saulgoodman from '../../multimedia-source/profiles/saulgoodman.jpg'

function S3() {
    return (
        <div className={style.container}>
            <div className={style.sup}>
                <h1>Our Recommended Comfortable Residence</h1>
                <div>
                    <p>We take pride in recommending comfortable residences that meet your specific needs. We understand that finding a home that aligns with your lifestyle and preferences is essential. Our expert team evaluates various factors, including location, amenities, and design, to suggest residences that offer comfort, convenience, and a welcoming environment. .</p>
                    <GreenButton sms='See more' />
                </div>
            </div>
            <div className={style.cities}>
                <ApartmentsCities imagen={permata} namecity='Sharia Residence' />
                <ApartmentsCities imagen={cahaya} namecity='SouthGate Apartment' />
                <ApartmentsCities imagen={sharia} namecity='Cahaya Alam Setu' />
                <ApartmentsCities imagen={southgate} namecity='Permata Hijau Suites' />
                <ApartmentsCities imagen={setay} namecity='Setay Apartment' />
            </div>
            <div className={style.testimonials}>
                <h1>Testimonials Our Clients</h1>
                <p>"Working with ProtAh was an absolute pleasure. Their team of dedicated professionals provided exceptional service and guided me through every step of the real estate process. They listened attentively to my requirements and found the perfect property that met all my needs."</p>
                <div className={style.employee} >
                    <img src={saulgoodman} alt="saulgoodman" />
                    <h3>Saul Goodman</h3>
                    <h4>Private Lawyer</h4>
                </div>
            </div>
        </div>
    )
}

export default S3