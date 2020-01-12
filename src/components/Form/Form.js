import React from "react";
import './form.css';

export const Form = () => {
  return (
    <form className="form" name="auth">
      <div className="input-container">
        <input
         type="text"
         id="name"
         name="name"
         required
         minLength="2"
         maxLength="15"
         className="input"
         placeholder="Ваше имя" />
        <span id="error-name" className="error-message"></span>
      </div>
      <div className="input-container">
        <input
         type="text"
         id="comment"
         name="comment"
         required
         minLength="1"
         maxLength="20"
         className="input"
         placeholder="Ваш комментарий" />
        <span id="error-comment" className="error-message"></span>
      </div>
        <button name="enter" disabled className="button">Отправить комментарий</button>
    </form>
  )
}
