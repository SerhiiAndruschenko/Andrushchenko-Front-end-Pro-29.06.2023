import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import Account from "./components/Account/Account";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="account/:userId" element={<Account />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
