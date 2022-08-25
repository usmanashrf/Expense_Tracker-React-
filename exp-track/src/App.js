import './App.css';
import AccountSummary from './components/AccountSummary';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import TransactionHistory from './components/TransactionHistory';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="container">
      <Balance></Balance>
      <AccountSummary></AccountSummary>
      <TransactionHistory></TransactionHistory>
      <AddTransaction></AddTransaction>
      </div>
    </div>
  );
}

export default App;
