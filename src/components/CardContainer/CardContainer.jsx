import React, {Component} from 'react';
import './cardContainer.css'
import { config } from '../../utils/config';

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
    fetch(config.BASE_URL)
      .then(res => res.json() )
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

}

export default CardContainer;