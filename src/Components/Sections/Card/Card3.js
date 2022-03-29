import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
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
    editable: {
      background: "transparent",
      outline: 0,
      border: "none",
      textAlign: "center",
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
      flexWrap: "wrap",
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
        textAlign: "center",
        width: "100%",
        paddingBottom: "0.5rem",
      },
      "& p": {
        color: "#ccc",
        width: "100%",
        textAlign: "center",
      },
    },
  })
);

export const Card3 = (props) => {
  console.log(props.id);
  const classes = useStyles();
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
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
  const [localData, setLocalData] = useState(
    ctx.websiteData[props.id] === undefined
      ? cardData
      : ctx.websiteData[props.id]
  );
  console.log(localData, "ak");

  const onChangeHandler = (e, details, index) => {
    setLocalData((prevState) => {
      let updatedData = null;
      if (e.target.id === "title") {
        updatedData = {
          ...details,
          title: e.target.value,
        };
      } else {
        updatedData = {
          ...details,
          count: e.target.value,
        };
      }
      prevState[index] = updatedData;
      return [...prevState];
    });
  };

  console.log(localData, "ak");
  let editable = (
    <div className={classes.root}>
      {localData?.map((details, index) => (
        <div className={classes.card} key={index}>
          <img src={details.img} alt={details.title} />
          <div className={classes.overlay}>
            <input
              key={index}
              onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.editable}
              id="title"
              placeholder="title"
              value={details.title}
            />
            <input
              key={index}
              onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.editable}
              id="count"
              placeholder="count"
              value={details.count}
            />
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <>
      {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
          <div
            className="saveButton"
            onClick={() => {
              setloading(true);
              ctx.updateData(localData, props.id);
              setTimeout(() => {
                setloading(false);
              }, 2000);
            }}
          >
            Save
          </div>
        </div>
      ) : (
        <></>
      )}
      {loading && (
        <>
          <Loader />
        </>
      )}

      {ctx.isEditable ? (
        editable
      ) : (
        <div className={classes.root}>
          {localData.map((item) => (
            <div className={classes.card}>
              <img src={item.img} alt={item.title} />
              <div className={classes.overlay}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body1">{item.count}&ensp;items</Typography>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
