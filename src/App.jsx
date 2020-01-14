import React, {Component} from 'react';
import './App.css';
import CardContainer from './components/CardContainer/CardContainer';
import {Header} from './components/Header/Header';
import Popup from './components/Popup/Popup';
import {Footer} from './components/Footer/Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isOpen: false,
      cardId: null,
    };
  }

  handleClick(cardId) {
    this.setState( {
      isOpen: !this.state.isOpen,
      cardId
    });
  }

  onClose() {
    this.setState( {
      isOpen: !this.state.isOpen,
      cardId: null,
    })
  }

  render() {
    return (
      <div className='App'>
        <Header />
        <CardContainer onClick={this.handleClick}  />
        {this.state.isOpen &&
          <Popup
            isOpen={this.state.isOpen}
            cardId={this.state.cardId}
            onClose={() => this.onClose()}
          />
        }
        <Footer />
      </div>
    );
  }
}

export default App;

