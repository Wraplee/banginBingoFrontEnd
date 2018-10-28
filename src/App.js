import React, { Component } from 'react';
import './App.css';
import bingo from './bingo.png'
import Header from "./Header.js"
import BankingBingo from './BankingBingo.js'
import Main from './Main.js'

class App extends Component {
constructor(props) {
  super(props);
this.state = {
 

}
}

  render() {


    return (
      <div className="App">
      <Header />
      <Main />
      </div>
    );
  }
}

export default App;
