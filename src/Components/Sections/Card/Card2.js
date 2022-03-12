import React, { useContext, useState } from "react";
import styles from "./Card2.module.css";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
const Card2 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = {
    container: {
      style: `${styles.curriculamheading}`,
      value: "",
    },
    heading: {
      style: "",
      value: "Curriculam",
    },
    layout: {
      style: `container ${styles.curriculam}`,
      value: "",
    },
    cards: {
      card1: {
        heading: {
          style: "",
          value: "Reading/write ",
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
          value: "Maths/science",
        },
        paragraph: {
          style: "",
          value:
            "  It is a long established fact that a reader will be distracted",
        },
      },
      card3: {
        heading: {
          style: "",
          value: "Art",
        },
        paragraph: {
          style: "",
          value:
            "  It is a long established fact that a reader will be distracted",
        },
      },
      card4: {
        heading: {
          style: "",
          value: "Critical Thinking",
        },
        paragraph: {
          style: "",
          value:
            "  It is a long established fact that a reader will be distracted",
        },
      },
    },
  };
  const [localData, setLocalData] = useState(
    ctx.websiteData ? ctx.websiteData.card2 : []
  );
  let Identifier = "card2";
  console.log(localData, "local");
  const onChangeHandler = (e, details, index) => {
    setLocalData((prevState) => {
      let updatedData = null;
      if (e.target.id === "content") {
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
      <section class="culm" id="#curriculam">
        <div class={data.container.style}>
          <h2 class={data.heading.style}>{data.heading.value}</h2>
        </div>
        <div class={data.layout.style}>
          {localData.map((details, index) => (
            <div class={`${styles.curriculamcol}`} key={index}>
              <div class={`${styles.cardin}`}>
                <div class={`${styles.round} ${styles.ron3}`}>
                  <i class="fa fa-pencil-square icon" aria-hidden="true"></i>
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
                    <h2 className={data.cards.card1.heading.style}>
                      {details.heading}
                    </h2>
                    <p className={data.cards.card1.paragraph.style}>
                      {details.content}
                    </p>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Card2;
