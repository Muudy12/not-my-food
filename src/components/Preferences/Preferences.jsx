import React from "react";
import { useNavigate } from "react-router-dom";
import "./Preferences.scss";

function Preferences({ foods, likes, dislikes }) {
  const navigate = useNavigate();

  function goToFood(foodId) {
    navigate(`/preferences/${foodId}`);
  }

  return (
    <main className="main-preferences">
      <div className="preferences-section dis-likes">
        <h2 className="preferences-section__title">Dislike</h2>
        <div className="preferences-section__grid">
          {dislikes !== undefined && dislikes.map((food) => (
            <div key={food.id} className="food-item" onClick={() => goToFood(food.id)}>
              {food.image ? (
                <img
                  src={food.image}
                  alt={food.name}
                  className="food-item__img"
                />
              ) : (
                <div className="food-item__placeholder">No Image</div>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="preferences-section likes">
        <h2 className="preferences-section__title">Like</h2>
        <div className="preferences-section__grid">
          {likes !== undefined && likes.map((food) => (
            <div key={food.id} className="food-item"  onClick={() => goToFood(food.id)}>
              {food.image ? (
                <img
                  src={food.image}
                  alt={food.name}
                  className="food-item__img"
                />
              ) : (
                <div className="food-item__placeholder">No Image</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Preferences;
