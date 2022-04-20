import React, { useContext, useState } from "react";
import styles from "./Slider1.module.css";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import clsx from "clsx";

const Slider1 = (props) => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const cardData = {
    header: "What Our Families are Saying",
    data: [
      {
        para: "It is a long established fact that a reader will be distracted by the readable",
        id: 0,
      },
      {
        para: "It is a long established fact that a reader will be distracted by the readable",
        id: 1,
      },
      {
        para: "It is a long established fact that a reader will be distracted by the readable",
        id: 2,
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
  const options = {
    loop: false,
    margin: 50,
    dots: true,
    nav: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplaySpeed: 2000,
    autoplayHoverPause: true,
    items: 1,
  };
  const data = {
    container: {
      style: ` col-md-9 col-lg-7 m-auto ${styles.test}`,
      value: "",
    },
    heading: {
      style: `${styles.test_text_h2}`,
      value: "",
    },
    slides: {
      paragraph1:
        "It is a long established fact that a reader will be distracted by the readable",
      paragraph2:
        "It is a long established fact that a reader will be distracted by the readable",
      paragraph3:
        "It is a long established fact that a reader will be distracted by the readable",
    },
  };
  const onChangeHandler = (e, details, index) => {
    setCard((prevState) => {
      let updatedData = null;
      if (e.target.id === "heading") {
        updatedData = {
          ...details,
          heading: e.target.value,
        };
      } else {
        updatedData = {
          ...details,
          content: e.target.value,
        };
      }
      prevState[index] = updatedData;
      return [...prevState];
    });
  };

  const onSaveHandler = () => {
    setloading(true);
    let data = {
      header: localData.header,
      data: card,
    };

    ctx.updateData(data, props.id);
    setTimeout(() => {
      setloading(false);
    }, 2000);
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
              fontSize: "20px",
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
      <section>
        <div className={data.container.style}>
          <div className="text-center ">
            {ctx.isEditable ? (
              <>
                <input
                  // className={classes.introHeader}
                  placeholder="Header"
                  id="header"
                  onChange={onChange}
                  value={localData.header}
                />
                {card.map((details, index) => (
                  <div className="row justify-content-center align-items-center mb-2">
                    <h5 className="pr-4">{"Slider " + `${index + 1}`}</h5>
                    <textarea
                      key={index}
                      onChange={(e) => onChangeHandler(e, details, index)}
                      className={`${styles.inputPara}`}
                      id="content"
                      value={details.para}
                      style={{ width: "75%" }}
                    />
                  </div>
                ))}
              </>
            ) : (
              <>
                <h2 className={data.heading.style}>{localData.header}</h2>
                <OwlCarousel className="owl-theme" {...options}>
                  {card.map((details, index) => (
                    <p key={index}>{details.para}</p>
                  ))}
                </OwlCarousel>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider1;
