import '../App.css';

function AddTransaction() {
  return (
    <div >
    <h3>Add New Transaction</h3> 
    <form> 
        <div className='form-control'>
        <label htmlFor='description'>Description</label>
        <input type="text" id="description" placeholder="Details of Transaction"></input>
        </div>
        <div>
        <label htmlFor='transactionamount'>Transaction Amount</label>
        <input type="number" id="transactionamount" placeholder="Enter Transaction Amount"></input>
        </div>
        <button className='btn'>
            Add Transaction
        </button>
    </form>
    </div>
  );
}

export default AddTransaction;