import React from "react";
import styles from "./Slider1.module.css";
const Slider1 = () => {
    const data = {
        container: {
          style: `container ${styles.test}`,
          value: "",
        },
        heading :{
            style: `${styles.test_text_h2}`,
          value: "What Our Families are Saying",
        },
      slides: {
           paragraph1: "It is a long established fact that a reader will be distracted by the readable", 
           paragraph2: "It is a long established fact that a reader will be distracted by the readable",
           paragraph3: "It is a long established fact that a reader will be distracted by the readable",
      }
       }
   

    return (
        <>
          <section>
      <div class={data.container.style}>
        <div class="text-center ">
          <h2 className={data.heading.style}>{data.heading.value}</h2>
          <div
            id="carouselExampleIndicators"
            class= { `carousel slide container ${styles.tester}`}
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
            <div class="carousel-inner">
    <div class="carousel-item active">
      <p>{data.slides.paragraph1}</p>
    </div>
    <div class="carousel-item">
    <p>{data.slides.paragraph1}</p>
    </div>
    <div class="carousel-item">
    <p>{data.slides.paragraph1}</p>
    </div>
  </div>
                
              <a class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev">
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>


        
        
        </>
    );
            }

export default Slider1;