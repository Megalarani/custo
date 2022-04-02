import React, { useContext, useState } from "react";
import { createStyles, makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";
import OwlCarousel from "react-owl-carousel";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import clsx from "clsx";
import "./Form2.css";
import Cat3 from "../../../Assests/images/cat3.jpg";
import { fontSize, margin, textAlign } from "@mui/system";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      backgroundColor: "#555",
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

export const Form2 = (props) => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = 
    {
      header:"layatex",
      para:"Fixyman is proud to be the name that nearly 1 million homeowners have trusted since 1996 for home improvement and repair,providing virtually any home rep.",
      address1: "Intro header 1",
      address2:"Vel Nagar, Aavadi",
      contact1: "l472487229",
      contact2:"2142425252",
      email: "loerum@gmail.com",
      img1:"Cat3",
      img2:"Cat3"
    }
   
  
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
      <section class="contact-address-area">
        <div class="container">
          <div class="sec-title-style1 text-center max-width">
            <div class="title">Contact Us</div>
            <div class="text">
              <div class="decor-left">
                <span></span>
              </div>
              <p>Quick Contact</p>
              <div class="decor-right">
                <span></span>
              </div>
            </div>
            <div class="bottom-text">
              <p>
                {localData.para}
              </p>
            </div>
          </div>
          <div class="contact-address-box row">
            {/* <!--Start Single Contact Address Box--> */}
            <div class="col-sm-4 single-contact-address-box text-center">
              <img src={localData.img1} />
            </div>
            {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
            <div class="col-sm-4 single-contact-address-box main-branch rounded">
              <h3>{localData.header}</h3>
              <div class="inner">
                <ul>
                  <li>
                    <div class="title">
                      <h4><i className="fa fa-facebook"></i>Address:</h4>
                    </div>
                    <div class="text">
                      <p>
                      <i className="fa fa-facebook"></i> {localData.address1}
                        <br /> {localData.address2}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4> <i className="fa fa-facebook"></i>Contact No:</h4>
                    </div>
                    <div class="text">
                      <p>
                      {localData.contact1} <br /> {localData.contact2}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div class="title">
                      <h4> <i className="fa fa-facebook"></i>Email:</h4>
                    </div>
                    <div class="text">
                      <p>
                        support@campuzone.com <br />
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            {/* <!--End Single Contact Address Box-->
                    <!--Start Single Contact Address Box--> */}
            <div class="col-sm-4 single-contact-address-box text-center">
              <img src={localData.img2} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Form2;
