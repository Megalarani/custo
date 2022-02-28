import React from "react";
import { useEdit, useMyData } from "../edit";

const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        value: "Gallery",
      },
      section: {
        label: "Section Styles",
        value: "gallery-heading",
      },
    },
  },

  above: {
    data: {
      container: {
        label: "Container",
        value: "max-w-2xl mx-auto",
      },
      small_text_style: {
        label: "Small Text Style",
        value: "",
      },
      small_text: {
        label: "Small Text",
        value: "Gallery",
        rte: true,
      },
     
    },
  },
Gallery_container:{
  container:{
    label:"gallery",
    value:"gallery"
  },
  block:{
    label:"block",
    value:"gal"
  },
  wrapper:{
    label:"wrapper",
    value:"gal-wrapper"
  },
  cover:{
    label:"cover",
    value:"hidden-cover"
  },
},
Image1:{
 
  image_1: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
},Image2:{
 
  image_2: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
},
Image3:{
 
  image_3: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
},
Image4:{
 
  image_4: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
},
Image5:{
 
  image_5: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
},
Image6:{
 
  image_6: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
},
Image7:{
 
  image_7: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
},
Image8:{
 
  image_8: {
    label: "Image 1",
    value: "https://images.unsplash.com/photo-1503394849345-bb4ec5c27ad8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    image: true
  },
  large_text_style: {
    label: "Large Text Style",
    value:
      "Sea"
  },
  large_text: {
    label: "Large Text",
    value: "sea",
    rte: true,
  },
  
}

};
const GalleryV6 = ({id}) => {
  const { _, check } = useEdit(defaults, id);
  useMyData(id, defaults);
  return (
    <section id={id} className={_.section_styles.data.container.value}>
      <div className={_.section_styles.data.section.value}>
        {check(_.above.data.small_text.value) && (
          <h2
            dangerouslySetInnerHTML={{
              __html: _.above.data.small_text.value,
            }}
            className={_.above.data.small_text_style.value}
          ></h2>
        )}
      </div>
 <div className={_.Gallery_container.container.value}>

      <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image1.image_1.value}
              alt="image1"
            />
             {check(_.Image1.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image1.large_text.value}}
            className={_.Image1.large_text_style.value}
          ></h4>}
          
          </div>
        </a>
      
        <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image2.image_2.value}
              alt="image2"
            />
             {check(_.Image2.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image2.large_text.value}}
            className={_.Image2.large_text_style.value}
          ></h4>}
          
          </div>
        </a>

        <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image3.image_3.value}
              alt="image3"
            />
             {check(_.Image3.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image3.large_text.value}}
            className={_.Image3.large_text_style.value}
          ></h4>}
          
          </div>
        </a>

        <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image4.image_4.value}
              alt="image4"
            />
             {check(_.Image4.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image4.large_text.value}}
            className={_.Image4.large_text_style.value}
          ></h4>}
          
          </div>
        </a>

        <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image5.image_5.value}
              alt="image5"
            />
             {check(_.Image5.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image5.large_text.value}}
            className={_.Image5.large_text_style.value}
          ></h4>}
          
          </div>
        </a>

        <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image6.image_6.value}
              alt="image6"
            />
             {check(_.Image6.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image6.large_text.value}}
            className={_.Image6.large_text_style.value}
          ></h4>}
          
          </div>
        </a>

        <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image7.image_7.value}
              alt="image7"
            />
             {check(_.Image7.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image7.large_text.value}}
            className={_.Image7.large_text_style.value}
          ></h4>}
          
          </div>
        </a>

        <a href="#" class={_.Gallery_container.block.value}>
          <div class={_.Gallery_container.wrapper.value}>
            <div class={_.Gallery_container.cover.value}></div>
            <img
              src={_.Image8.image_8.value}
              
            />
             {check(_.Image8.large_text.value)&&<h4
            dangerouslySetInnerHTML={{ __html: _.Image8.large_text.value}}
            className={_.Image8.large_text_style.value}
          ></h4>}
          
          </div>
        </a>
       

        
      </div>
    </section>
  );
};

export default GalleryV6;
