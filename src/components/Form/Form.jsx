import React, { Component } from "react";
import './form.css';
import { config } from '../../utils/config';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      comment: "",
      formErrors: { userName: "", comment: "" },
      fieldsValid: { userName: false, comment: false },
      formValid: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    this.setState(
      {[name]: value},
      () => { this.validateField(name, value) }
    );
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let fieldValidationStatus = this.state.fieldsValid;

    if (value.length === 0) {
      fieldValidationErrors[fieldName] = "Это обязательное поле";
      fieldValidationStatus[fieldName] = false;
    } else if (value.length === 1 || value.length > 15) {
      fieldValidationErrors[fieldName] = "Должно быть от 2 до 15 символов";
      fieldValidationStatus[fieldName] = false;
    } else {
      fieldValidationStatus[fieldName] = true;
      fieldValidationErrors[fieldName] = "";
    }

    this.setState({
      formErrors: fieldValidationErrors,
      fieldsValid: fieldValidationStatus,
    },
      this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.fieldsValid.userName && this.state.fieldsValid.comment});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.postComment()
    .then(data => {
      this.clearForm();
      alert("Комментарий отправлен!");
    })
    .catch( (err) => {
      alert(err);
    });
  }

  clearForm() {
    this.setState({
      userName: "",
      comment: "",
      formErrors: { userName: "", comment: "" },
      fieldsValid: { userName: false, comment: false },
      formValid: false
    });
  }

  postComment() {
    return fetch(config.BASE_URL + this.props.cardId + "/comments",
    {
      method: "POST",
      body: JSON.stringify({
        name: this.state.userName,
        comment: this.state.comment,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(res => {
      if (res.ok) {
        return res;
      }
      return Promise.reject(`Ошибка: ${res.status}`);
    });
  }

  render() {

    return (
      <form className="form" name="auth">
        <div className="input-container">
          <input
            type="text"
            name="userName"
            className="input"
            placeholder="Ваше имя"
            value={this.state.userName}
            onChange={this.handleChange}
          />
          <span className="error-message">{this.state.formErrors.userName}</span>
        </div>
        <div className="input-container">
          <input
            type="text"
            name="comment"
            className="input"
            placeholder="Ваш комментарий"
            value={this.state.comment}
            onChange={this.handleChange}
          />
          <span className="error-message">{this.state.formErrors.comment}</span>
        </div>
          <button
            name="sendComment"
            className={`button ${this.state.formValid ? "" : "button_inactive"}`}
            onClick={this.handleSubmit}
            disabled={!this.state.formValid}>
          Отправить комментарий</button>
      </form>
    )
  }
}

export default Form;
