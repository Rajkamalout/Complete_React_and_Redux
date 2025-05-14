import React from "react";

const FoodItems = () => {
    //let FoodItems=[]
  let FoodItems = ["Dal", "Green Vegitable", "chawal", "Milk", "Dahi", "salad"];
  return (
    <ul className="list-group">
      {FoodItems.map((items) => (
        <li key={items} className="list-group-item">
          {items}
        </li>
      ))}
    </ul>
  );
};

export default FoodItems;
