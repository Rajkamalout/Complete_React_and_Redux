import React from "react";
let FoodItems = ["Dal", "Green Vegitable", "chawal", "Milk", "Dahi", "salad"];

const ErrorMessage = () => {
  return <>{FoodItems.length === 0 ? <h3>I am still Hungry</h3> : null} </>;
};

export default ErrorMessage;
