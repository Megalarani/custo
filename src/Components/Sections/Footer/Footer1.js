import React from "react";
import styles from "./Footer.module.css";
const Footer1 = () => {
  const data = {
    container: {
      style: `${styles.ftcol}`,
      value: "",
    },
    heading: {
      style: "",
      value: "Copyrights©Divicare",
    },
  };
  return (
    <>
      <footer>
        <div className={data.container.style}>
          <h2 className={data.heading.style}>{data.heading.value}</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
