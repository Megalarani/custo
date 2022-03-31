import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import Cat1 from "../../../Assests/images/cat1.jpg";
import Cat2 from "../../../Assests/images/cat2.jpg";
import Cat3 from "../../../Assests/images/cat3.jpg";
import { ReactComponent as DeleteIcon } from "../../../Assests/delete.svg";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#fff",
      display: "flex",
      padding: "1rem",
      flexWrap:"wrap",
      position: "relative",
    },
    editable: {
      background: "transparent",
      outline: 0,
      border: "none",
      textAlign: "center",
    },
    addCard: {
      fontSize:"25px",
      display:"flex",
      alignItems:"center",
      justifyContent:"center",
      borderRadius: "1rem",
      background: "#fff",
      cursor: "pointer",
      position: "relative",
      width: "33.33%",
      padding: "1rem",
      boxShadow: "2px 2px 2px 3px #ccc",
    },
    card: {
      position: "relative",
      width: "33.33%",
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
      id: "0",
    },
    {
      img: Cat2,
      title: "Evening Dresses",
      count: "1",
      id: "1",
    },
    {
      img: Cat3,
      title: "Summer Dresses",
      count: "1",
      id: "2",
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
  const onImageChange = () => {
    // dbcall
  };
  const addCard = () => {
    let updatedData = {
      img: Cat1,
      title: "",
      count: "",
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
  let editable = (
    <div className={classes.root}>
      {localData?.map((details, index) => (
        <div className={classes.card} key={index}>
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
          <img src={details.img} alt={details.title} />
          <div className={classes.overlay}>
            <input
              onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.editable}
              id="title"
              placeholder="title"
              value={details.title}
            />
            <input
              onChange={(e) => onChangeHandler(e, details, index)}
              className={classes.editable}
              id="count"
              placeholder="count"
              value={details.count}
            />
          </div>
        </div>
      ))}
      <div className={classes.addCard} onClick={addCard}>
      <i class="fa fa-plus-circle mx-2" aria-hidden="true"></i> Add Card
      </div>
    </div>
  );
  const onSaveHandler = () => {
    const storage = getStorage();
    for (var i = 0; i < localData.length; i++) {
      const uploadPath = `images/${localData[i].title}`; // upload path
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

      {ctx.isEditable ? (
        editable
      ) : (
        <div className={classes.root}>
          {localData.map((item, index) => (
            <div className={classes.card} key={index}>
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
