import React, { Component } from 'react';
import './App.css';
import capital from './capital-one-logo-transparent.png'

class Header extends Component {
constructor(props) {
  super(props);
this.state = {
header:true
}
}




  render() {


    return (
<div>
<div className = 'headerContainer'>
        <div className = 'headerTitle'>
          <h1>Bangin' Bankin' Bingo</h1>
          </div>
          <div className = 'headerLogo'> 
          <img src = {capital} alt = "capital" className = "logo"/>
          </div>
          </div>
          <ul className="header">
            <li><a href="/">Home</a></li>
            <li><a href="/Transactions">Transactions</a></li>
            <li><a href="/Payment">Payment</a></li>
          </ul>

</div>
    );
  }
}

export default Header;
