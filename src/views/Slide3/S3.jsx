import React from "react";
import GreenButton from '../../components/GreenButtom/GreenButton'
import ApartmentsCities from '../../components/ApartmentsCities/ApartmentsCities'
import { Link } from 'react-router-dom';



//imagenes 
import permata from '../../multimedia-source/cities/permata.jpg'
import cahaya from '../../multimedia-source/cities/cahaya.jpg'
import sharia from '../../multimedia-source/cities/sharia.jpg'
import southgate from '../../multimedia-source/cities/southgate.png'
import setay from '../../multimedia-source/cities/setay.jpg'
import saulgoodman from '../../multimedia-source/profiles/saulgoodman.jpg'

function S3() {
    return (
        <div className='flex flex-col items-center'>
            <div className='grid grid-cols-2 mt-20'>
                <h1 className="text-5xl">Our Recommended Comfortable Residence</h1>
                <div>
                    <p>We take pride in recommending comfortable residences that meet your specific needs. We understand that finding a home that aligns with your lifestyle and preferences is essential. Our expert team evaluates various factors, including location, amenities, and design, to suggest residences that offer comfort, convenience, and a welcoming environment. .</p>
                    <Link to={"/OurProjects"} >
                        <GreenButton sms='See More' />
                    </Link>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-[20px] mt-20'>
                <ApartmentsCities imagen={permata} namecity='Sharia Residence' />
                <ApartmentsCities imagen={cahaya} namecity='SouthGate Apartment' />
                <ApartmentsCities imagen={sharia} namecity='Cahaya Alam Setu' />
                <ApartmentsCities imagen={southgate} namecity='Permata Hijau Suites' />
                <ApartmentsCities imagen={setay} namecity='Setay Apartment' />
            </div>
            <div className="flex justify-center mt-20">
                <div className='bg-[#f6f6f6] w-[60%] rounded-xl p-5 mb-16  flex flex-col items-center justify-center'>
                    <h1 className="m-10 text-4xl text-center ">Testimonials Our Clients</h1>
                    <p className="w-[60%] text-justify">"Working with ProtAh was an absolute pleasure. Their team of dedicated professionals provided exceptional service and guided me through every step of the real estate process. They listened attentively to my requirements and found the perfect property that met all my needs."</p>
                    <div className="flex flex-col items-center" >
                        <img src={saulgoodman} alt="saulgoodman" className="m-3 rounded-full object-cover h-16 w-16" />
                        <h3 className="m-1 text-2xl	">Saul Goodman</h3>
                        <h4 className="m-1">Private Lawyer</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default S3