import React, { Component } from 'react';
import './App.css';
import bingo from './bingo.png'


class Bingo extends Component {
    constructor(props) {
      super(props);
    this.state = {
      bingo: false,
      tasks: [
        {
          "merchant_id": "57cf75cea73e494d8675ec49", 
          "merchant_name": "Apple", 
          "status": true, 
          "task_name": "Spend more than \u00a3100 in a single transaction", 
          "transaction_ammount_min": 100, 
          "type_of_transaction": "purchase"
        }, 
        {
          "merchant_id": "5ade2542f0cec56abfa40730", 
          "merchant_name": "TESCO STORES 2128 ISLEWORTH", 
          "status": true, 
          "task_name": "spend \u00a310 or more at tombola", 
          "transaction_ammount_min": 10, 
          "type_of_transaction": "purchase"
        }, 
        {
          "merchant_id": "5b06eeeff0cec56abfa40907", 
          "merchant_name": "Amazon.com", 
          "status": true, 
          "task_name": "Buy something from Amazon.com", 
          "transaction_ammount_min": 0.01, 
          "type_of_transaction": "purchase"
        }, 
        {
          "merchant_id": "57cf75cea73e494d8675edd7", 
          "merchant_name": "Starbucks", 
          "status": true, 
          "task_name": "Buy coffee at Starbucks", 
          "transaction_ammount_min": 0.01, 
          "type_of_transaction": "purchase"
        }, 
        {
          "merchant_id": "57cf75cea73e494d8675edad", 
          "merchant_name": "Subway", 
          "status": true, 
          "task_name": "Buy lunch from Subway", 
          "transaction_ammount_min": 0.01, 
          "type_of_transaction": "purchase"
        }, 
        {
          "status": true, 
          "task_name": "Send money to savings account", 
          "transaction_ammount_min": 0.01, 
          "type_of_transaction": "transfer"
        }, 
        {
          "status": true, 
          "task_name": "transfer to regular eSaver", 
          "transaction_ammount_min": 0.01, 
          "type_of_transaction": "transfer"
        }, 
        {
          "location": "Sheffield", 
          "merchant_id": "583aadf10fa692b34a9b89f4", 
          "merchant_name": "Balti King", 
          "status": true, 
          "task_name": "Make a purchase in Sheffield", 
          "transaction_ammount_min": 0.01, 
          "type_of_transaction": "purchase"
        }, 
        {
          "status": true, 
          "task_name": "Withdraw some cash", 
          "transaction_ammount_min": 0.01, 
          "type_of_transaction": "withdrawl"
        }
      ]
    };
    // this.handleClick = this.handleClick.bind(this);
    
    }
    
    componentWillMount(){
    fetch('/tasks/update/5bd44f84322fa06b67793e86', {mode: 'no-cors'})
    .then(results=>{
        return results.json();
    }).then(data=>{
        console.log(data)
        this.setState({tasks: data})
        this.isBingo(this.state.tasks)
    })

    }

    
    isitTrue = (task) =>{
      return task.status ==="true"
    }
    
    isBingo = (tasks) =>{
      if((tasks.every(this.isitTrue))===true){
        this.setState({bingo:true})
      }
    }
    
    
    
    
    
      render() {
    
        const row = this.state.tasks.map(function(item) {
    
          if(item.status ===false ){
              return <div className="grid-false"><div className="circle"><p>{item.task_name}</p></div></div>;
          }
          else {
              return <div className="grid-true"><div className="circle"><p>{item.task_name}</p><p>&#10004;</p></div></div>;
          }
      
      })
    
    
        return (
          <div className="bingo">
                    <p>Match all of the tasks to win a prize!</p>
          <div class = "Grid-Container">
          {row}
          </div>
          {
          this.state.bingo ? (
            <img src = {bingo} alt = "bingo"/>
          ):null
          }
          </div>
        );
      }
    }
    
    export default Bingo;
    