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
  let id = localStorage.getItem("editablecampuz");
  return (
    <>
      <div className="main_container row">
        {/* Sidebar */}
        <Sidebar />
        {/* Outlet  */}
        <div className="col-md-9 col-lg-10 right_col p-2" role="main">
          {/* Top Navigation */}
          <Navbar />
          <Routes>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="edit" element={<Edit />}></Route>
            <Route path="layout" element={<Layout />}></Route>
            <Route path="sections" element={<Sections />}></Route>
            <Route path="styleguide" element={<StyleGuide />}></Route>
            <Route index path="dashboard" element={<Landing data={id} />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
