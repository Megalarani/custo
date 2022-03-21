import React, { useContext, useState } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Hero4.module.css";
import Loader from "../../../loader/Loader";
const Hero4 = () => {
  const [loading, setloading] = useState(false);
  const ctx = useContext(AuthContext);
  const data = {
    container: {
      style: `container  ${styles.preschool}`,
      value: "",
    },
    heading: {
      style: `${styles.head}`,
      value: "Our Pre-School. Our Family. Our Community",
    },
    paragraph: {
      style: `${styles.preschool_text_p}`,
      value:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various version",
    },
  };
  const [localData, setLocalData] = useState({
    heading4:  ctx.websiteData && ctx.websiteData.heading4,
    content4: ctx.websiteData && ctx.websiteData.content4,
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
      <div className={data.container.style}>
        <div className="row m-0">
          <div className={`col-md-7 ${styles.boxen}`}>
            <div className={` ${styles.preschool_text}`}>
            {ctx.isEditable ? (
            <>
              <input
                id="heading4"
                className={`${styles.inputHeading}`}
                onChange={onChangeHandler}
                value={localData.heading4}
              />
              <textarea
                id="content4"
                className={`${styles.inputPara}`}
                onChange={onChangeHandler}
                value={localData.content4}
              />
            </>
          ) : (
            <>
              <h2 className={  data.heading.style}>{ctx.websiteData && ctx.websiteData.heading4}</h2>
              <p className={  data.paragraph.style}>{ctx.websiteData && ctx.websiteData.content4}</p>
            </>
          )}
            </div>
          </div>
          <div className={`col-md-5 ${styles.bot} ${styles.rt_pad}`}>
            <div className={` ${styles.image}`}>
              <img className="img-fluid" src="/Images/day_care_img_11.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;
