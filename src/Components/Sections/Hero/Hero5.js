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
import { ReactComponent as DeleteIcon } from "../../../Assests/delete.svg";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#efefef",
      position: "relative",
    },
    addCard: {
      borderRadius: "1rem",
      position: "absolute",
      background: "#fff",
      padding: "1rem 2rem",
      top: "0",
      cursor: "pointer",
      right: "1rem",
      boxShadow: "2px 2px 3px 0 #ccc",
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
      fontSize:"40px",
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

export const Hero5 = (props) => {
  console.log(props.id);
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = [
    {
      img: BannerImage1,
      header: "Intro header 1",
      para: "loerum ipsum is a dummy language for website content writing",
      id: "0",
    },
    {
      img: BannerImage2,
      header: "Intro header 2",
      para: "loerum ipsum is a dummy language for website content writing and adiitonal purposes",
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
      } else {
        updatedData = {
          ...details,
          para: e.target.value,
        };
      }
      prevState[index] = updatedData;
      return [...prevState];
    });
  };
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
  const onImageChange = () => {
    // dbcall
  };
  const addCard = () => {
    let updatedData = {
      img: BannerImage1,
      header: "",
      para: "",
      id: localData.length,
    };
    setLocalData((prevState) => {
      return [...prevState, updatedData];
    });
  };
  const removeCard = (value) => {
    setLocalData((prevState) => {
      prevState = prevState.filter((item) => item.id !== value);
      return [...prevState];
    });
  };
  const classes = useStyles();
  let editable = (
    <>
      {localData?.map((details, index) => (
        <div
          key={index}
          className={classes.bannerImg}
          style={{
            backgroundImage: `url(${details.img})`,
            margin: "1rem",
            width: "auto",
          }}
        >
          <div
            onClick={() => removeCard(details.id)}
            style={{
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: 20,
              cursor: "pointer",
            }}
          >
            <DeleteIcon
              style={{
                width: "2rem",
                height: "2rem",
                fill: "#dc3545",
                padding: "5px",
              }}
            />
          </div>
          {/* <input
            type="file"
            onChange={onImageChange}
            // className={styles.fileType}
            id={index}
            name={details.title}
          />
          <label
            // className={styles.fileLabel}
            htmlFor={details.title}
          >
            <i className="fa fa-upload fa-3x"></i>
          </label> */}

          <input
            onChange={(e) => onChangeHandler(e, details, index)}
            className={classes.introHeader}
            id="header"
            placeholder="Header"
            value={details.header}
            style={{ width: "75%" }}
          />
          <textarea
            onChange={(e) => onChangeHandler(e, details, index)}
            className={classes.introText}
            id="para"
            placeholder="text"
            value={details.para}
            style={{ width: "75%" }}
          />
        </div>
      ))}
      <div className={classes.addCard} onClick={addCard}>
        Add Card
      </div>
    </>
  );
  const onSaveHandler = () => {
    const storage = getStorage();
    for (var i = 0; i < localData.length; i++) {
      const uploadPath = `images/${localData[i].header}`; // upload path
      const storageRef = ref(storage, uploadPath); // create refernce to store data

      uploadBytes(storageRef, localData[i].img).then((snapshot) => {
        // console.log(snapshot);
        getDownloadURL(storageRef).then((url) => {
          console.log(url, "url");
          setLocalData((prevState) => {
            let updatedData = null;
            updatedData = {
              ...prevState[i],
              img: url,
            };
            prevState[i] = updatedData;
            return [...prevState];
          });
        });
      });
    }
    // ctx.updateData(localData, props.id);
    // if (card.length === 0) {
    //   console.log("Add Card");
    // } else {
    //     setloading(true);
    // ctx.updateData(localData, props.id);
    // setTimeout(() => {
    //   setloading(false);
    // }, 2000);
    //   for (var i = 0; i < card.length; i++) {
    //     if (card[i].img === "") {
    //       alert("Image cannot be empty");
    //       break;
    //     } else if (card[i].title === "") {
    //       alert("Title cannot be empty");
    //       break;
    //     } else if (card[i].rate === "") {
    //       alert("Rate cannot be empty");
    //       break;
    //     }
    //   }
    // }
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
              {localData.map((item, index) => (
                <div
                  key={index}
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