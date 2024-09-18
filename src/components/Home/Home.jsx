import React, { useEffect, useRef, useState } from "react";
import xIcon from "../../assets/x.svg";
import checkIcon from "../../assets/check.svg";
import "./Home.scss";

function Home({ foods, setLikes, setDisLikes }) {
  const min = 1;
  const max = 20;
  const [current, setCurrent] = useState();
  const [dataLoaded, setDataLoaded] = useState(false);

  function getNewFood() {
    const newNum = Math.floor(Math.random() * (max - min + 1));
    const newFood = foods.find((f) => f.id == newNum);
    return newFood;
  }

  useEffect(() => {
    setCurrent(getNewFood());
    setDataLoaded(true);
  }, []);

  const handleLikeChange = () => {
    setLikes(current);
    setCurrent(getNewFood()); // Reset current image or load another
  };

  const handleDisLikeChange = () => {
    setDisLikes(current);
    setCurrent(getNewFood()); // Reset current image or load another
  };

  return (
    <main className="main">
      {dataLoaded && (
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
