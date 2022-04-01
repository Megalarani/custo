import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import Loader from "../../../loader/Loader";
import HeaderLogo from "../../../Assests/images/headerlogo.png";
import { ReactComponent as DeleteIcon } from "../../../Assests/delete.svg";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import AuthContext from "../../../Context/Context";
const useStyles = makeStyles(() =>
  createStyles({
    rootNav: {
      backgroundColor: "#fff",
      display: "flex",
      flexWrap: "wrap",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
    },
    logoContainer: {
      width: "10%",
      position: "relative",
      "& img": {
        width: "100%",
        height: "3rem",
        objectFit: "contain",
      },
    },
    menuList: {
      display: "flex",
      alignItems: "center",
      justifyContent: "end",
      width: "65%",
    },
    menuItems: {
      fontItems: "0.9rem",
      color: "#000",
      textTransform: "uppercase",
      padding: "0.5rem 0.75rem",
      marginRight: "0.5rem",
    },
    inputHeader: {
      width: "100%",
      background: "none",
      border: 0,
      outline: 0,
      fontItems: "0.9rem",
    },
    inputFile: {
      width: 0,
      height: 0,
      opacity: 0,
      zIndex: "0",
    },
    inputLabel: {
      position: "absolute",
      background: "#fff",
      width: "2.5rem",
      height: "2.5rem",
      padding: "0.3rem",
      bottom: "0",
      right: "0",
      zIndex: 20,
      textAlign: "center",
      cursor: "pointer",
      "& i": {
        fontSize: "1.75rem",
      },
    },
    pathSelector: {
      padding: "1rem 0",
    },
    row:{
      display: "flex",
      alignItems: "center",
      justifyContent: "start",
      padding: "1rem",
      "& p": {
        fontSize: "1.2rem",
        textTransform: "uppercase",
        color: "#000",
      }
    }
  })
);

export const Navbar2 = (props) => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const classes = useStyles();
  const headerData = {
    logo: HeaderLogo,
    menuItem: [
      {
        value: "Home",
        path: "home",
      },
      {
        value: "Womens",
        path: "womens",
      },
      {
        value: "Kids",
        path: "kids",
      },
      {
        value: "About",
        path: "About",
      },
      {
        value: "Contact",
        path: "contact",
      },
    ],
  };
  const [localData, setLocalData] = useState(
    ctx.websiteData[props.id] === undefined
      ? headerData
      : ctx.websiteData[props.id]
  );
  const [menuItem, setMenuItem] = useState(localData.menuItem);
  const onImageChange = (e, i) => {
    // setError(null);

    let selected = e.target.files[0];

    if (!selected) {
      // setError("Please select file");
      return;
    }

    if (!selected.type.includes("image")) {
      // setError("Please select image file");
      return;
    }
    const storage = getStorage();
    const uploadPath = `images/headerLogo`; // upload path
    const storageRef = ref(storage, uploadPath); // create refernce to store data

    uploadBytes(storageRef, selected).then((snapshot) => {
      // console.log(snapshot);
      getDownloadURL(storageRef).then((url) => {
        setLocalData((prevState) => {
          return {
            ...prevState,
            logo: url,
          };
        });
      });
    });
    // setError(null);
  };
  const onChangeHandler = (e, details, index) => {
    setMenuItem((prevState) => {
      let updatedData = null;
      if (e.target.id === "value") {
        updatedData = {
          ...details,
          value: e.target.value,
        };
      } else {
        updatedData = {
          ...details,
          path: e.target.value,
        };
      }
      prevState[index] = updatedData;
      return [...prevState];
    });
  };
  const onSaveHandler = () => {
    let data = {
      logo: localData.logo,
      menuItem: menuItem,
    };
    ctx.updateData(data, props.id);
    console.log(data);
  };
  return (
    <>
      {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
           <button
              className="btn px-5"
              onClick={onSaveHandler}
              style={{
                background: "#fff",
                fontSize:"20px",
                color: "#dc3545",
                borderRadius: "20px",
                boxShadow: "0 3px 6px #00000036",
              }}
            >
              Save<i className="fa fa-save mx-2"></i>{" "}
            </button>
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
        <>
          <div className={classes.rootNav}>
            <div className={classes.logoContainer}>
              <input
                type="file"
                onChange={(e) => onImageChange(e)}
                className={classes.inputFile}
                id="logo"
                name="logo"
              />
              <label className={classes.inputLabel} htmlFor="logo">
                <i className="fa fa-upload"></i>
              </label>
              <img src={localData.logo} alt="headerLogo" />
            </div>
            <div className={classes.menuList}>
              {menuItem.map((item, index) => (
                <div className={classes.menuItems} key={item.id}>
                  <input
                    className={classes.inputHeader}
                    id="value"
                    onChange={(e) => onChangeHandler(e, item, index)}
                    value={item.value}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={classes.pathSelector}>
            {menuItem.map((item, index) => (
              <div className={classes.row} key={index}>
                <Typography>{item.value}</Typography>
                {/* <Select options={menuItem}></Select> */}
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className={classes.rootNav}>
          <div className={classes.logoContainer}>
            <img src={localData.logo} alt="headerLogo" />
          </div>
          <div className={classes.menuList}>
            {menuItem.map((item) => (
              <Typography className={classes.menuItems} key={item.path}>
                {item.value}
              </Typography>
            ))}
          </div>
        </div>
      )}
    </>
  );
};
