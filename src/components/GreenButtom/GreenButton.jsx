import React from "react";


function GreenButton(props) {
    return (
        <div className="border-2 border-green-500 rounded-full p-1.5 text-white bg-green-500 w-full" >
            <p>{props.sms}</p>
        </div>
    )
}

export default GreenButton;
