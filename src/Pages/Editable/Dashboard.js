import React, { useContext, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Landing from "./Landing";
import StyleGuide from "./StyleGuide";
import Sections from "./Sections";
import Layout from "./Layout";
import Edit from "./Edit";
import Settings from "./Settings";
import AuthContext from "../../Context/Context";
import Gallery from "./Gallery";

const Dashboard = (props) => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
  
      ctx.getWebsiteData();
      ctx.getUserData();
      ctx.getLayoutData();
      setTimeout(() => {
        ctx.formLayout();
      }, 1000);

  }, []);
 
  return (
    <>
      <div className="main_container row justify-content-end">
        <Sidebar />
        <div className="col-md-9 col-lg-10 right_col p-0 pl-1" role="main">
          {/* Top Navigation */}
          <Navbar />
          <Routes>
            <Route path="settings" element={<Settings />}></Route>
            <Route path="gallery" element={<Gallery />}></Route>
            <Route path="edit" element={<Edit />}></Route>
            <Route path="layout" element={<Layout />}></Route>
            <Route path="sections" element={<Sections />}></Route>
            <Route path="styleguide" element={<StyleGuide />}></Route>
            <Route index path="home" element={<Landing />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
