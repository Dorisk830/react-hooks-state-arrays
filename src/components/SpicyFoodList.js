import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleRemoveFood(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  }

  function handleIncreaseHeat(id) {
    const newFoodArray = foods.map((food) =>
      food.id === id ? { ...food, heatLevel: food.heatLevel + 1 } : food
    );
    setFoods(newFoodArray);
  }

  const foodList = foods.map(({ id, name, heatLevel, cuisine }) => (
    <li key={id} style={{ cursor: "pointer" }}>
      {name} | Heat: {heatLevel} | Cuisine: {cuisine}
      <button onClick={() => handleIncreaseHeat(id)}>Increase Heat</button>
      <button onClick={() => handleRemoveFood(id)}>Remove</button>
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
    </div>
  );
}

export default SpicyFoodList;
