import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import clsx from "clsx";
import { fontSize, margin, textAlign } from "@mui/system";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
        backgroundColor: "#555"
    },
    row: {
      position: "relative",
      display: "flex",
      padding: "10px",
    },
    col: {
      width: "25%",
    },
    divider: {
      height: "5px",
      width: "40%",
      backgroundColor: "white",
      margin: "auto",
    },
    introHeader: {
      textAlign: "center",
      color: "white",
      fontSize: "30px",
    },
    list: {
      margin: "10px",
      listStyle: "none",
      fontSize: "25px",
      color: "white",
      textAlign: "center",
    },
  })
);

export const Footer2 = (props) => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = [
    {
      //   img: BannerImage1,
      header: "Intro header 1",
      para: "loerum ipsum is a dummy language for website content writing",
      id: "0",
    },
    {
      //   img: BannerImage2,
      header: "Intro header 2",
      para: "loerum ipsum is a dummy language for website content writing and adiitonal purposes",
      id: "1",
    },
  ];
  const [localData, setLocalData] = useState(
    ctx.websiteData[props.id] === undefined ? data : ctx.websiteData[props.id]
  );
  const classes = useStyles();
  return (
    <>
      <div className={classes.root}>
        <div className={classes.row}>
          <div className={classes.col}>
            <h2 className={classes.introHeader}>Header</h2>
            <div className={classes.divider}></div>
            <ul className={classes.list}>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
          <div className={classes.col}>
            <h2 className={classes.introHeader}>Header</h2>
            <div className={classes.divider}></div>
            <ul className={classes.list}>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
          <div className={classes.col}>
            <h2 className={classes.introHeader}>Header</h2>
            <div className={classes.divider}></div>
            <ul className={classes.list}>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </div>
          <div className={classes.col} style={{ width: "25%" }}>
            <h2 className={classes.introHeader}>Header</h2>
            <div className={classes.divider}></div>
          </div>
        </div>
        <div>
          <h2 className={classes.introHeader}>Copyrights@layatex.com</h2>
        </div>
      </div>
    </>
  );
};
