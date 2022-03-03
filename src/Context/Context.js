import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebase";

// const [user, setUser] = useState(null);

// onAuthStateChanged(auth, (currentuser) => {
//   setUser(currentuser);
// });

const userId = auth.currentUser;
// const navigate = useNavigate();

const userAuthentication = async (event, actionType, data) => {
  event.preventDefault();
  switch (actionType) {
    case "login":
      try {
        signInWithEmailAndPassword(auth, data.email, data.password).then(
          (res) => {
            console.log("success");
            localStorage.setItem("editablecampuz", userId.uid);
            // navigate(`/${userId.uid}/dashboard`);
          }
        );
        // console.log(user);
      } catch (error) {
        alert(error.message);
        console.log(error);
      }
      return;
    case "logout":
      //   setUser();
      localStorage.clear("editablecampuz");
      return;
    default:
      return;
  }
};

export { userAuthentication };
export const AppContext = createContext();
