import React from "react";
import styles from "./Card1.module.css";
const Card1 = () => {
    const data = {
        container: {
          style: `row ${styles.cards}`,
          value: "",
        },

       
        cards :{
            card1:{
            layout: {
                style: `col-md-3 ${styles.card}`,
                value: "",
              },
        heading :{
        style: "",
        value: "Enrollement ",  
       }, 
        paragraph: {
        style: "",
        value: "It is a long established fact that a reader will be distracted",  

       }
    },
    card2:{
       layout: {
        style: `col-md-3  ${styles.card} ${styles.card2}`,
        value: "",
      },
       heading :{
        style: "",
        value: "Curriculam",  
       }, 
        paragraph: {
        style: "",
        value: "  It is a long established fact that a reader will be distracted",  

       }},
       card3:{
       layout: {
        style: `col-md-3 ${styles.card}`,
        value: "",
      },
       heading :{
        style: "Programs",
        value: "" 
       }, 
        paragraph: {
        style: "",
        value: "  It is a long established fact that a reader will be distracted",  

       }}
 }
      };


    return (
        <>
         <div class={data.container.style}>
            
                <div class={data.cards.card1.layout.style}>
                <div class={`${styles.cardin}`}>
                <div class= {`${styles.round} ${styles.ron1}`}  >
                    <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i>
                  </div>
                  <h2 >{data.cards.card1.heading.value} </h2>
                  <p >{data.cards.card1.paragraph.style}<p/ >
                  {data.cards.card1.paragraph.value}
                  </p>
                </div>
              </div> 
              <div class={data.cards.card2.layout.style}>
          <div class={`${styles.cardin}`}>
            <div class= {`${styles.round} ${styles.ron2}`}  >
              <i class="fa fa-file icon" aria-hidden="true"></i>
            </div>
            <h2 className={data.cards.card2.heading.style} >{data.cards.card2.heading.value}</h2>
            <p className={data.cards.card2.paragraph.style}>
            {data.cards.card2.paragraph.value}
            </p>
          </div>
        </div>
        <div class={data.cards.card3.layout.style}>
          <div class= {`${styles.cardin}`} >
            <div class={`${styles.round} ${styles.ron3} ${styles.icon}`}>
              <i class="fa fa-calendar-o"></i>
            </div>
            <h2 className={data.cards.card3.heading.style} >{data.cards.card3.heading.value}</h2>
            <p className={data.cards.card3.paragraph.style}>
            {data.cards.card3.paragraph.value}
            </p>
          </div>
        </div>
      
      </div> 
        
        
        </>
    )
}

export default Card1;