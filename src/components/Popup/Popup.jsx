import React, {Component} from 'react';
import './popup.css';
import Form from '../Form/Form';
import {Comments} from '../Comments/Comments';
import { config } from '../../utils/config';

class Popup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      card: {},
      comments: [],
    };
    this.addComment = this.addComment.bind(this);
  }

  getComments (cardId) {
    fetch(config.BASE_URL + cardId)
      .then(res => res.json())
      .then(
        (res) => {
          this.setState({
            isLoaded: true,
            card: res,
            comments: res.comments
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

  addComment(comment) {
    this.setState( {
      comments: this.state.comments.concat(comment),
    });
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
          <Comments comments={this.state.comments} />
          <Form cardId={this.state.card.id} onSend={this.addComment} />
        </div>
      </div>
    );

  }
}

export default Popup;