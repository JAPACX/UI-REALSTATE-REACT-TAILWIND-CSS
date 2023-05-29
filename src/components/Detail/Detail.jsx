import React from "react";
import { useState, useEffect } from 'react'
import { useParams, Link } from "react-router-dom";


const principalTitle = "text-5xl	mb-[50px] text-center"
const secondaryTitle = "text-4xl mb-[40px] "
const text = "text-base leading-6 mb-[50px] text-justify m-10 w-[70%]"
const sizePage = "w-[85%] mt-[100px] mb-[100px] flex flex-col items-center"
import database from "../FindHouse/database";


function Detail() {
  const { id } = useParams();

  const [house, setHouse] = useState([]);

  const foundCategory = database.find((item) => {
    return item.categorias.some((categoria) => categoria.id === parseInt(id));
  });

  const houseCat = foundCategory.categorias.find((item) => {
    return item.id === parseInt(id);
  });

  useEffect(() => {
    setHouse(houseCat);
  }, [id]);

  return (
    <div className={sizePage}>
      <h2 className={principalTitle}>{house.categoria}</h2>

      <section className=" text-center flex flex-col items-center"  >
        <h3 className={secondaryTitle} >{foundCategory.tipo}</h3>
        <img src={house.imagen} alt={house.categoria} className="h-[500px] rounded-xl object-cover  " />
        <p className={text}> {house.descripcion} </p>
      </section>
      <Link to={`/Home`}  >
        <button className=" text-center border-[8px] border-blue-500 rounded-full  text-white bg-blue-500">
          Volver Atras
        </button>
      </Link>
    </div>
  );
}

export default Detail;
