import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
    focus_element: { data: { inner: "" } },
    section_styles: {
      data: {
        container: {
          label: "Container Styles",
          // value: "Hero hds-container bg-primary hds-text-color"
          value: "container test"
        },
        section: {
          label: "Section Styles",
          // value: "hds-section"
          value: "test-text"
        },
        text: {
          large_text_style: {
            label: "Large Text Style",
            value: "hds-title__large mb-sm font-black"
          },
          large_text: {
            label: "Large Text",
            value: "What Our Families are Saying",
            rte: true
          },
        }
      }
    },
    carousel: {
      data: {
        carousel1: {
            small_text_style: {
                label: "Small Text Style",
                value: "hds-copy mb-lg md:mb-md"
              },
              small_text: {
                label: "Critical Thinking",
                value:
                  "   It is a long established fact that a reader will be distracted",
                rte: true
              }
          },
          carousel2: {
            small_text_style: {
                label: "Small Text Style",
                value: "hds-copy mb-lg md:mb-md"
              },
              small_text: {
                label: "Critical Thinking",
                value:
                  "   It is a long established fact that a reader will be distracted",
                rte: true
              }
          },
          carousel3: {
            small_text_style: {
                label: "Small Text Style",
                value: "hds-copy mb-lg md:mb-md"
              },
              small_text: {
                label: "Critical Thinking",
                value:
                  "   It is a long established fact that a reader will be distracted",
                rte: true
              }
          }
      }
    },
   
  };
const SliderV1 = ({ id }) => {
    const { _, check } = useEdit(defaults, id);

  useMyData(id, defaults);
    return (
      <section>
        <div  class={_.section_styles.data.container.value} >
        {_.section_styles.data.section.value}
          <div class= {_.section_styles.data.section.value}>
       
            {check(_.section_styles.data.text.large_text.value) && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: _.section_styles.data.text.large_text.value
                }}
                className={_.section_styles.data.text.large_text_style.value}
              ></h2>
            )}
            <div
              id="carouselExampleIndicators"
              class="carousel slide container tester"
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
              
                <>
                  <div class="carousel-item active">
                  {check(_.carousel.data.carousel1.small_text.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.carousel.data.carousel1.small_text.value
                }}
                className={_.carousel.data.carousel1.small_text_style.value}
              ></p>
            )}
                  </div>
                  <div class="carousel-item">
                  {check(_.carousel.data.carousel2.small_text.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.carousel.data.carousel2.small_text.value
                }}
                className={_.carousel.data.carousel2.small_text_style.value}
              ></p>
            )}
                  </div>
                  <div class="carousel-item">
                  {check(_.carousel.data.carousel3.small_text.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.carousel.data.carousel3.small_text.value
                }}
                className={_.carousel.data.carousel3.small_text_style.value}
              ></p>
            )}
                  </div>
                </>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
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
    );
  };
  
  export default SliderV1;