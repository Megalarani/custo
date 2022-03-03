import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Landing from "./Landing";
import StyleGuide from "./StyleGuide";
import Sections from "./Sections";
import Layout from "./Layout";
import Edit from "./Edit";
import Settings from "./Settings";

const Dashboard = () => {
  const [section, setSection] = useState([]);
  const [layout, setLayout] = useState([]);
  let id = localStorage.getItem("editablecampuz");
  return (
    <>
      <div className="main_container row justify-content-end">
        {/* Sidebar */}
        <Sidebar />
        {/* Outlet  */}
        <div className="col-md-9 col-lg-10 right_col p-0 pl-1" role="main">
          {/* Top Navigation */}
          <Navbar />
          <Routes>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="edit" element={<Edit layout={layout} />}></Route>
            <Route path="layout" element={<Layout layout={layout} />}></Route>
            <Route
              path="sections"
              element={<Sections section={section} />}
            ></Route>
            <Route path="styleguide" element={<StyleGuide />}></Route>
            <Route
              index
              path="dashboard"
              element={<Landing data={id} />}
            ></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
