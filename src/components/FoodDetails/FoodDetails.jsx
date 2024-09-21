import React, { useEffect, useRef, useState } from "react";
import "./FoodDetails.scss";
import { useParams } from "react-router-dom";
import axios from "axios";

function FoodDetails() {
  const baseUrl = "https://not-my-food-api.onrender.com";
  const { id } = useParams();
  const [currentFood, setCurrentFood] = useState({});

  useEffect(() => {
    document.title = "Not My Food - Detail";

    const getDetails = async () => {
      const response = await axios.get(`${baseUrl}/foods/${id}`);
      if (response.data) {
        setCurrentFood(response.data);
      }
    };

    getDetails();
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

    const name = event.target.name.value;
    const comment = event.target.comment.value;

    const postComment = async () => {
      const response = await axios.post(
        `${baseUrl}/foods/${currentFood.id}/comment`,
        { name: name, comment: comment }
      );

      setCurrentFood(response.data);

      event.target.name.value = "";
      event.target.comment.value = "";
    };

    postComment();
  };

  function deleteComment(commentId) {
    const delComment = async () => {
      const response = await axios.delete(
        `${baseUrl}/foods/${currentFood.id}/comments/${commentId}`
      );

      const updatedCurrent = await axios.get(`${baseUrl}/foods/${id}`);
      setCurrentFood(updatedCurrent.data);
    };

    delComment();
  }

  return (
    <main className="details">
      <section className="details__current">
        <img
          className="details__current-image"
          src={currentFood.image}
          alt={currentFood.name}
        />
      </section>
      <form className="details__form" onSubmit={addComment}>
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
        {currentFood &&
          currentFood.comments?.map((comment) => {
            return (
              <div
                className="details__comments-container post"
                key={comment.id}
              >
                <div className="post__headers">
                  <h4 className="post__headers-name">{comment.name}</h4>
                  <h5 className="post__headers-date">
                    {convertTimestamp(comment.date)}
                  </h5>
                </div>
                <div className="post__comment">
                  <p className="post__comment-text">{comment.comment}</p>
                  <button
                    className="post__comment-delete"
                    onClick={() => deleteComment(comment.id)}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            );
          })}
      </section>
    </main>
  );
}

export default FoodDetails;
