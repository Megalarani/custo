import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { Layout } from "../utilitis/Layout";

const AuthContext = React.createContext({
  user: "",
  userId: "",
  layoutFlow: [],
  isLoggedIn: false,
  isEditable: Boolean,
  websiteData: {},
  setUserId: () => {},
  updateData: () => {},
  updateIsEditable: () => {},
  updateLayout: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [websiteData, setWebsiteData] = useState({
    heading1: "Divi Daycare",
    content1:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
    heading2: "About Us",
    content2:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
    heading3: "Come Visit Us",
    content3:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
    heading4: "Our Pre-School. Our Family. Our Community",
    content4:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
  });
  const [user, setUser] = useState("");
  const [userId, setId] = useState("");
  const [layoutFlow, setLayout] = useState(Layout);
  const [isEditable, setIsEditable] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  let navigate = useNavigate();
  const updateData = (data) => {
    let newArr = Object.keys(data);
    var temp = newArr.map((i) => {
      console.log("oldData", websiteData[i]);
      websiteData[i] = data[i];
      console.log("updatedData", data[i]);
    });
  };
  const updateLayout = (data) => {
    setLayout(data);
  };
  const updateIsEditable = (data) => {
    setIsEditable(data);
  };
  const setUserId = (uId) => {
    setIsLoggedIn(true);
    sessionStorage.setItem("EditableCampuz", uId);
    setId(uId);
  };
  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        console.log("Signed out successfully!!!");
        sessionStorage.clear("editablecampuz");
        navigate("/login", { replace: true });
      })
      .catch((e) => console.log(e));
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        userId: userId,
        isLoggedIn: isLoggedIn,
        setUserId: setUserId,
        layoutFlow: layoutFlow,
        logout: logoutHandler,
        updateLayout: updateLayout,
        isEditable: isEditable,
        updateIsEditable: updateIsEditable,
        websiteData: websiteData,
        updateData: updateData,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
