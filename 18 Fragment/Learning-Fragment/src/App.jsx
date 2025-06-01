import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./components/FoodItems"
import ErrorMessage from "./components/ErrorMessage";

function App() {
  //let FoodItem = [];
  let FoodItem = ["Dal", "Green Vegitable", "chawal", "Milk", "Dahi", "salad"];
  // if (FoodItems.length === 0) {
  //   return <h3>i am still hungry </h3>;
  // }
  return (
    <>
      <h1 className="Food-Heading">Healthy Food</h1>
      {/* {FoodItems.length === 0 && <h3>i am still Hungry </h3>} */}
      <FoodItems items={FoodItem}></FoodItems>
      <ErrorMessage items={FoodItem}></ErrorMessage>
     
    </>
  );
}

export default App;
