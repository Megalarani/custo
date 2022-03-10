import React, { useContext, useState } from "react";
import styles from "./Slider1.module.css";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";

const Slider1 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
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
      style: `container ${styles.test}`,
      value: "",
    },
    heading: {
      style: `${styles.test_text_h2}`,
      value: "What Our Families are Saying",
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
  const [localData, setLocalData] = useState(ctx.websiteData && ctx.websiteData.slider1);
  let Identifier = "slider1";
  console.log(localData, "local");
  const onChangeHandler = (e, details, index) => {
    setLocalData((prevState) => {
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

  return (
    <>
      {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
          <div
            className="saveButton"
            onClick={() => {
              setloading(true);
              ctx.updateData(localData, Identifier);
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
      <section>
        <div class={data.container.style}>
          <div class="text-center ">
            <h2 className={data.heading.style}>{data.heading.value}</h2>
            {ctx.isEditable ? (
              <>
                {localData.map((details, index) => (
                  <div className="row justify-content-center align-items-center mb-2">
                    <h5 className="pr-4">{"Slider " + `${index + 1}`}</h5>
                    <textarea
                      key={index}
                      onChange={(e) => onChangeHandler(e, details, index)}
                      className={`${styles.inputPara}`}
                      id="content"
                      value={details.content}
                      style={{ width: "75%" }}
                    />
                  </div>
                ))}
              </>
            ) : (
              <OwlCarousel className="owl-theme" {...options}>
                {localData.map((details, index) => (
                  <p key={index}>{details.content}</p>
                ))}
              </OwlCarousel>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Slider1;
