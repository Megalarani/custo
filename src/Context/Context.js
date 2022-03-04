import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../services/firebase";

const AuthContext = React.createContext({
  user: "",
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [user, setUser] = useState("");
  let navigate = useNavigate();
  const logoutHandler = () => {
    auth
      .signOut()
      .then(() => {
        console.log("Signed out successfully!!!");
        localStorage.removeItem("editablecampuz");
        navigate("/", { replace: true });
      })
      .catch((e) => console.log(e));
  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        logout: logoutHandler,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
