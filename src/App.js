import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Index/Home";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Editable/Dashboard";
import Card2 from "./Components/Sections/Card/Card2";


function App() {
  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:id/*" element={<Dashboard />}></Route>
        </Routes>

      </div>
  );
}

export default App;
