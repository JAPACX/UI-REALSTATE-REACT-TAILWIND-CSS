import React from "react";

function ApartmentsCities(props) {
    return (
      <div className="relative">
        <img
          className="h-auto min-h-[300px] max-h-[700px] rounded-lg z-10 object-cover"
          src={props.imagen}
          alt={props.namecity}
        />
        <div className="h-[60px] rounded-lg absolute bottom-0 left-0 z-20  w-full text-center bg-gradient-to-r from-[#166534] to-transparent">
          <p className="text-white px-4 py-2 h-30px font-semibold ">{props.namecity}</p>
        </div>
      </div>
    );
  }
  
  export default ApartmentsCities;
  
  