import { Routes, Route } from "react-router-dom";
import "./App.css";
import { AppContext } from "./Context/Context";
import { userAuthentication } from "./Context/Context";
import Home from "./Pages/Index/Home";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Editable/Dashboard";

function App() {
  return (
    <AppContext.Provider value={{ userAuthentication }}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:id/*" element={<Dashboard />}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;
