import '../App.css';
import { useContext , useState} from "react";
import { GlobalContext } from '../Context/GobalContext';

function AddTransaction() {
  const [description, setDescription] = useState('');
  const [transactionAmount, setTransactionAmount] = useState('');

  const onSubmit =e =>{
    e.preventDefault();
    const newTransaction = {
      id:new Date().getTime(),
      description,
      transactionAmount: +transactionAmount
    }
    
    addTransaction(newTransaction);
    setDescription('');
    setTransactionAmount('');
  }
  const { addTransaction } = useContext(GlobalContext)
  return (
    <div >
    <h3>Add New Transaction</h3> 
    <form onSubmit={onSubmit}> 
        <div className='form-control'>
        <label htmlFor='description'>Description</label>
        <input type="text" id="description" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Details of Transaction"></input>
        </div>
        <div>
        <label htmlFor='transactionamount'>Transaction Amount</label>
        <input type="number" id="transactionamount"  value={transactionAmount}  onChange={(e) => setTransactionAmount(e.target.value)} placeholder="Enter Transaction Amount"></input>
        </div>
        <button className='btn'>
            Add Transaction
        </button>
    </form>
    </div>
  );
}

export default AddTransaction;