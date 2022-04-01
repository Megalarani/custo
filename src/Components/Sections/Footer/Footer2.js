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
      backgroundColor: "#555",
    },
    row: {
      position: "relative",
      display: "flex",
      padding: "10px",
      flexWrap: "wrap",
    },
    col: {
      width: "33.33%",
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
    '@media (max-width: 600px)': {
      col: {
        width: "100%",
      },
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
      line1: "loerum",
      line2: "loerum",
      line3: "loerum",
      line4: "loerum",
      id: "0",
    },
    {
      //   img: BannerImage2,
      header: "Intro header 2",
      line1: "loerum",
      line2: "loerum",
      line3: "loerum",
      line4: "loerum",
      id: "1",
    },
    {
      //   img: BannerImage2,
      header: "Intro header 2",
      line1: "loerum",
      line2: "loerum",
      line3: "loerum",
      line4: "loerum",
      id: "1",
    },
  ];
  const [localData, setLocalData] = useState(
    ctx.websiteData[props.id] === undefined ? data : ctx.websiteData[props.id]
  );
  const onChangeHandler = (e, details, index) => {
    setLocalData((prevState) => {
      let updatedData = null;
      if (e.target.id === "header") {
        updatedData = {
          ...details,
          header: e.target.value,
        };
      } else if (e.target.id === "line1") {
        updatedData = {
          ...details,
          line1: e.target.value,
        };
      } else if (e.target.id === "line2") {
        updatedData = {
          ...details,
          line2: e.target.value,
        };
      } else if (e.target.id === "line3") {
        updatedData = {
          ...details,
          line3: e.target.value,
        };
      } else if (e.target.id === "line4") {
        updatedData = {
          ...details,
          line4: e.target.value,
        };
      }
      prevState[index] = updatedData;
      return [...prevState];
    });
  };
  const classes = useStyles();
  let editable = (
    <>
      <div className={classes.row}>
        {localData?.map((details, index) => (
          <div key={index} className={classes.col}>
            <input
              onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.introHeader}
              id="header"
              placeholder="header"
              value={details.header}
              style={{ width: "75%" }}
            />
            <div className={classes.divider}></div>
            <ul className={classes.list}>
              <li>
                <input
                  onChange={(e) => onChangeHandler(e, details, index)}
                  className={classes.listText}
                  id="line1"
                  placeholder="line1"
                  value={details.header}
                  style={{ width: "75%" }}
                />
              </li>
              <li>
                <input
                  onChange={(e) => onChangeHandler(e, details, index)}
                  className={classes.introHeader}
                  id="line2"
                  placeholder="line2"
                  value={details.header}
                  style={{ width: "75%" }}
                />
              </li>
              <li>
                <input
                  onChange={(e) => onChangeHandler(e, details, index)}
                  className={classes.introHeader}
                  id="line3"
                  placeholder="line3"
                  value={details.header}
                  style={{ width: "75%" }}
                />
              </li>
              <li>
                <input
                  onChange={(e) => onChangeHandler(e, details, index)}
                  className={classes.introHeader}
                  id="line4"
                  placeholder="line4"
                  value={details.header}
                  style={{ width: "75%" }}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
  const onSaveHandler = () => {
    setloading(true);
    ctx.updateData(localData, props.id);
    setTimeout(() => {
      setloading(false);
    }, 2000);
 
  };

  return (
    <>
      {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
          <div className="saveButton" onClick={onSaveHandler}>
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
      <div className={classes.root}>
        {/* <div>
              <h2 className={classes.introHeader}>Copyrights@layatex.com</h2>
            </div> */}

        {ctx.isEditable ? (
          editable
        ) : (
          <div className={classes.row}>
            {localData?.map((details, index) => (
              <div key={index} className={classes.col}>
                <h2 className={classes.introHeader}>{details.header}</h2>
                <div className={classes.divider}></div>
                <ul className={classes.list}>
                  <li>{details.line1}</li>
                  <li>{details.line2}</li>
                  <li>{details.line3}</li>
                  <li>{details.line4}</li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
