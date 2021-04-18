import "./App.css";
import Balance from "./Components/Balance";
import Header from "./Components/Header";
import IncomeExpense from "./Components/IncomeExpense";
import TransationList from "./Components/TransationList";
import AddTransation from "./Components/AddTransation";

import { GlobalProvider } from "./context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpense />
        <TransationList />
        <AddTransation />
      </div>
    </GlobalProvider>
  );
}

export default App;
