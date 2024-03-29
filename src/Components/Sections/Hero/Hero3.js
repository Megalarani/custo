import React, { useContext, useState } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Hero3.module.css";
import Loader from "../../../loader/Loader";
const Hero3 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = {
    container: {
      style: `col-10 ${styles.boxen}`,
      value: "",
    },
    heading: {
      style: `${styles.boxen_visitus_h2}`,
      value: "Come Visit Us",
    },
    paragraph: {
      style: `${styles.boxen_visitus_p}`,
      value:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
    },
  };
  const [localData, setLocalData] = useState({
    heading3:  ctx.websiteData && ctx.websiteData.heading3,
    content3:  ctx.websiteData && ctx.websiteData.content3,
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
          <div className="saveButton" onClick={()=>{
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
      <Loader/>
      </>
    )}
      <section>
        <div className={data.container.style}>
          <div className={` ${styles.visitus}`}>
          {ctx.isEditable ? (
            <>
              <input
                id="heading3"
                className={`${styles.inputHeading}`}
                onChange={onChangeHandler}
                value={localData.heading3}
              />
              <textarea
                id="content3"
                className={`${styles.inputPara}`}
                onChange={onChangeHandler}
                value={localData.content3}
              />
            </>
          ) : (
            <>
              <h2 className={ data.heading.style}>{ ctx.websiteData && ctx.websiteData.heading3}</h2>
              <p className={data.paragraph.style}>{ ctx.websiteData && ctx.websiteData.content3}</p>
            </>
          )}
            <button
              type="button"
              className={`btn btn-warning ${styles.boxen_visitus_btn}`}
            >
              Schedule a Tour
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero3;
