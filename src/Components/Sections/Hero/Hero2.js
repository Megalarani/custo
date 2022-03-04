import React from "react";

const Hero2 = () => {
    const data = {
        container: {
          style: "about container",
          value: "",
        },
        heading: {
          style: "",
          value: "About Us",
        },
        paragraph:{
            style:"",
            value:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout"
        }
      };


    return (
        <>
           <section id="#About">
      <div class={data.container.style}>
        <h2 class={data.heading.style}  >{data.heading.value}   </h2>
        <p  class={data.paragraph.style} >{data.paragraph.value}</p>;
      </div>
    </section>
        
        
        </>
    )
}

export default Hero2;