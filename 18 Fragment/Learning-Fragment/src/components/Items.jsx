import React from "react";
import style from "./Items.module.css"
const Items = ({ FoodItems }) => {
  return <li className="list-group-item kg-item"><span className="kg-span">{FoodItems}</span></li>;
};

export default Items;
