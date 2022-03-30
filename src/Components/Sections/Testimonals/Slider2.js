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
import { ReactComponent as DeleteIcon } from "../../../Assests/delete.svg";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      position: "relative",
      backgroundColor: "#efefef",
      padding: "1rem",
    },
    row: {
      display: "flex",
      flexWrap: "wrap",
      // justifyContent:"space-between"
    },
    card: {
      position: "relative",
      background: "#fff",
      padding: "1rem",
      marginBottom: "0.5rem",
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
      width: "100%",
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
    addCard: {
      borderRadius: "1rem",
      position: "absolute",
      background: "#fff",
      padding: "1rem 2rem",
      top: "1rem",
      cursor: "pointer",
      right: "1rem",
      boxShadow: "2px 2px 3px 0 #ccc",
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
        id: "0",
      },
      {
        img: Dress2,
        title: "Ratione voluptatem sequi...",
        rate: "179",
        id: "1",
      },
      {
        img: Dress3,
        title: "Ratione voluptatem sequi...",
        rate: "189",
        id: "2",
      },
    ],
  };
  const [localData, setLocalData] = useState(
    ctx.websiteData[props.id] === undefined
      ? cardData
      : ctx.websiteData[props.id]
  );
  const [card, setCard] = useState(localData.data);
  const onChange = (event) => {
    let val = event.target.value;
    setLocalData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: val,
      };
    });
  };
  const onChangeHandler = (e, details, index) => {
    setCard((prevState) => {
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
  const onImageChange = () => {
    // dbcall
  };
  const addCard = () => {
    let updatedData = {
      img: Dress1,
      title: "",
      rate: "",
      id: card.length,
    };
    setCard((prevState) => {
      return [...prevState, updatedData];
    });
  };
  const removeCard = (value) => {
    setCard((prevState) => {
      prevState = prevState.filter((item) => item.id !== value);
      return [...prevState];
    });
  };
  let editable = (
    <>
      <input
        className={classes.introHeader}
        placeholder="Header"
        id="header"
        onChange={onChange}
        value={localData.header}
      />
      <div className={classes.row}>
        {card.map((details, index) => (
          <div
            key={index}
            className={classes.card}
            style={{ width: "24%", marginRight: "1%" }}
          >
            <div
              onClick={() => removeCard(details.id)}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
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
            <input
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
            </label>
            <img src={details.img} alt={details.title} />
            <div className={classes.footer}>
              <input
                onChange={(e) => onChangeHandler(e, details, index)}
                className={classes.imgText}
                id="title"
                style={{ fontSize: "15px" }}
                value={details.title}
                placeholder="Dress Name"
              />

              <input
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
      <div className={classes.addCard} onClick={addCard}>
        Add Card
      </div>
    </>
  );

  const onSaveHandler = () => {
    const storage = getStorage();
    for (var i = 0; i < card.length; i++) {
      const uploadPath = `images/${card[i].title}`; // upload path
      const storageRef = ref(storage, uploadPath); // create refernce to store data

      uploadBytes(storageRef, card[i].img).then((snapshot) => {
        // console.log(snapshot);
        getDownloadURL(storageRef).then((url) => {
          console.log(url, "url");
          setCard((prevState) => {
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
    ctx.updateData(
      {
        header: localData.header,
        data: card,
      },
      props.id
    );
    // if (card.length === 0) {
    //   console.log("Add Card");
    // } else {
    //   // setloading(true);
    //   // ctx.updateData(
    //   //   {
    //   //     header: localData.header,
    //   //     data: card,
    //   //   },
    //   //   props.id
    //   // );
    //   // setTimeout(() => {
    //   //   setloading(false);
    //   // }, 2000);
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
        {ctx.isEditable ? (
          editable
        ) : (
          <>
            <Typography className={classes.introHeader}>
              {localData.header}
            </Typography>
            <OwlCarousel className="owl-theme" {...options}>
              {card.map((item, index) => (
                <div className={classes.card} key={index}>
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
