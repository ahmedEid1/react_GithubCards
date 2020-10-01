import React from 'react';
import logo from './logo.svg';
import './App.css';

class Card extends React.Component {
  render() {
    return (
        <div className="github-profile">
            <img src="https://placehold.it/75" />
            <div className="info">
                <div className="name">name</div>
                <div className="company">company</div>
            </div>
        </div>
    )
  }
}


class App extends React.Component {
  render() {
    return (
        <div>
          <div className="header">{this.props.title}</div>
          <Card />
        </div>
    )

  }
}


export default App;
