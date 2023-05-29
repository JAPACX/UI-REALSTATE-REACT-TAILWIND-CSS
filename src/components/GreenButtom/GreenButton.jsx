import React from "react";


function GreenButton(props) {
    return (
        <button className="m-5 border-2 border-green-500 rounded-full p-1.5 text-white bg-green-500 w-[100px]" >
            <p>{props.sms}</p>
        </button>
    )
}

export default GreenButton;
