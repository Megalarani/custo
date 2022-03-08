import React, { useContext, useState } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Hero2.module.css";
import Loader from "../../../loader/Loader";
const Hero2 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = {
    container: {
      style: `container ${styles.about}`,
      value: "",
    },
    heading: {
      style: `${styles.about_h2}`,
      value: "About Us",
    },
    paragraph: {
      style: `${styles.about_p}`,
      value:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout",
    },
  };
  const [localData, setLocalData] = useState({
    heading2: ctx.websiteData.heading2,
    content2: ctx.websiteData.content2,
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

  console.log(data.heading.value, "heading");
  console.log(data.paragraph.value, "para");
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
      <section id="#About">
        <div class={data.container.style}>
        {ctx.isEditable ? (
            <>
              <input
                id="heading2"
                className={`${styles.inputHeading}`}
                onChange={onChangeHandler}
                value={localData.heading2}
              />
              <textarea
                id="content2"
                className={`${styles.inputPara}`}
                onChange={onChangeHandler}
                value={localData.content2}
              />
            </>
          ) : (
            <>
              <h2 className={data.heading.style}>{ctx.websiteData.heading2}</h2>
              <p className={data.paragraph.style}>{ctx.websiteData.content2}</p>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Hero2;
