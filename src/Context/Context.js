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
    content5:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
    card1: [
      {
        heading: "Enrollement",
        content:
          "It is a long established fact that a reader will be distracted",
      },
      {
        heading: "Curriculam",
        content:
          "It is a long established fact that a reader will be distracted",
      },
      {
        heading: "Programs",
        content:
          "It is a long established fact that a reader will be distracted",
      },
    ],
    card2: [
      {
        heading: "Reading / Write",
        content:
          "It is a long established fact that a reader will be distracted",
      },
      {
        heading: "Maths / Science",
        content:
          "It is a long established fact that a reader will be distracted",
      },
      {
        heading: "Art",
        content:
          "It is a long established fact that a reader will be distracted",
      },
      {
        heading: "Critical Thinkning",
        content:
          "It is a long established fact that a reader will be distracted",
      },
    ],
    slider1: [
      {
      
        content:
          "It is a long established fact that a reader will be distracted1",
      },
      {
      
        content:
          "It is a long established fact that a reader will be distracted2",
      },
      {
       
        content:
          "It is a long established fact that a reader will be distracted3",
      },
    ],
    gallery1: [
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
    ],
  
    address: "xxx, yyy, zzz - 123123",
    phone: "99887 766554",
    email: "sample@gmail.com",
  });
  const [user, setUser] = useState("");
  const [userId, setId] = useState(localStorage.getItem("EditableCampuz"));
  const [layoutFlow, setLayout] = useState(Layout);
  const [isEditable, setIsEditable] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(userId ? true : false);
  let navigate = useNavigate();
  console.log(userId, isLoggedIn);
  useEffect(() => {}, []);
  const updateData = (data, Identifier) => {
    if (Array.isArray(data) === true) {
      console.log("Array", Identifier, data);
      websiteData[Identifier] = data;
      console.log("updatedData", websiteData[Identifier]);
    } else {
      console.log("Object");
      let newArr = Object.keys(data);
      var temp = newArr.map((i) => {
        console.log("oldData", websiteData[i]);
        websiteData[i] = data[i];
        console.log("updatedData", data[i]);
      });
    }
  };
  console.log(websiteData, "info");
  const updateLayout = (data) => {
    setLayout(data);
  };
  const updateIsEditable = (data) => {
    setIsEditable(data);
  };
  const setUserId = (uId) => {
    setIsLoggedIn(true);
    sessionStorage.setItem("EditableCampuz", uId);
    localStorage.setItem("EditableCampuz", uId);
    setId(uId);
  };
  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
        console.log("Signed out successfully!!!");
        sessionStorage.clear("editablecampuz");
        localStorage.clear("editablecampuz");
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
