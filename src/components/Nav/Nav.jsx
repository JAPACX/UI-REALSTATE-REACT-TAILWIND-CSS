import React from "react";
import { Link } from 'react-router-dom';
import Icon from '../../multimedia-source/Icons/Icon.png'


function Nav(props) {
  return (
    <nav className='flex justify-around w-full items-center h-[70px]'>
      <div className=' grid grid-cols-4 w-[40%] items-center text-center'>
        <Link to={"/Home"} >
          <button>Home</button>
        </Link>
        <Link to={"/Buy"} >
          <button>Buy</button>
        </Link>
        <Link to={"/SellAndRent"} >
          <button>Sell and Rent</button>
        </Link>
        <Link to={"/OurProjects"} >
          <button>Our Projects</button>
        </Link>
      </div>

      <div className='flex items-center'>
        <img src={Icon} alt="Icono" className="h-11" />
        <p>ProtAh</p>
      </div>

      <div className=' grid grid-cols-4 w-[40%] items-center text-center'>
        <Link to={"/JoinWithUs"} >
          <button>Join with Us</button>
        </Link>

        <Link to={"/Contact"} >
          <button>Contact</button>
        </Link>

        <Link to={"/AboutUs"} >
          <button>About Us</button>
        </Link>

        <button
          className="border-[6px] border-green-500 rounded-full  text-white bg-green-500"
          onClick={() => { props.setAccess(false) }}
        >
          Log Out
        </button>
      </div>
    </nav>



  );
}

export default Nav;
