import React from 'react';
import { Link } from 'react-router-dom';
import mail from '../../multimedia-source/Icons/mail.png';
import phone from '../../multimedia-source/Icons/phone.png';
import GreenButton from '../GreenButtom/GreenButton';
import facebook from '../../multimedia-source/Icons/socialmedia/facebook.png';
import Youtube from '../../multimedia-source/Icons/socialmedia/Youtube.png';
import WhatsApp from '../../multimedia-source/Icons/socialmedia/WhatsApp.png';

const sizeImg = 'h-8 filter invert m-4';

const Footer = () => {
  return (
    <div className="bg-blue-600 w-100%">
      <div className="grid grid-cols-2 gap-2 p-4">
        <div className='grid grid-rows-2'>
          <div>
            <h2 className="text-white">ProtAh</h2>
            <p className="text-white">We are a company with 4 years of experience.</p>
          </div>
          <div className='grid grid-cols-2'>
            <div className="flex items-center">
              <img src={phone} alt="Have a question" className={sizeImg} />
              <div className="ml-2">
                <p className="text-white">Have a question</p>
                <h3 className="text-white">310-437-2766</h3>
              </div>
            </div>
            <div className="flex items-center mt-2">
              <img src={mail} alt="Contact us at" className={sizeImg} />
              <div className="ml-2">
                <p className="text-white">Contact us at</p>
                <h3 className="text-white">protah@outlook.es</h3>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-white">Newsletter</h1>
          <p className="text-white">
            Stay informed and up-to-date with ProtAh's newsletter. Subscribing to our newsletter ensures that you receive exclusive updates on new properties, valuable tips for buying or selling, special events, and industry news.
          </p>
          <form>
            <input type="email" id="email" name="email" placeholder="Enter Your Email" className="w-full px-4 py-2 border rounded-md" />
            <GreenButton sms="Submit" />
          </form>
        </div>
      </div>
      <div>
        <div className="flex justify-center">
          <Link to="/AboutUs" className="text-white mx-2">About Us</Link>
          <Link to="/jobs" className="text-white mx-2">Jobs</Link>
          <Link to="/blog" className="text-white mx-2">Blog</Link>
          <Link to="/press" className="text-white mx-2">Press</Link>
          <Link to="/faq" className="text-white mx-2">FAQ</Link>
          <Link to="/careers" className="text-white mx-2">Careers</Link>
          <Link to="/contact" className="text-white mx-2">Contact</Link>
          <Link to="/privacy-policy" className="text-white mx-2">Privacy Policy</Link>
          <Link to="/sitemap" className="text-white mx-2">Sitemap</Link>
          <Link to="/terms-of-use" className="text-white mx-2">Terms of Use</Link>
        </div>
        <div className='flex justify-center'>
          <div className='flex' >
            <img src={facebook} alt="Facebook" className={sizeImg} />
            <img src={Youtube} alt="Youtube" className={sizeImg} />
            <img src={WhatsApp} alt="WhatsApp" className={sizeImg} />
          </div>
          <p className="text-white mt-4">2012-2022, All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
