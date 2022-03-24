import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import BannerImage from "../../../Assests/images/banner1.jpg";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#efefef",
    },
    container: {
      width: "100%",
      height: "600px",
    },
    bannerImg: {
      position: "relative",
      "& img": {
        width: "100%",
        width: "auto",
        objectFit: "cover",
      },
    },
    introHeader: {
      position: "absolute",
      color: "red",
      fontSize: "1.5rem !important",
      paddingBottom: "`1.5rem !important",
      textTransform: "capitalize",
      color: "red",
      width: "60%",
      height: "fit-content",
      margin: "auto !important",
      left: 0,
      right: 0,
      top: "40%",
      textAlign: "center",
    },
    introText: {
      position: "absolute",
      color: "#000",
      fontSize: "1rem !important",
      textTransform: "uppercase",
      letterSpacing: "0.25rem",
      textAlign: "justify",
      width: "60%",
      margin: "auto !important",
      left: 0,
      right: 0,
      top: "50%",
    },
  })
);

export const Hero5 = () => {
  const classes = useStyles();

  const options = {
    loop: true,
    margin: 0,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 4000,
    autoplayHoverPause: false,
    items: 1,
  };
  return (
    <>
      <div className={classes.root}>
        <div className={classes.container}>
          <OwlCarousel className="owl-theme" {...options}>
            <div className={classes.bannerImg}>
              <img src={BannerImage} alt="bannerImage" />
              <Typography className={classes.introHeader}>
                Intro Header
              </Typography>
              <Typography className={classes.introText}>
                Intro Text or para
              </Typography>
            </div>
          </OwlCarousel>
        </div>
      </div>
    </>
  );
};
