import React from "react";
import { Link } from 'react-router-dom';
import icon from '../../multimedia-source/Icons/Icon.png'

// Clase Global para los Links
const linkClass = "m-2.5";

function Nav(props) {
  return (
    <div className="">

<nav className='flex justify-between items-center'>
      <div className="m-12">
        <Link to={"/Home"} className={linkClass}>
          <button>Home</button>
        </Link>

        <Link to={"/Buy"} className={linkClass}>
          <button>Buy</button>
        </Link>

        <Link to={"/SellAndRent"} className={linkClass}>
          <button>Sell and Rent</button>
        </Link>

        <Link to={"/OurProjects"} className={linkClass}>
          <button>Our Projects</button>
        </Link>
      </div>

      <div className='flex justify-between items-center'>
        <img src={icon} alt="Icono" className="h-11" />
        ProtAh
      </div>

      <div className="m-12">
        <Link to={"/JoinWithUs"} className={linkClass}>
          <button>Join with Us</button>
        </Link>

        <Link to={"/Contact"} className={linkClass}>
          <button>Contact</button>
        </Link>

        <Link to={"/AboutUs"} className={linkClass}>
          <button>About Us</button>
        </Link>

        <button
          className="border-2 border-green-500 rounded-full p-1.5 text-white bg-green-500"
          onClick={() => { props.setAccess(false) }}
        >
          Log Out
        </button>
      </div>
    </nav>

    </div>
    
  );
}

export default Nav;
