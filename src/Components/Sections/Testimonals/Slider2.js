import React from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import Dress1 from "../../../Assests/images/dress1.jpg";
import Dress2 from "../../../Assests/images/dress2.jpg";
import Dress3 from "../../../Assests/images/dress3.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#efefef",
      padding: "1rem",
    },
    card: {
      background: "#fff",
      padding: "1rem",
      // borderRadius: "0.5rem",
      "& img": {
        maxWidth: "100%",
        height: "auto",
      },
    },
    introHeader: {
      fontSize: "1.75rem !important",
      color: "#000",
      textTransform: "capitalize",
      textAlign: "center",
      paddingBottom: "1.5rem",
    },
    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    imgText: {
      fontSize: "0.75rem",
      color: "#333",
      fontWeight: "200",
      padding: "0.75rem 0",
      textTransform: "capitalize",
    },
    rate: {
      fontSize: "0.85rem",
      color: "#000",
      fontWeight: "500",
    },
  })
);

export const Slider2 = () => {
  const classes = useStyles();

  const options = {
    loop: true,
    margin: 0,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 3000,
    autoplayHoverPause: true,
    items: 3,
  };

  const cardData = [
    {
      img: Dress1,
      title: "Ratione voluptatem sequi...",
      rate: "199",
    },
    {
      img: Dress2,
      title: "Ratione voluptatem sequi...",
      rate: "179",
    },
    {
      img: Dress3,
      title: "Ratione voluptatem sequi...",
      rate: "189",
    },
  ];

  return (
    <>
      <div className={classes.root}>
        <Typography className={classes.introHeader}>New Arrivals</Typography>
        <OwlCarousel className="owl-theme" {...options}>
          {cardData.map((item) => (
            <div className={classes.card}>
              <img src={item.img} alt={item.title} />
              <div className={classes.footer}>
                <Typography variant="body2" className={classes.imgText}>
                  {item.title}
                </Typography>
                <Typography variant="caption" className={classes.rate}>
                  Rs. {item.rate}
                </Typography>
              </div>
            </div>
          ))}
        </OwlCarousel>
      </div>
    </>
  );
};
