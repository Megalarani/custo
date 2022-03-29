import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import Dress1 from "../../../Assests/images/dress1.jpg";
import Dress2 from "../../../Assests/images/dress2.jpg";
import Dress3 from "../../../Assests/images/dress3.jpg";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#efefef",
      padding: "1rem",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      // justifyContent:"space-between"
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
      background: "transparent",
      outline: 0,
      border: "none",
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
      background: "transparent",
      outline: 0,
      border: "none",
    },
    rate: {
      background: "transparent",
      outline: 0,
      border: "none",
      fontSize: "0.85rem",
      color: "#000",
      fontWeight: "500",
    },
  })
);

export const Slider2 = (props) => {
  console.log(props.id);
  const classes = useStyles();
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);

  const options = {
    loop: true,
    margin: 30,
    dots: false,
    nav: false,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    items: 4,
  };

  const cardData = {
    header: "New Arrivals",
    data: [
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
    ],
  };
  const [localData, setLocalData] = useState(
    ctx.websiteData[props.id] === undefined
      ? cardData
      : ctx.websiteData[props.id]
  );
  const onChangeHandler = (e, details, index) => {
    setLocalData((prevState) => {
      let updatedData = null;
      if (e.target.id === "header") {
        updatedData = {
          header: e.target.value,
        };
      } else if (e.target.id === "title") {
        updatedData = {
          ...details,
          title: e.target.value,
        };
      } else {
        updatedData = {
          ...details,
          rate: e.target.value,
        };
      }
      prevState[index] = updatedData;
      return [...prevState];
    });
  };

  let editable = null;
  if (localData === null) {
    editable = (
      <>
        <input
          className={classes.introHeader}
          placeholder="Header"
          id="header"
          value={cardData.header}
        />
        <div className={classes.row}>
          {cardData?.data.map((details, index) => (
            <div
              className={classes.card}
              style={{ width: "24%", marginRight: "1%" }}
            >
              <img src={details.img} alt={details.title} />
              <div className={classes.footer}>
                <input
                  key={index}
                  onChange={(e) => onChangeHandler(e, details, index)}
                  className={classes.imgText}
                  id="title"
                  style={{ fontSize: "15px" }}
                  value={details.title}
                  placeholder="Dress Name"
                />

                <input
                  key={index}
                  onChange={(e) => onChangeHandler(e, details, index)}
                  className={classes.rate}
                  id="rate"
                  style={{ fontSize: "15px", marginLeft: "10px" }}
                  value={details.rate}
                  placeholder="rate"
                />
              </div>
            </div>
          ))}
        </div>
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
              ctx.updateData(localData,props.id);
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
        {ctx.isEditable ? (
          editable
        ) : (
          <>
            <Typography className={classes.introHeader}>
              {cardData.header}
            </Typography>
            <OwlCarousel className="owl-theme" {...options}>
              {localData.data.map((item) => (
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
          </>
        )}
      </div>
    </>
  );
};
