import '../App.css';

function TransactionHistory() {
  return (
    <div >
    <h3>Transaction History</h3> 
    <ul className='list'>
        <li className='plus'>
            Project First income
            <span>$1000.0</span>
            <button className='delete-btn'>X</button>
        </li>
        <li className='minus'>
            Salary Distribution 
            <span>-$5000.0</span>
            <button className='delete-btn'>X</button>
        </li>
    </ul>
    </div>
  );
}

export default TransactionHistory;