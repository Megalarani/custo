import React from "react";
import styles from "./Gallery.module.css";
const Gallery1 = () => {
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
  return (
    <>
      <section id="#Gallery">
        <div class={data.container.styles}>
          <h2  class={data.heading.styles}>{data.heading.value}</h2>
        </div>

        <div class={`${styles.gallery}`}>
          {data.images.map((item, index) => (
            <a href="#" class="gal" key={index}>
              <div class={`${styles.gal_wrapper} `}>
                <div class={`${styles.hidden_cover} `}></div>
                <img src={item.imgLink} alt={item.imgName} />
                <h4>{item.imgName}</h4>
              </div>
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Gallery1;
