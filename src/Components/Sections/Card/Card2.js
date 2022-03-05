import React from "react";
import styles from "./Card2.module.css";
const Card2 = () => {
    const data = {
        container: {
          style: `${styles.curriculamheading}`,
          value: "",
        },
       heading :{
        style: "",
        value: "Curriculam"  
       },
       layout: {
        style: `container${styles.curriculam}`,
        value: "",
      },
        cards :{
            card1:{
           
        heading :{
        style: "",
        value: "Reading/write ",  
       }, 
        paragraph: {
        style: "",
        value: "It is a long established fact that a reader will be distracted",  

       }
    },
    card2:{
  
       heading :{
        style: "",
        value: "Maths/science",  
       }, 
        paragraph: {
        style: "",
        value: "  It is a long established fact that a reader will be distracted",  

       }},
       card3:{
    
       heading :{
        style: "Art",
        value: "" 
       }, 
        paragraph: {
        style: "",
        value: "  It is a long established fact that a reader will be distracted",  

       }},
       card4:{
    
        heading :{
         style: "Critical Thinking",
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
          <section class="culm" id="#curriculam">
      <div class={data.container.style}>
        <h2 class={data.heading.style}>{data.heading.value}</h2>
      </div>
      <div class={data.layout.style}>
        <div class={`${styles.curriculamcol}`}>
          <div class={`${styles.cardin}`}>
            <div class={`${styles.round} ${styles.ron3}`}>
              <i class="fa fa-pencil-square icon" aria-hidden="true"></i>
            </div>
            <h2 className={data.cards.card1.heading.style} >{data.cards.card1.heading.value}</h2>
            <p className={data.cards.card1.paragraph.style}>
             {data.cards.card1.paragraph.value}
            </p>
          </div>
        </div>
        <div class={`${styles.curriculamcol}`}>
          <div class={`${styles.cardin}`}>
            <div class={`${styles.round} ${styles.ron1}`}>
              <i class="fa fa-flask icon" aria-hidden="true"></i>
            </div>
            <h2 className={data.cards.card2.heading.style}  >{data.cards.card2.heading.value}</h2>
            <p className={data.cards.card2.paragraph.style}>
             {data.cards.card2.paragraph.value}
            </p>
          </div>
        </div>
        <div class={`${styles.curriculamcol}`}>
          <div class={`${styles.cardin}`}>
            <div class={`${styles.round} ${styles.ron2} ${styles.icon}` }>
              <i class="fa fa-picture-o" aria-hidden="true"></i>
            </div>
            <h2 className={data.cards.card3.heading.style} >{data.cards.card3.heading.value}</h2>
            <p className={data.cards.card3.paragraph.style}>
             {data.cards.card3.paragraph.value}
            </p>
          </div>
        </div>
        <div class={`${styles.curriculamcol}`}>
          <div class={`${styles.cardin}`}>
            <div class={`${styles.round} ${styles.ron3} ${styles.icon}` }>
              <i class="fa fa-toggle-off" aria-hidden="true"></i>
            </div>
            <h2 className={data.cards.card4.heading.style} >{data.cards.card4.heading.value}</h2>
            <p className={data.cards.card4.paragraph.style}>
             {data.cards.card4.paragraph.value}
            </p>
          </div>
        </div>
      </div>
    </section>
        
        
        </>
    )
}

export default Card2;