import React, { useContext } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Hero3.module.css";
const Hero3 = () => {
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

  return (
    <>
      <section>
        <div class={data.container.style}>
          <div class={` ${styles.visitus}`}>
            <h2 className={data.heading.style} contentEditable={ctx.isEditable}>
              {" "}
              {data.heading.value}
            </h2>
            <p
              className={data.paragraph.style}
              contentEditable={ctx.isEditable}
            >
              {data.paragraph.value}{" "}
            </p>
            <button
              type="button"
              class={`btn btn-warning ${styles.boxen_visitus_btn}`}
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
