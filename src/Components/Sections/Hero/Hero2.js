import React, { useContext } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Hero2.module.css";
const Hero2 = () => {
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
  console.log(data.heading.value, "heading");
  console.log(data.paragraph.value, "para");
  return (
    <>
      <section id="#About">
        <div class={data.container.style}>
          <h2 class={data.heading.style} contentEditable={ctx.isEditable}>
            {data.heading.value}{" "}
          </h2>
          <p class={data.paragraph.style} contentEditable={ctx.isEditable}>
            {data.paragraph.value}
          </p>
          ;
        </div>
      </section>
    </>
  );
};

export default Hero2;
