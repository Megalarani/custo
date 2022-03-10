import React, { useContext, useState } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Gallery.module.css";
import Loader from "../../../loader/Loader";

const Gallery1 = () => {
  const ctx = useContext(AuthContext);
  const [loading, setloading] = useState(false);
  const [localData, setLocalData] = useState(ctx.websiteData && ctx.websiteData.gallery1);
  let Identifier = "gallery1";
  console.log(localData, "local");
  const onChangeHandler = (e, details, index) => {
    if (e.target.files && e.target.files[0]) {
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
            imgLink: URL.createObjectURL(e.target.files[0]),
          };
        }
        prevState[index] = updatedData;
        return [...prevState];
      });
    }
  };
  const data = {
    container: {
      styles: `${styles.galleryheading}`,
      value: "",
    },
    heading: {
      styles: "",
      value: "Gallery",
    },
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
      <section id="#Gallery">
        <div class={data.container.styles}>
          <h2 class={data.heading.styles}>{data.heading.value}</h2>
        </div>
        <div class={`${styles.gallery}`}>
          {ctx.isEditable ? (
            <>
              {localData.map((details, index) => (
                <div
                  className={`position-relative w-100 ${styles.uploadImage}`}
                >
                  <input
                    type="file"
                    onChange={(e) => onChangeHandler(e, details, index)}
                    className={styles.fileType}
                    id={details.imgName + index}
                    name={index}
                  />
                  <label
                    className={styles.fileLabel}
                    htmlFor={details.imgName + index}
                  >
                    <i className="fa fa-upload fa-3x"></i>
                  </label>
                  <img
                    src={details.imgLink}
                    className="position-relative"
                    alt="preview"
                    style={{ zIndex: "2" }}
                  />
                </div>
              ))}
            </>
          ) : (
            <>
              {localData.map((details, index) => (
                <a href="#" class="gal" key={index}>
                  <div className={`${styles.gal_wrapper} `}>
                    <div class={`${styles.hidden_cover} `}></div>
                    <img src={details.imgLink} alt={details.imgName} />
                    <h4>{details.imgName}</h4>
                  </div>
                </a>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Gallery1;
