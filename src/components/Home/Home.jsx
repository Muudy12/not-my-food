import React, { useEffect, useState } from "react";
import xIcon from "../../assets/x.svg";
import checkIcon from "../../assets/check.svg";
import "./Home.scss";
import axios from "axios";

function Home({ setLikes, setDisLikes }) {
  const baseUrl = "https://not-my-food-api.onrender.com";
  const min = 1;
  const max = 20;
  const [current, setCurrent] = useState({});
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    document.title = "Not My Food - Choices";

    const getFoods = async () => {
      const response = await axios.get(`${baseUrl}/foods`);
      if (response.data){
        setFoods(response.data);
        getNewFood(response.data);
      }
    }

    getFoods();
  }, []);

  function getNewFood(foods) {
    const newNum = Math.floor(Math.random() * (max - min + 1));
    const newFood = foods.find((f) => f.id == newNum);
    if (newFood) {
      setCurrent(newFood);
    }
  }

  const handleLikeChange = () => {
    setLikes(current);
    getNewFood(foods); // Reset current image or load another
  };

  const handleDisLikeChange = () => {
    setDisLikes(current);
    getNewFood(foods); // Reset current image or load another
  };

  return (
    <main className="main">
      {current && (
        <SectionDiv
          handleDisLikeChange={handleDisLikeChange}
          handleLikeChange={handleLikeChange}
          image={current.image}
        />
      )}
    </main>
  );
}

function SectionDiv({ handleDisLikeChange, handleLikeChange, image }) {
  return (
    <>
      <div className="main__container-image">
        <img
          className="main__image"
          alt="photo of food to like or dislike"
          src={image}
        />
      </div>

      <div className="main__container">
        <button className="main__btn" onClick={handleDisLikeChange}>
          <img className="main__btn-img" src={xIcon} alt="image of x" />
        </button>

        <button className="main__btn" onClick={handleLikeChange}>
          <img src={checkIcon} alt="image of checkmark" />
        </button>
      </div>
    </>
  );
}

export default Home;
