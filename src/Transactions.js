import React, { Component } from 'react';
import './App.css';
import bingo from './bingo.png'
import Header from "./Header.js"
import BankingBingo from './BankingBingo.js'


class Transactions extends Component {
constructor(props) {
  super(props);
this.state = {
    data: [{"_id":"5bd483d6f0cec56abfa440e0","amount":20,"description":"food","medium":"balance","merchant_id":"57cf75cea73e494d8675ec4a","merchnat_name":"Pastimes Antiques","payee_id":"57cf75cea73e494d8675ec4a","payer_id":"5bd44f84322fa06b67793e85","purchase_date":"2018-10-27","status":"executed","type":"merchant"},{"_id":"5bd487c1f0cec56abfa440e3","amount":99,"description":"everything","medium":"balance","merchant_id":"57cf75cea73e494d8675ec4a","merchnat_name":"Pastimes Antiques","payee_id":"57cf75cea73e494d8675ec4a","payer_id":"5bd44f84322fa06b67793e85","purchase_date":"2018-10-27","status":"executed","type":"merchant"},{"_id":"5bd4c357f0cec56abfa44103","amount":105,"description":"everything","medium":"balance","merchant_id":"57cf75cea73e494d8675ec49","merchnat_name":"Apple","payee_id":"57cf75cea73e494d8675ec49","payer_id":"5bd44f84322fa06b67793e85","purchase_date":"2018-10-27","status":"executed","type":"merchant"},{"_id":"5bd4c357f0cec56abfa44104","amount":10.5,"description":"everything","medium":"balance","merchant_id":"5ade2542f0cec56abfa40730","merchnat_name":"TESCO STORES 2128 ISLEWORTH","payee_id":"5ade2542f0cec56abfa40730","payer_id":"5bd44f84322fa06b67793e85","purchase_date":"2018-10-27","status":"executed","type":"merchant"},{"_id":"5bd4c357f0cec56abfa44105","amount":24.99,"description":"everything","medium":"balance","merchant_id":"5b06eeeff0cec56abfa40907","merchnat_name":"Amazon.com","payee_id":"5b06eeeff0cec56abfa40907","payer_id":"5bd44f84322fa06b67793e85","purchase_date":"2018-10-27","status":"executed","type":"merchant"},{"_id":"5bd4c357f0cec56abfa44106","amount":10.5,"description":"everything","medium":"balance","merchant_id":"57cf75cea73e494d8675edd7","merchnat_name":"Starbucks","payee_id":"57cf75cea73e494d8675edd7","payer_id":"5bd44f84322fa06b67793e85","purchase_date":"2018-10-27","status":"executed","type":"merchant"},{"_id":"5bd4c358f0cec56abfa44107","amount":4.99,"description":"everything","medium":"balance","merchant_id":"57cf75cea73e494d8675edad","merchnat_name":"Subway","payee_id":"57cf75cea73e494d8675edad","payer_id":"5bd44f84322fa06b67793e85","purchase_date":"2018-10-27","status":"executed","type":"merchant"},{"_id":"5bd58b76f0cec56abfa44383","amount":1995,"description":"string","medium":"balance","payer_id":"5bd44f84322fa06b67793e85","status":"cancelled","transaction_date":"2018-10-27","type":"withdrawal"},{"_id":"5bd58bcef0cec56abfa44384","amount":5,"description":"string","medium":"balance","payer_id":"5bd44f84322fa06b67793e85","status":"cancelled","transaction_date":"2018-10-27","type":"withdrawal"},{"_id":"5bd4bc48f0cec56abfa440fd","amount":100,"description":"string","medium":"balance","payee_id":"5bd44f84322fa06b67793e86","payer_id":"5bd44f84322fa06b67793e85","status":"cancelled","transaction_date":"2018-10-27","type":"p2p"},{"_id":"5bd4c4acf0cec56abfa44108","amount":100,"description":"string","medium":"balance","payee_id":"5bd44f84322fa06b67793e86","payer_id":"5bd44f84322fa06b67793e85","status":"cancelled","transaction_date":"2018-10-27","type":"p2p"}],

}
}

componentWillMount(){
    fetch('activity/5bd44f84322fa06b67793e85', {mode: 'no-cors'})
    .then(results=>{
        return results.json();
    }).then(data=>{
        console.log(data)
        this.setState({data: data})
    })

    }




  render() {


    return (
      <div className="App">

      <h1>Transactions</h1>

      <table>
      <thead>
                <th class= "header">Date</th>
                <th class= "header">Transaction Type</th>
                <th class= "header">Merchant Name</th>
                <th class= "header">Transaction Amount (GBP)</th> 
                </thead>
                <tbody>
                {this.state.data.map(transaction =>
                        <tr>
                        <td>{transaction.purchase_date} </td>
                        <td>{transaction.type }</td>
                        <td>{transaction.merchnat_name }</td>
                        <td>{transaction.amount}</td>
                        </tr>
                    )}
                </tbody>
                   


      </table>
      </div>
    );
  }
}

export default Transactions;