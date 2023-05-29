import React, { useState } from "react";
import { Link } from 'react-router-dom';
import house from "../../multimedia-source/Icons/house.png";
import apartment from "../../multimedia-source/Icons/apartment.png";
import office from "../../multimedia-source/Icons/office.png";
import shop from "../../multimedia-source/Icons/shop.png";
import database from "./database";

const sizeHouses = "h-[100px] w-[100px] rounded-xl object-cover  ";

function FindHouse() {
  const [properties, setProperties] = useState(database[0]);

  const handleButtonClick = (event) => {
    const value = event.target.innerText;
    const foundProperty = database.find((property) => property.tipo === value);
    setProperties(foundProperty);
  };

  return (
    <div className="bg-white w-[700px] h-[250px] flex flex-col justify-center p-10 rounded-xl	">
      <div className="grid grid-cols-4 gap-4 h-[90px] ">
        <div className="flex flex-col items-center">
          <img src={house} alt="House Icon" className="h-12 object-cover" />
          <button onClick={handleButtonClick}
            className="text-black mt-1 hover:text-zinc-400	"
          >
            House
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src={apartment} alt="Apartment Icon" className="h-12" />
          <button
            onClick={handleButtonClick}
            className="text-black mt-1 hover:text-zinc-400"
          >
            Apartment
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src={office} alt="Office Icon" className="h-12" />
          <button
            onClick={handleButtonClick}
            className="text-black mt-1 hover:text-zinc-400"
          >
            Office
          </button>
        </div>

        <div className="flex flex-col items-center">
          <img src={shop} alt="Shophouse Icon" className="h-12" />
          <button
            onClick={handleButtonClick}
            className="text-black mt-1 hover:text-zinc-400"
          >
            Shophouse
          </button>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-4 mt-4">
        {properties.categorias.map((index) => (
          <Link  key={Math.random()}  to={`/detail/${index.id}`}>
            <div className="flex flex-col items-center">
              <img src={index.imagen} className={sizeHouses} />
              <p className="text-center h-[30px] ">{index.categoria}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default FindHouse;
