import React from "react";
import './comments.css';
import timeConverter from '../../utils/convertTime';

export const Comments = (props) => {
  let comments = props.comments;
  if (!comments) return null;

  return (
    <div className="comments-container">
      {comments.map(comment => (
        <div className="comment-content" key={comment.id}>
          <time className="comment-content__date">{timeConverter(comment.date)}</time>
          <p className="comment-content__text">{comment.text}</p>
        </div>
      ))}
    </div>
  )
}
