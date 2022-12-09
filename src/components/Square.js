import React from "react";
import "./Square.css"

const Square = ({ onClick, value }) => {

    return (
      <button className="square" 
        onClick={onClick}>
        {props.value}
      </button>
    )
}
export default Square;