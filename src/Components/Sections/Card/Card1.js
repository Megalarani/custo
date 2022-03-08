import React, { useContext, useState } from "react";
import styles from "./Card1.module.css";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";

const Card1 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = {
    container: {
      style: `row ${styles.cards}`,
      value: "",
    },
    cards: {
      card1: {
        heading: {
          style: "",
          value: "Enrollement ",
        },
        paragraph: {
          style: "",
          value:
            "It is a long established fact that a reader will be distracted",
        },
      },
      card2: {
        heading: {
          style: "",
          value: "Curriculam",
        },
        paragraph: {
          style: "",
          value:
            "  It is a long established fact that a reader will be distracted",
        },
      },
      card3: {
        heading: {
          style: "Programs",
          value: "",
        },
        paragraph: {
          style: "",
          value:
            "  It is a long established fact that a reader will be distracted",
        },
      },
    },
  };

  const [localData, setLocalData] = useState(ctx.websiteData.card1);
  let Identifier = "card1";
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
          <div className="saveButton" onClick={ () => {
            setloading(true);
            ctx.updateData(localData,Identifier)
            setTimeout(() => {     
            setloading(false);
          }, 2000)
          }}>
            Save
          </div>
        </div>
      ) : (
        <></>
      )}

{loading && (
      <>
      <Loader/>
      </>
    )}
      <div class={data.container.style}>
        {localData.map((details, index) => (
          <div class={`col-md-3  ${styles.card} `} key={index}>
            <div class={`${styles.cardin}`}>
              <div class={`${styles.round}`}>
                <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i>
              </div>
              {ctx.isEditable ? (
                <>
                  <input
                    onChange={(e) => onChangeHandler(e, details, index)}
                    className={`${styles.inputHeading}`}
                    id="heading"
                    value={details.heading}
                  />
                  <textarea
                    onChange={(e) => onChangeHandler(e, details, index)}
                    className={`${styles.inputPara}`}
                    id="content"
                    value={details.content}
                  />
                </>
              ) : (
                <>
                  <h2>{details.heading}</h2>
                  <p className={data.cards.card1.paragraph.style}>
                    {details.content}
                  </p>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Card1;
