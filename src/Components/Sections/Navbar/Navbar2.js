import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Loader from "../../../loader/Loader";
import HeaderLogo from "../../../Assests/images/headerlogo.png";
import { ReactComponent as DeleteIcon } from "../../../Assests/delete.svg";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AuthContext from "../../../Context/Context";
const useStyles = makeStyles(() =>
  createStyles({
    rootNav: {
      backgroundColor: "#fff",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
    },
    logoContainer: {
      width: "10%",
      "& img": {
        width: "100%",
        height: "auto",
        objectFit: "contain",
      },
    },
    menuList: {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      width: "65%",
    },
    menuItems: {
      fontItems: "0.9rem",
      color: "#000",
      textTransform: "uppercase",
      padding: "0.5rem 0.75rem",
      marginRight: "0.5rem",
    },
  })
);

export const Navbar2 = (props) => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const classes = useStyles();
  const menuItem = [
    {
      value: "Home",
      id: "home",
    },
    {
      value: "Womens",
      id: "womens",
    },
    {
      value: "Kids",
      id: "kids",
    },
    {
      value: "About",
      id: "About",
    },
    {
      value: "Contact",
      id: "contact",
    },
  ];
  const [localData, setLocalData] = useState(
    ctx.websiteData[props.id] === undefined
      ? menuItem
      : ctx.websiteData[props.id]
  );
  const onSaveHandler = () => {
    ctx.updateData(localData, props.id);
  };
  return (
    <>
      {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
           <button
              className="btn px-5"
              onClick={onSaveHandler}
              style={{
                background: "#fff",
                fontSize:"20px",
                color: "#dc3545",
                borderRadius: "20px",
                boxShadow: "0 3px 6px #00000036",
              }}
            >
              Save<i className="fa fa-save mx-2"></i>{" "}
            </button>
        </div>
      ) : (
        <></>
      )}
      {loading && (
        <>
          <Loader />
        </>
      )}

      <div className={classes.rootNav}>
        <div className={classes.logoContainer}>
          
          <img src={HeaderLogo} alt="headerLogo" />
        </div>
        <div className={classes.menuList}>
          {menuItem.map((item) => (
            <Typography className={classes.menuItems} key={item.id}>
              {item.value}
            </Typography>
          ))}
        </div>
      </div>
    </>
  );
};
