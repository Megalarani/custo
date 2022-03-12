import React, { useContext, useState } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Hero1.module.css";
import Loader from "../../../loader/Loader";

const Hero1 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = {
    container: {
      style: "container",
      value: "",
    },
    heading: {
      style: "",
      value: "Divi Daycare",
    },
    paragraph: {
      style: "",
      value:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
    },
  };
  const [localData, setLocalData] = useState({
    heading1: ctx.websiteData && ctx.websiteData.heading1,
    content1: ctx.websiteData && ctx.websiteData.content1,
  });
  const onChangeHandler = (event) => {
    let val = event.target.value;
    setLocalData((prevState) => {
      return {
        ...prevState,
        [event.target.id]: val,
      };
    });
  };

  return (
    <>
      {ctx.isEditable ? (
        <div className="row py-3 justify-content-end">
          <div className="saveButton" onClick={() => {
            setloading(true);
            ctx.updateData(localData)
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
          <Loader />
        </>
      )}
      <div className={`${styles.hero}`} id="#Home">
        <div className={data.container.style}>
          <img src="/Images/text.png" className="pretext" />
        </div>
        <div className={`container ${styles.texter}`}>
          {ctx.isEditable ? (
            <>
              <input
                id="heading1"
                className={`${styles.inputHeading}`}
                onChange={onChangeHandler}
                value={localData.heading1}
              />
              <textarea
                id="content1"
                className={`${styles.inputPara}`}
                onChange={onChangeHandler}
                value={localData.content1}
              />
            </>
          ) : (
            <>
              <h2 className={data.heading.style} >  {ctx.websiteData && ctx.websiteData.heading1}</h2>
              <p className={data.paragraph.style}>{ctx.websiteData && ctx.websiteData.content1}</p>
            </>
          )}
          <button type="button" className={` ${styles.btn}`}>
            GET STARTED
          </button>
        </div>

        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIydnciIHZpZXdCb3g9IjAgMCAxMjgwIDE0MCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSIjZmZmZmZmIj48cGF0aCBkPSJNMTI4MCA4NmMtMTkuOS0xNy4yMS00MC4wOC0zOS42OS03OS44OS0zOS42OS01Ny40OSAwLTU2LjkzIDQ2LjU5LTExNSA0Ni41OS01My42MSAwLTU5Ljc2LTM5LjYyLTExNS42LTM5LjYyQzkyMy43IDUzLjI3IDkyNC4yNiA4NyA4NTMuODkgODdjLTg5LjM1IDAtNzguNzQtODctMTg4LjItODdDNTU0IDAgNTQzLjk1IDEyMS44IDQyMy4zMiAxMjEuOGMtMTAwLjUyIDAtMTE3Ljg0LTU0Ljg4LTE5MS41Ni01NC44OC03Ny4wNiAwLTEwMCA0OC41Ny0xNTEuNzUgNDguNTctNDAgMC02MC0xMi4yMS04MC0yOS41MXY1NEgxMjgweiIvPjwvZz48L3N2Zz4"
          className="wave"
        />
        <img src="/Images/1.png" className="house" />
      </div>
    </>
  );
};

export default Hero1;
