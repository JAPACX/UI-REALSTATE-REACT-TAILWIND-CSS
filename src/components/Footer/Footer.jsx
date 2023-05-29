import React from "react";
import { Link } from "react-router-dom";
import mail from "../../multimedia-source/Icons/mail.png";
import phone from "../../multimedia-source/Icons/phone.png";
import GreenButton from '../GreenButtom/GreenButton'
import facebook from '../../multimedia-source/Icons/socialmedia/facebook.png'
import youtube from '../../multimedia-source/Icons/socialmedia/Youtube.png'
import whatsApp from '../../multimedia-source/Icons/socialmedia/WhatsApp.png'

const Footer = () => {
  return (
    <footer className="w-[85%] bg-[#0284c7] text-white grid grid-rows-2 " >
      <div className="grid grid-cols-2 justify-center h-[200px]">
        <div className="grid items-center justify-center ">
          <h1 className="text-2xl">ProtAh</h1>
          <p>We are a company with 4 years of experience.</p>
          <div className="flex justify-between">
            <div className="flex items-center">
              <img className="h-[20px] m-[15px] invert" src={phone} alt="phone" />
              <div className="flex flex-col">
                <p>Have a question</p>
                <h3>310-437-2766</h3>
              </div>
            </div>
            <div className="flex items-center">
              <img className="h-[20px] m-[15px] invert" src={mail} alt="phone" />
              <div className="flex flex-col ">
                <p>Contact us at</p>
                <h3>protah@outlook.es</h3>
              </div>
            </div>
          </div>
        </div>
        <div className="flex  flex-col justify-center">
          <h1 className="text-2xl m-[10px]">Newsletter</h1>
          <p>Stay informed and up-to-date with ProtAh's newsletter. Subscribing to our newsletter ensures that you receive exclusive updates on new properties, valuable tips for buying or selling, special events, and industry news.</p>
          <form>
            <input className="h-[40px] rounded-lg w-min-[200px] w-[50%]" type="email" id="email" name="email" placeholder="  Enter Your Email" />
            <GreenButton sms="Submit" />
          </form>
        </div>
      </div>

      <div className="grid grid-rows-2 items-center justify-center mt-10  " >
        <div>
          <Link className="m-[5px]" to="/about">About Us</Link>
          <Link className="m-[5px]" to="/jobs">Jobs</Link>
          <Link className="m-[5px]" to="/blog">Blog</Link>
          <Link className="m-[5px]" to="/press">Press</Link>
          <Link className="m-[5px]" to="/faq">FAQ</Link>
          <Link className="m-[5px]" to="/careers">Careers</Link>
          <Link className="m-[5px]" to="/contact">Contact</Link>
          <Link className="m-[5px]" to="/privacy-policy">Privacy Policy</Link>
          <Link className="m-[5px]" to="/sitemap">Sitemap</Link>
          <Link className="m-[5px]" to="/terms-of-use">Terms of Use</Link>
        </div>

        <div className="flex justify-between">
          <div className="flex">
            <Link to="https://api.whatsapp.com/send/?phone=573024507261">
              <img className="h-[20px] invert m-[5px]" src={whatsApp} alt="whatsApp" />
            </Link>
            <Link to="https://www.facebook.com/business/industries/real-estate">
              <img className="h-[20px] invert m-[5px]" src={facebook} alt="facebook" />
            </Link>
            <Link to="https://www.youtube.com/@capitalbrokersluxuryrealestate">
              <img className="h-[20px] invert m-[5px]" src={youtube} alt="youtube" />
            </Link>
          </div>
          <p>2012-2022, All Rights Reserved</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
