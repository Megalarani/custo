import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import clsx from "clsx";
import Cat3 from "../../../Assests/images/cat3.jpg";
import { fontSize, margin, textAlign } from "@mui/system";
import "./Slider2.css";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      backgroundColor: "rgb(233, 150, 150)",
      fontFamily: "Open Sans",
    },
    carouselCaption: {
      position: "initial",
      zIndex: "10",
      padding: "5rem 8rem",
      color: "rgba(78, 77, 77, 0.856)",
      textAlign: "center",
      fontSize: "1.2rem",
      fontStyle: "italic",
      fontWeight: "bold",
      lineHeight: "2rem",
    },
    editable: {
      textAlign: "center",
      color: "white",
      background: "transparent",
      outline: "0",
      border: "none",
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
    "@media (max-width: 600px)": {
      col: {
        width: "100%",
      },
    },
  })
);

const Slider2 = (props) => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = [
    {
      name: "Intro header 1",
      para: "If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen",
      img: "Cat3",
      id: "0",
    },
    {
      name: "Intro header 1",
      para: "If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen",
      img: "Cat3",
      id: "1",
    },
    {
      name: "Intro header 1",
      para: "If Shai Reznik's TDD videos don't convince you to add automated testing your code, I don't know what will.This was the very best explanation of frameworks for brginners that I've ever seen",
      img: "Cat3",
      id: "2",
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
  let editable = <></>;
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
          <div className="row py-3 justify-content-end">
            <button
              className="btn px-5"
              onClick={onSaveHandler}
              style={{
                background: "#fff",
                fontSize: "20px",
                color: "#dc3545",
                borderRadius: "20px",
                boxShadow: "0 3px 6px #00000036",
              }}
            >
              Save<i className="fa fa-save mx-2"></i>{" "}
            </button>
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

      {/* <div>
              <h2 className={classes.introHeader}>Copyrights@layatex.com</h2>
            </div> */}
      <div className={classes.root}>
        {ctx.isEditable ? (
          editable
        ) : (
          <div class="container">
            <div id="demo" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner">
                {localData?.map((item, index) => (
                  <div class="carousel-item  active">
                    <div class="carousel-caption">
                      <p>{item.para} </p> <img src={item.img} alt={item.name} />
                      <div id="image-caption">{item.name}</div>
                    </div>
                  </div>
                ))}
              </div>
              <a
                class="carousel-control-prev slider2 "
                href="#demo"
                data-slide="prev"
              >
                {" "}
                <i class="fas fa-arrow-left"></i>{" "}
              </a>{" "}
              <a
                class="carousel-control-next slider2"
                href="#demo"
                data-slide="next"
              >
                {" "}
                <i class="fas fa-arrow-right"></i>{" "}
              </a>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
export default Slider2;
