import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Cat1 from "../../../Assests/images/cat1.jpg";
import Cat2 from "../../../Assests/images/cat2.jpg";
import Cat3 from "../../../Assests/images/cat3.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#fff",
      display: "flex",
      padding: "1rem",
    },
    card: {
      position: "relative",
      width: "34%",
      padding: "1rem",
      "& img": {
        maxWidth: "100%",
        height: "auto",
      },
    },
    overlay: {
      position: "absolute",
      display: "flex",
      width: "fit-content",
      height: "fit-content",
      margin: "auto",
      left: 0,
      right: 0,
      bottom: "2rem",
      padding: "2rem",
      background: "#fff",
      "& h6": {
        color: "#000",
        textTransform: "uppercase",
        width: "100%",
        paddingBottom: "1rem",
      },
      "& span": {
        color: "#efefef",
        width: "100%",
      },
    },
  })
);

export const Card3 = () => {
  const classes = useStyles();

  const cardData = [
    {
      img: Cat1,
      title: "Casual Dresses",
      count: "1",
    },
    {
      img: Cat2,
      title: "Evening Dresses",
      count: "1",
    },
    {
      img: Cat3,
      title: "Summer Dresses",
      count: "1",
    },
  ];

  return (
    <>
      <div className={classes.root}>
        {cardData.map((item) => (
          <div className={classes.card}>
            <img src={item.img} alt={item.title} />
            <div className={classes.overlay}>
              <Typography variant="h6">{item.title}</Typography>
              <Typography variant="caption">{item.count}&ensp;items</Typography>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
