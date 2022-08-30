import './App.css';
import AccountSummary from './components/AccountSummary';
import AddTransaction from './components/AddTransaction';
import Balance from './components/Balance';
import Header from './components/Header';
import {TransactionHistory} from './components/TransactionHistory';
import { GlobalProvider } from './Context/GobalContext';

function App() {
  return (
    <GlobalProvider>
      <Header></Header>
      <div className="container">
      <Balance></Balance>
      <AccountSummary></AccountSummary>
      <TransactionHistory></TransactionHistory>
      <AddTransaction></AddTransaction>
      </div>
    </GlobalProvider>
  );
}

export default App;
