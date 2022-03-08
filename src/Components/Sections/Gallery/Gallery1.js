import React, { useContext, useState } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Gallery1.module.css";
const Gallery1 = () => {
  const ctx = useContext(AuthContext);
  const data = {
    container: {
      styles: `${styles.galleryheading}`,
      value: "",
    },
    heading: {
      styles: "",
      value: "Gallery",
    },
    images: [
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
      {
        imgName: "Sea",
        imgLink:
          "https://images.unsplash.com/photo-1600345957894-4854e82910ac?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1748&q=80",
      },
    ],
  };
  const [localData, setLocalData] = useState(ctx.websiteData.gallery1);
  let Identifier = "gallery1";
  console.log(localData, "local");
  const onChangeHandler = (e, details, index) => {
    setLocalData((prevState) => {
      let updatedData = null;
      if (e.target.id === "imgName") {
        updatedData = {
          ...details,
          imgName: e.target.value,
        };
      } else {
        updatedData = {
          ...details,
          imgLink: e.target.value,
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
          <div className="saveButton" onClick={() => ctx.updateData(localData,Identifier)}>
            Save
          </div>
        </div>
      ) : (
        <></>
      )}
      <section id="#Gallery">
        <div class={data.container.styles}>
          <h2  class={data.heading.styles}>{data.heading.value}</h2>
        </div>

        <div class={`${styles.gallery}`}>
          {localData.map((details, index) => (
            <a href="#" class="gal" key={index}>
              <div class={`${styles.gal_wrapper} `}>
                <div class={`${styles.hidden_cover} `}></div>
               
                {ctx.isEditable ? (
                <>
                  
                  <img src={details.imgLink} alt={details.imgName} />
                  <input
                    onChange={(e) => onChangeHandler(e, details, index)}
                    className={`${styles.inputHeading}`}
                    id="imgName"
                    value={details.imgName}
                  />
                </>
              ) : (
                <>
                  <img src={details.imgLink} alt={details.imgName} />
                <h4>{details.imgName}</h4>
               
                </>
              )}


              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery1;
