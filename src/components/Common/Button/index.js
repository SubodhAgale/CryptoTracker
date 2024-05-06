import React from "react";
import './style.css';

function Button({text,onClick,outline}){

    return (
        <div className={outline ? "outline-btn" : "btn"} >
            {text}
        </div>
    )
}

export default Button;