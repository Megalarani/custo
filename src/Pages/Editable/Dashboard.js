import React, { useEffect, useState } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import { db } from "../../services/firebase";
import {
  getDoc,
  setDoc,
  getDocs,
  doc
} from "firebase/firestore";
import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Landing from "./Landing";
import StyleGuide from "./StyleGuide";
import Sections from "./Sections";
import Layout from "./Layout";
import Edit from "./Edit";
import Settings from "./Settings";

const Dashboard = (props) => {
  const [sections, setSections]= useState([])
  const [layoutlist, setLayoutlist]= useState([])

  useEffect(() => {
    getlayout();
    getsections();
   
  }, []);


  async function getsections() {
    const docRef = doc(db, "sections", "AUr5VAcL3OwGlnHrbm5I");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setSections(docSnap.data());
    } else {
      console.log("No Such Document");
    }
  }
  async function getlayout() {
  const docRef = doc(db, "layout", "yprpJe1AkDdPMOqwtgRppoFgX8D3");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setLayoutlist(docSnap.data());
    } else {
      console.log("No Such Document");
    }
  }
  console.log(layoutlist, "ak")
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
