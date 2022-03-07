import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Index/Home";
import Login from "./Pages/Login/Login";
import Dashboard from "./Pages/Editable/Dashboard";
<<<<<<< HEAD


=======
import Card2 from "./Components/Sections/Card/Card2";
import { useContext } from "react";
import AuthContext from "./Context/Context";
>>>>>>> a24e538573c0c156decca38bf00bd66b6da18bd8

function App() {
  const ctx = useContext(AuthContext);
  return (
<<<<<<< HEAD
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/:id/*" element={<Dashboard />}></Route>
        </Routes>
      </div>
=======
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route
          path="/:id/*"
          element={ctx.isLoggedIn ? <Dashboard /> : <Navigate to={`/login`} />}
        ></Route>
      </Routes>
    </div>
>>>>>>> a24e538573c0c156decca38bf00bd66b6da18bd8
  );
}

export default App;
