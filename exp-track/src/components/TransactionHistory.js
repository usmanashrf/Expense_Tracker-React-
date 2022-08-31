import { useContext } from 'react';
import '../App.css';
import { GlobalContext } from '../Context/GobalContext';
import {Transaction} from './Transaction';

export const TransactionHistory =() =>{
   const {transactions} = useContext(GlobalContext);
  return (
    <div >
    <h3>Transaction History</h3>
    <ul className='list'>
                {transactions.map(transaction => 
                    (
                    <Transaction key={transaction.id} transaction={transaction} />
                    )
                )} 

        {/* <li className='minus'>
            Salary Distribution
            <span>-$5000.0</span>
            <button className='delete-btn'>X</button>
        </li> */}
    </ul>
    </div>
  );
}

//export default TransactionHistory;