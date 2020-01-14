import React, {Component} from 'react';
import './popup.css';
import Form from '../Form/Form';
import {Comments} from '../Comments/Comments';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      card: {}
    };
  }

  getComments (cardId) {
    fetch("https://boiling-refuge-66454.herokuapp.com/images/" + cardId)
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            card: res
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            cardId,
            error
          });
        }
      )
  }

  render() {
    if (!this.props.isOpen) {
      return null;
    }

    const prevCardId = this.state.card.id
    if (this.props.cardId !== prevCardId) {
      this.getComments(this.props.cardId)
    }

    return (
      <div className = "popup">
        <div className="popup__content">
          <img src={"./public/images/close.svg"}
            alt={""}
            className="popup__close"
            onClick={this.props.onClose}
          />
          <img
            src={this.state.card.url}
            alt={"Изображение заруженное с сервера"}
            className="popup__image"
          />
          <Comments comments={this.state.card.comments} />
          <Form cardId={this.state.card.id} onClick={() => this.sendForm()} />
        </div>
      </div>
    );

  }
}

export default Popup;