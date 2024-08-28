import React, { useRef } from "react";
import "./FoodDetails.scss";

function FoodDetails() {
  let imgSrc =
    "https://media.post.rvohealth.io/wp-content/uploads/2021/09/sushi-sashimi-732x549-thumbnail-732x549.jpg";
  let imgAlt = "Sushi image";
  const commentForm = useRef();

  const comments = [
    {
      id: "1",
      name: "Mu",
      date: Date.now(),
      comment: "This is a comment.",
    },
    {
      id: "2",
      name: "Dah",
      date: Date.now(),
      comment: "This is a comment 2.",
    },
  ];

  function convertTimestamp(timestamp){
    const date = new Date(timestamp);

    const day = date.getDay();
    const dayWithLeadingZero = day < 10 ? `0${day}` : day;
    const month = date.getMonth();
    const year = date.getFullYear();

    return `${dayWithLeadingZero}/${month}/${year}`;
  }

  return (
    <div className="details">
      <section className="details__current">
        <img className="details__current-image" src={imgSrc} alt={imgAlt} />
      </section>
      <form
        ref={commentForm}
        className="details__form"
        onSubmit={(e) => e.preventDefault()}
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
        {comments.map((comment) => {
          return (
            <div className="details__comments-container post" key={comment.id}>
              <div className="post__headers">
                <h4 className="post__headers-name">{comment.name}</h4>
                <h5 className="post__headers-date">{convertTimestamp(comment.date)}</h5>
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
