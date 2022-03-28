import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";
import { Layout } from "../utilitis/Layout";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { updatePassword } from "firebase/auth";
const AuthContext = React.createContext({
  user: "",
  userId: "",
  layoutFlow: [],
  isLoggedIn: false,
  isEditable: Boolean,
  websiteData: {},
  getWebsiteData: () => {},
  getUserData: () => {},
  getLayoutData: () => {},
  setUserId: () => {},
  updateUser: () => {},
  updateData: () => {},
  updateIsEditable: () => {},
  updateLayout: () => {},
  addLayout: () => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  let navigate = useNavigate();
  const [websiteData, setWebsiteData] = useState(null);
  const [user, setUser] = useState("");
  const [userId, setId] = useState(localStorage.getItem("EditableCampuz"));
  const [layoutData, setLayoutData] = useState(null);
  const [layoutFlow, setLayoutFlow] = useState(null);
  const [isEditable, setIsEditable] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(userId ? true : false);

  useEffect(() => {}, []);
  // function to get user website data
  async function getWebsiteData() {
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
    const docRef = doc(db, "layout", userId);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      let val = docSnap.data();
      setLayoutData(val);
      var newArr = [];
      for (var i = 0; i < val.layout.length; i++) {
        let tempArr = Layout.filter(
          (x) => val.layout[i].id === x.id
        );
        newArr = newArr.concat(tempArr);
      }
      let finalArray = newArr?.map((item, i) =>
        Object.assign({}, item, val.layout[i])
      );
      setLayoutFlow(finalArray);
    } else {
      console.log("No such document!");
    }
  }
  const updateData = (data, Identifier) => {
    if (Array.isArray(data) === true) {
      console.log("Array", Identifier, data);
      websiteData[Identifier] = data;
      // upadte in db
      if (Identifier === "card1") {
        updateDoc(doc(db, "websitedata", userId), {
          card1: data,
        });
      } else if (Identifier === "card2") {
        updateDoc(doc(db, "websitedata", userId), {
          card2: data,
        });
      } else if (Identifier === "slider1") {
        updateDoc(doc(db, "websitedata", userId), {
          slider1: data,
        });
      } else if (Identifier === "gallery1") {
        updateDoc(doc(db, "websitedata", userId), {
          gallery1: data,
        });
      }
    } else {
      console.log("Object");
      let newArr = Object.keys(data);
      var temp = newArr.map((i, index) => {
        websiteData[i] = data[i];
        // update latest webstie data in firebase
        if (i === "heading1") {
          updateDoc(doc(db, "websitedata", userId), {
            heading1: data[i],
          });
        } else if (i === "content1") {
          updateDoc(doc(db, "websitedata", userId), {
            content1: data[i],
          });
        } else if (i === "heading2") {
          updateDoc(doc(db, "websitedata", userId), {
            heading2: data[i],
          });
        } else if (i === "content2") {
          updateDoc(doc(db, "websitedata", userId), {
            content2: data[i],
          });
        } else if (i === "heading3") {
          updateDoc(doc(db, "websitedata", userId), {
            heading3: data[i],
          });
        } else if (i === "content3") {
          updateDoc(doc(db, "websitedata", userId), {
            content3: data[i],
          });
        } else if (i === "heading4") {
          updateDoc(doc(db, "websitedata", userId), {
            heading4: data[i],
          });
        } else if (i === "content4") {
          updateDoc(doc(db, "websitedata", userId), {
            content4: data[i],
          });
        } else if (i === "content5") {
          updateDoc(doc(db, "websitedata", userId), {
            content5: data[i],
          });
        } else if (i === "address") {
          updateDoc(doc(db, "websitedata", userId), {
            address: data[i],
          });
        } else if (i === "phone") {
          updateDoc(doc(db, "websitedata", userId), {
            phone: data[i],
          });
        } else if (i === "email") {
          updateDoc(doc(db, "websitedata", userId), {
            email: data[i],
          });
        }
      });
    }
  };
  const updateUser = (data) => {
    setUser(data);
    updateDoc(doc(db, "users", userId), data);
    // function to update new passsowrd
    if (data.newPassword !== "") {
      updatePassword(auth.currentUser, data.newPassword)
        .then(() => {
          alert("New password was changed");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
  // function to update layout array
  const updateLayout = (data) => {
    setLayoutFlow(data);
    var tempArr = [];
    for (var i = 0; i < data.length; i++) {
      let newData = {
        id: data[i].id,
        uniqId: data[i].uniqId,
      };
      tempArr = tempArr.concat(newData);
    }
    setLayoutData({
      layout: tempArr,
    });
  };
  
  const addLayout = (data) => {
    console.log("Added", data);
    setLayoutFlow((prevState) => {
      return [...prevState, data];
    });
  };

  // toggles between editing
  const updateIsEditable = (data) => {
    setIsEditable(data);
  };
  // function to update & set userId in local storage && session storage
  const setUserId = (uId) => {
    setId(uId); // set userId
    setIsLoggedIn(true);
    sessionStorage.setItem("EditableCampuz", uId);
    localStorage.setItem("EditableCampuz", uId);
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
        layoutData: layoutData,
        isLoggedIn: isLoggedIn,
        isEditable: isEditable,
        updateIsEditable: updateIsEditable,
        getWebsiteData: getWebsiteData,
        getUserData: getUserData,
        getLayoutData: getLayoutData,
        updateUser: updateUser,
        updateData: updateData,
        updateLayout: updateLayout,
        addLayout: addLayout,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
