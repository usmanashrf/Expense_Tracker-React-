import React,{useContext} from 'react';
import '../App.css';

import { GlobalContext } from '../Context/GobalContext';

function Balance() {
  const {transactions} = useContext(GlobalContext);
  const amounts = transactions.map( transaction => transaction.transactionAmount);
  const total = amounts.reduce((acc,item) => (acc += item), 0).toFixed(2);
  return (
    <div >
    <h4>  Current Balance</h4> 
    <h1>${total}</h1>
    </div>
  );
}

export default Balance;