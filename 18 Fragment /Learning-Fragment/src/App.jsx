import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./assets/components/FoodItems";

function App() {
  // let FoodItems = [];
  //let FoodItems = ["Dal", "Green Vegitable", "chawal", "Milk", "Dahi", "salad"];
  // if (FoodItems.length === 0) {
  //   return <h3>i am still hungry </h3>;
  // }
  return (
    <>
      <h1>Healthy Food</h1>
      {/* {FoodItems.length === 0 && <h3>i am still Hungry </h3>} */}
      <FoodItems></FoodItems>
     
    </>
  );
}

export default App;
