import React, { useContext, useState } from "react";
import styles from "./Card2.module.css";
import AuthContext from "../../../Context/Context";
import Loader from "../../../loader/Loader";
import clsx from "clsx";

const Card2 = (props) => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const cardData = {
    header: "Curriculam",
    data: [
      {
        title: "Reading/write",
        para: "It is a long established fact that a reader will be distracted",
        id: 0,
      },
      {
        title: "Maths/science",
        para: "It is a long established fact that a reader will be distracted",
        id: 1,
      },
      {
        title: "Art",
        para: "It is a long established fact that a reader will be distracted",
        id: 2,
      },
      {
        title: "Critical Thinking",
        para: "It is a long established fact that a reader will be distracted",
        id: 3,
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
    const tempEventInputs = JSON.parse(JSON.stringify(details));
    if (e.target) {
      tempEventInputs[e.target.name] = e.target.value;
    } else {
      tempEventInputs["path"] = e.value;
    }
    setCard((prevState) => {
      prevState[index] = tempEventInputs;
      return [...prevState];
    });
  };
  const addCard = () => {
    let updatedData = {
      title: "Add Title",
      para: "It is a long established fact that a reader will be distracted",
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
    <section className="culm" id="#curriculam">
      <div className={styles.curriculamheading}>
        <input
          placeholder="Header"
          id="header"
          onChange={onChange}
          value={localData.header}
        />
      </div>
      <div className={clsx("container", styles.curriculam)}>
        {card.map((details, index) => (
          <div className={styles.curriculamcol} key={index}>
            <div className={styles.cardin}>
              <div className={clsx(styles.round, styles.ron3)}>
                <i className="fa fa-pencil-square icon" aria-hidden="true"></i>
              </div>
              <input
                onChange={(e) => onChangeHandler(e, details, index)}
                className={styles.inputHeading}
                id="title"
                name="title"
                value={details.title}
              />
              <textarea
                onChange={(e) => onChangeHandler(e, details, index)}
                className={styles.inputPara}
                id="para"
                name="para"
                value={details.para}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
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
      {ctx.isEditable ? (
        editable
      ) : (
        <section className="culm" id="#curriculam">
          <div className={styles.curriculamheading}>
            <h2 className="">{localData.header}</h2>
          </div>
          <div className={clsx("container", styles.curriculam)}>
            {card.map((details, index) => (
              <div className={styles.curriculamcol} key={index}>
                <div className={styles.cardin}>
                  <div className={clsx(styles.round, styles.ron3)}>
                    <i
                      className="fa fa-pencil-square icon"
                      aria-hidden="true"
                    ></i>
                  </div>
                  <h2 className="">{details.title}</h2>
                  <p className="">{details.para}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Card2;
