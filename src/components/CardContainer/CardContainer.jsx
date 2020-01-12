import React, {Component} from 'react';
import './cardContainer.css'

class CardContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      cards: []
    };
  }

  componentDidMount() {
    fetch("https://boiling-refuge-66454.herokuapp.com/images")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            cards: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, cards } = this.state;
    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <div className='card-container'>
          {cards.map(card => (
            <img
              className="card-container__image"
              key={card.id}
              src={card.url}
              onClick={ () => {this.props.onClick(card.id)} } />
          ))}
        </div>
      );
    }
  }
  // () => {this.props.onClick(card.id)}

}

export default CardContainer;