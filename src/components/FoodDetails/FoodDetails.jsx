import React, { useEffect, useRef, useState } from "react";
import "./FoodDetails.scss";
import { useParams } from "react-router-dom";

function FoodDetails({ foods }) {
  const commentForm = useRef();
  const { id } = useParams();
  const [currentFood, setCurrentFood] = useState(foods[0]);

  useEffect(() => {
    setCurrentFood(foods.find((f) => f.id === id));
  }, [id]);

  function convertTimestamp(timestamp) {
    const date = new Date(timestamp);

    const day = date.getDay();
    const dayWithLeadingZero = day < 10 ? `0${day}` : day;
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${dayWithLeadingZero}/${month}/${year}`;
  }

  const addComment = (event) => {
    event.preventDefault();
  }

  return (
    <div className="details">
      <section className="details__current">
        <img
          className="details__current-image"
          src={currentFood.image}
          alt={currentFood.name}
        />
      </section>
      <form
        ref={commentForm}
        className="details__form"
        onSubmit={addComment}
      >
        <input
          type="text"
          id="name"
          name="name"
          data-label="NAME"
          placeholder="Enter your name here."
        />
        <textarea
          type="text"
          id="comment"
          name="comment"
          data-label="COMMENT"
          placeholder="Enter your comment here."
        />
        <button type="submit">COMMENT</button>
      </form>
      <section className="details__comments">
        {currentFood.comments.map((comment) => {
          return (
            <div className="details__comments-container post" key={comment.id}>
              <div className="post__headers">
                <h4 className="post__headers-name">{comment.name}</h4>
                <h5 className="post__headers-date">
                  {convertTimestamp(comment.date)}
                </h5>
              </div>
              <div className="post__comment">
                <button className="post__comment-delete">DELETE</button>
                <p className="post__comment-text">{comment.comment}</p>
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default FoodDetails;
