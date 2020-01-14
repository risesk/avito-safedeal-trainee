import React, { Component } from "react";
import './form.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      comment: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const name = target.name;
    this.setState({
      [name]: target.value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    fetch("https://boiling-refuge-66454.herokuapp.com/images/" + this.props.cardId + "/comments",{
      method: "POST",
      body: JSON.stringify({
        name: this.state.name,
        comment: this.state.comment,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    })
    .then(data => {
      console.log("Successful request: " + data);
    })
    .catch( (err) => {
      console.log(err);
    });

  }

  render() {

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
          placeholder="Ваше имя"
          value={this.state.name}
          onChange={this.handleChange}
          />
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
          placeholder="Ваш комментарий"
          value={this.state.comment}
          onChange={this.handleChange}
          />
          <span id="error-comment" className="error-message"></span>
        </div>
          <button name="sendComment" className="button" onClick={this.handleSubmit}>Отправить комментарий</button>
      </form>
    )
  }
}

export default Form;
