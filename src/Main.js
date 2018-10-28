import { Switch, Route } from 'react-router-dom'
import BankingBingo from './BankingBingo.js'
import Transactions from './Transactions'
import React, { Component } from 'react';

class Main extends Component{
    render() {
        return (
    <main>
      <Switch>
        <Route exact path='/' component={BankingBingo}/>
        <Route path='/Transactions' component={Transactions}/>
      </Switch>
    </main>
        )
    }
}
  
export default Main;
