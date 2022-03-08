import React, { useContext, useState } from "react";
import styles from "./Slider1.module.css";
import AuthContext from "../../../Context/Context";
const Slider1 = () => {
  const ctx = useContext(AuthContext);
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
       const [localData, setLocalData] = useState(ctx.websiteData.slider1);
       let Identifier = "slider1";
       console.log(localData, "local");
       const onChangeHandler = (e, details, index) => {
         setLocalData((prevState) => {
           let updatedData = null;
           if (e.target.id === "heading") {
             updatedData = {
               ...details,
               heading: e.target.value,
             };
           } else {
             updatedData = {
               ...details,
               content: e.target.value,
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
            
        
            {localData.map((details, index) => (
              <div class="carousel-inner ">
              {ctx.isEditable ? (
                <>   <div class="carousel-item active">
                    <textarea
                    onChange={(e) => onChangeHandler(e, details, index)}
                    className={`${styles.inputPara}`}
                    id="content"
                    value={details.content}
                  />
                   </div>
                </>
              ) : (
                <>
                <div class="carousel-item active">
                  <p>
                    {details.content}
                  </p>
                  </div>
                  
                </>
              )}
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
        
    ))}
  
         </div>       
           
        </div>
      </div>
    </section>


        
        
        </>
    );
            }

export default Slider1;