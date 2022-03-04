import React from "react";

const Hero3 = () => {
    const data = {
        container: {
          style: "col-10  boxen",
          value: "",
        },
        heading: {
          style: "",
          value: "Come Visit Us",
        },
        paragraph:{
            style:"",
            value:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout It is a long established fact that a reader will be distracted by the  readable content of a page when looking at its layout"
        }
      };


    return (
        <>
               <section>
            <div class={data.container.style}>
                <div class="visitus">
                    <h2 className={data.heading.style}  > {data.heading.value}</h2>
                   
                    <p className={data.paragraph.style}>{data.paragraph.value} </p>
                    <button type="button" class="btn btn-warning">Schedule a Tour</button>
                </div>
            </div>
        </section>
        
        </>
    )
}

export default Hero3;