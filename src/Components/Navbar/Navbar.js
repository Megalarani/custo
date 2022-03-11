import React, { useCallback, useContext, useState } from "react";
import { ReactComponent as LogoutIcon } from "../../Assests/shutdown.svg";
import AuthContext from "../../Context/Context";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const ctx = useContext(AuthContext);
  let name = ctx.user.username;
  const [logoutOverlay, setLogoutOverlay] = useState(false);
  const ProfilePic = (name) => {
    var FirstLetter = name.match(/\b(\w)/g); // returns an array of first letter of each word
    var Profile = FirstLetter.join(""); // joins each letter in an array to form a single word
    return Profile.toUpperCase();
    // console.log(Profile);
  };
  const logoutOverlayHandler = () => {
    setLogoutOverlay((prevState) => {
      return !prevState;
    });
  };
  return (
    <>
      <div
        className="navbar justify-content-end p-2 border-bottom"
        style={{ height: "9vh" }}
      >
        <div className="row w-50 align-items-center justify-content-end position-relative">
          <p className="w-auto text-center">
            Welcome{" "}
            <span
              className="text-uppercase"
              style={{ color: "var(--primary)" }}
            >
              {name}
            </span>
          </p>
          <div className="w-auto text-center ml-2">
            <div className="profile_img" onClick={logoutOverlayHandler}>
              {name && ProfilePic(name)}
            </div>
          </div>
          <div className="w-auto text-center ml-2">
         
            <NavLink to="/${ctx.userId}/settings">
            <i class="fa fa-cog h4 my-1 " style={{color:"#dc3545"}} aria-hidden="true"></i> 
                  </NavLink>
           
          
          </div>
          {logoutOverlay && (

         <button className="logOutButton" onClick={ctx.logout}>
              Logout
              <LogoutIcon style={{ marginLeft: "15px", width: "15%" }} />
            </button>
          )}
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
