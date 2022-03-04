import React from "react";

const Card1 = () => {
    const data = {
        container: {
          style: "cards row",
          value: "",
        },

       
        cards :{
            card1:{
            layout: {
                style: "card col-md-3",
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
        style: "card card2 col-md-3",
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
        style: "card col-md-3",
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
                <div class="cardin">
                  <div class="round ron1 ">
                    <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i>
                  </div>
                  <h2 className={data.cards.card1.heading.style} >{data.cards.card1.heading.value} </h2>
                  <p className={data.cards.card1.paragraph.style} >
                  {data.cards.card1.paragraph.value}
                  </p>
                </div>
              </div> 
              <div class={data.cards.card2.layout.style}>
          <div class="cardin">
            <div class="round ron2 ">
              <i class="fa fa-file icon" aria-hidden="true"></i>
            </div>
            <h2 className={data.cards.card2.heading.style} >{data.cards.card2.heading.value}</h2>
            <p className={data.cards.card2.paragraph.style}>
            {data.cards.card2.paragraph.value}
            </p>
          </div>
        </div>
        <div class={data.cards.card3.layout.style}>
          <div class="cardin">
            <div class="round ron3 icon">
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