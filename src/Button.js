import React from "react";

const Button = ({buttonText}, {href})=> {
    return (
        <span style = {{textAlign: "center"}}>
            <button className = "button"> 
                <a href = "{href}" target="_blank"> 
                    {buttonText} 
                </a>
            </button>
        </span>
    )
}

export default Button;