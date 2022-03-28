import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import HeaderLogo from "../../../Assests/images/headerlogo.png";

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
      justifyContent: "start",
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

export const Navbar2 = () => {
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
  return (
    <>
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
