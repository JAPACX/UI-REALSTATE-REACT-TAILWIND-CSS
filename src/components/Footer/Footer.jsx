import React from "react";
import { Link } from "react-router-dom";
import style from "../Footer/Footer.module.css";
import mail from "../../multimedia-source/Icons/mail.png";
import phone from "../../multimedia-source/Icons/phone.png";
import GreenButton from '../GreenButtom/GreenButton'
import facebook from '../../multimedia-source/Icons/socialmedia/facebook.png'
import Youtube from '../../multimedia-source/Icons/socialmedia/Youtube.png'
import WhatsApp from '../../multimedia-source/Icons/socialmedia/WhatsApp.png'

const sizeIcon = "h-[30px]"


const Footer = () => {
  return (
    <footer className="w-[85%] flex justify-center bg-slate-400 rounded-lg " >
      <div className={style.container}>
        <div className='grid grid-cols-2 p-[15px]'>
          <div className={style.logoInfo}>
            <h2>ProtAh</h2>
            <p>We are a company with 4 years of experience.</p>
            <div className={style.contactInfo}>
              <div className={style.info}>
                <img className={sizeIcon} src={phone} alt="Have a question" />
                <div className={style.contact}>
                  <p>Have a question</p>
                  <h3>310-437-2766</h3>
                </div>
              </div>
              <div className={style.info}>
                <img className={sizeIcon} src={mail} alt="Contact us at" />
                <div className={style.contact}>
                  <p>Contact us at</p>
                  <h3>protah@outlook.es</h3>
                </div>
              </div>
            </div>
          </div>
          <div className={style.newsletter}>
            <h1>Newsletter</h1>
            <p>
              Stay informed and up-to-date with ProtAh's newsletter. Subscribing to our newsletter ensures that you receive exclusive updates on new properties, valuable tips for buying or selling, special events, and industry news.

            </p>
            <form className={style.formulario}>
              <input type="email" id="email" name="email" placeholder="Enter Your Email" />
              <GreenButton sms="Submit" />
            </form>
          </div>
        </div>
        <div className={style.footerLinks}>
          <div className={style.links}>
            <Link to="/about">About Us</Link>
            <Link to="/jobs">Jobs</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/press">Press</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/sitemap">Sitemap</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
          </div>
          <div className={style.socialMedia}>
            <div>
              <img className={sizeIcon} src={facebook} alt="Facebook" />
              <img className={sizeIcon} src={Youtube} alt="Youtube" />
              <img className={sizeIcon} src={WhatsApp} alt="WhatsApp" />
            </div>
            <p className={style.copyRight}>2012-2022, All Rights Reserved</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
