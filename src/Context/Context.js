import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { Layout } from "../utilitis/Layout";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebase";

const AuthContext = React.createContext({
  user: "",
  userId: "",
  layoutFlow: [],
  isLoggedIn: false,
  isEditable: Boolean,
  websiteData: {},
  getWebstieData: () => {},
  getUserData: () => {},
  getLayoutData: () => {},
  setUserId: () => {},
  updateUser: () => {},
  updateData: () => {},
  updateIsEditable: () => {},
  updateLayout: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let navigate = useNavigate();
  const [websiteData, setWebsiteData] = useState(null);
  const [user, setUser] = useState("");
  const [userId, setId] = useState(localStorage.getItem("EditableCampuz"));
  const [layoutFlow, setLayout] = useState(Layout);
  const [isEditable, setIsEditable] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(userId ? true : false);
  console.log(userId, isLoggedIn);
  useEffect(() => {}, []);
  // function to get user website data
  async function getWebstieData() {
    console.log("getWebstieData");
    const docRef = doc(db, "websitedata", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setWebsiteData(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  // function to get user data
  async function getUserData() {
    console.log("getUserData");
    const docRef = doc(db, "users", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setUser(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  // function to get user website layout information
  async function getLayoutData() {
    console.log("getLayoutData");
    const docRef = doc(db, "layout", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setLayout(docSnap.data());
    } else {
      console.log("No such document!");
    }
  }
  console.log(websiteData, user, layoutFlow, "info");
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
    // update latest webstie data in firebase
  };
  const updateUser = (data) => {
    setUser(data);
  }
  // function to update layout array
  const updateLayout = (data) => {
    setLayout(data);
  };
  // toggles between editing
  const updateIsEditable = (data) => {
    setIsEditable(data);
  };
  // function to update & set userId in local storage && session storage
  const setUserId = (uId) => {
    setIsLoggedIn(true);
    sessionStorage.setItem("EditableCampuz", uId);
    localStorage.setItem("EditableCampuz", uId);
    setId(uId); // set userId
  };
  // logout function
  const logoutHandler = () => {
    auth
      .signOut() // end user session in firebase
      .then(() => {
        setIsLoggedIn(false);
        setId(); // empty user Id
        console.log("Signed out successfully!!!");
        sessionStorage.clear("editablecampuz"); // removes item from session storage
        localStorage.clear("editablecampuz"); // removes item from local storage
        navigate("/login", { replace: true });
      })
      .catch((e) => console.log(e));
  };

  return (
    <AuthContext.Provider
      value={{
        setUserId: setUserId,
        logout: logoutHandler,
        userId: userId,
        user: user,
        websiteData: websiteData,
        layoutFlow: layoutFlow,
        isLoggedIn: isLoggedIn,
        isEditable: isEditable,
        updateIsEditable: updateIsEditable,
        getWebstieData: getWebstieData,
        getUserData: getUserData,
        getLayoutData: getLayoutData,
        updateUser: updateUser,
        updateData: updateData,
        updateLayout: updateLayout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
