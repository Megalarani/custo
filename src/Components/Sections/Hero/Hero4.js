import React, { useContext } from "react";
import AuthContext from "../../../Context/Context";
import styles from "./Hero4.module.css";
const Hero4 = () => {
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

  return (
    <>
      <div class={data.container.style}>
        <div class="row m-0">
          <div class={`col-md-7 ${styles.boxen}`}>
            <div class={` ${styles.preschool_text}`}>
              <h2
                className={data.heading.style}
                contentEditable={ctx.isEditable}
              >
                {" "}
                {data.heading.value}
              </h2>
              <p
                className={data.paragraph.style}
                contentEditable={ctx.isEditable}
              >
                {data.paragraph.value}{" "}
              </p>
            </div>
          </div>
          <div class={`col-md-5 ${styles.bot} ${styles.rt_pad}`}>
            <div class={` ${styles.image}`}>
              <img class="img-fluid" src="/Images/day_care_img_11.jpg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero4;
