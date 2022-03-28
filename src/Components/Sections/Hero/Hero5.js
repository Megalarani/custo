import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import BannerImage1 from "../../../Assests/images/banner1.jpg";
import BannerImage2 from "../../../Assests/images/banner2.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import clsx from "clsx";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#efefef",
    },
    container: {
      width: "100%",
      position: "relative",
    },
    carouselContainer: {
      maxHeight: "600px",
      overflow: "hidden",
    },
    bannerImg: {
      position: "relative",
      width: "100%",
      height: "600px",
      backgroundSize: "cover",
      "& img": {
        width: "100%",
        height: "auto",
        objectFit: "contain",
      },
    },
    introHeader: {
      position: "absolute",
      color: "red",
      background: "transparent",
      outline: 0,
      border: "none",
      // fontSize: "1.5rem !important",
      paddingBottom: "1.5rem !important",
      textTransform: "capitalize",
      color: "#f64242",
      width: "60%",
      height: "fit-content",
      margin: "auto !important",
      left: 0,
      right: 0,
      top: "30%",
      textAlign: "center",
    },
    introText: {
      position: "absolute",
      color: "#000",
      background: "transparent",
      outline: 0,
      border: "none",
      fontSize: "1rem !important",
      textTransform: "lowercase",
      letterSpacing: "0.25rem",
      textAlign: "justify",
      width: "60%",
      margin: "auto !important",
      left: 0,
      right: 0,
      top: "42%",
    },
  })
);

export const Hero5 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const [localData, setLocalData] = useState(null);
  const data = [
    {
      img: BannerImage1,
      header: "Intro header 1",
      para: "loerum ipsum is a dummy language for website content writing",
    },
    {
      img: BannerImage2,
      header: "Intro header 2",
      para: "loerum ipsum is a dummy language for website content writing and adiitonal purposes",
    },
  ];
  const options = {
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    autoplayHoverPause: false,
    items: 1,
    touchDrag: false,
  };
  const classes = useStyles();
  let editable = null;
  if (localData === null) {
    editable = (
      <>
        {data?.map((details, index) => (
          <div
            className={classes.bannerImg}
            style={{
              backgroundImage: `url(${details.img})`,
              margin: "1rem",
              width: "auto",
            }}
          >
            <input
              key={index}
              // onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.introHeader}
              id="header"
              value={details.header}
              style={{ width: "75%" }}
            />
            <textarea
              key={index}
              // onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.introText}
              id="para"
              value={details.para}
              style={{ width: "75%" }}
            />
          </div>
        ))}
      </>
    );
  } else {
    editable = (
      <>
        {localData?.map((details, index) => (
          <div
            className={classes.bannerImg}
            style={{ backgroundImage: `url(${details.img})`, margin: "1rem" }}
          >
            <input
              key={index}
              // onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.introHeader}
              id="header"
              value={details.header}
              style={{ width: "75%" }}
            />
            <textarea
              key={index}
              // onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.introText}
              id="para"
              value={details.para}
              style={{ width: "75%" }}
            />
          </div>
        ))}
      </>
    );
  }

  return (
    <>
      {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
          <div
            className="saveButton"
            onClick={() => {
              setloading(true);
              ctx.updateData(localData);
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
      <div className={classes.root}>
        <div
          className={clsx(
            classes.container,
            ctx.isEditable ? "" : classes.carouselContainer
          )}
        >
          {ctx.isEditable ? (
            editable
          ) : (
            <OwlCarousel className="owl-theme" {...options} aut>
              {data.map((item) => (
                <div
                  className={classes.bannerImg}
                  style={{ backgroundImage: `url(${item.img})` }}
                >
                  {/* <img src={item.img} alt="bannerImage" /> */}
                  <Typography variant="h2" className={classes.introHeader}>
                    {item.header}
                  </Typography>
                  <Typography className={classes.introText}>
                    {item.para}
                  </Typography>
                </div>
              ))}
            </OwlCarousel>
          )}
        </div>
      </div>
    </>
  );
};
