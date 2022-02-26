import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        // value: "Hero hds-container bg-primary hds-text-color"
        value: "bg-white"
      },
      section: {
        label: "Section Styles",
        // value: "hds-section"
        value: "cul-card-head"
      },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: "fs-3-5"
        },
       
        large_text: {
          label: "Large Text",
          value: "Curiculum",
          rte: true
        },
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        // value: "grid grid-cols-1 md:grid-cols-2 md:gap-lg"
        value: "container cul-card"
      }
    }
  },
  card1: {
    data: {
      container: {
        label: "Container",
        value: "cul-card-in "
      },
     layout: {
        label: "layout",
        value: "card-in-sect"
      },
        icon: {
            container:{
            label: "layout",
            value: "cardin"}
         },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: " pax-10 fs-20x"
        },
        large_text: {
          label: "Large Text",
          value: "Reading/write",
          rte: true
        },
        small_text_style: {
          label: "Small Text Style",
          value: "fs-20x"
        },
        small_text: {
          label: "Small Text",
          value:
            "   It is a long established fact that a reader will be distracted",
          rte: true
        }
      }
    }
  },
  card2: {
    data: {
      container: {
        label: "Container",
        value: "cul-card-in "
      },
     layout: {
        label: "layout",
        value: "card-in-sect"
      },
        icon: {
            container:{
            label: "layout",
            value: "cardin"}
         },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: " pax-10 fs-20x"
        },
        large_text: {
          label: "Large Text",
          value: "Maths/science",
          rte: true
        },
        small_text_style: {
          label: "Small Text Style",
          value: "fs-20x"
        },
        small_text: {
          label: "Small Text",
          value:
            "   It is a long established fact that a reader will be distracted",
          rte: true
        }
      }
    }
  },
  card3: {
    data: {
      container: {
        label: "Container",
        value: "cul-card-in "
      },
     layout: {
        label: "layout",
        value: "card-in-sect"
      },
        icon: {
            container:{
            label: "layout",
            value: "card-in-sect"}
         },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: " pax-10 fs-20x"
        },
        large_text: {
          label: "Art",
          value: "Reading/write",
          rte: true
        },
        small_text_style: {
          label: "Small Text Style",
          value: "fs-20x"
        },
        small_text: {
          label: "Small Text",
          value:
            "   It is a long established fact that a reader will be distracted",
          rte: true
        }
      }
    }
  },
  card4: {
    data: {
      container: {
        label: "Container",
  
  
        value: "cul-card-in "
      },
     layout: {
        label: "layout",
        value: "card-in-sect"
      },
        icon: {
            container:{
            label: "layout",
            value: "card-in-sect"}
         },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: " pax-10 fs-20x"
        },
        large_text: {
          label: "Large Text",
          value: "Reading/write",
          rte: true
        },
        small_text_style: {
          label: "Small Text Style",
          value: "fs-20x"
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

const CardV2 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);

  useMyData(id, defaults);
 
    return (
      <section class={_.section_styles.data.container.value}  id={id} >
        <div class={_.section_styles.data.section.value}>
        {check(_.section_styles.data.text.large_text.value) && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: _.section_styles.data.text.large_text.value
                }}
                className={_.section_styles.data.text.large_text_style.value}
              ></h2>
            )}
        </div>
        <div class={_.layout.data.layout.value}>
          <div class={_.card1.data.container.value}>
            <div class={_.card1.data.layout.value}>
        
              <div class={_.card1.data.icon.container.value}>
                <i class="fa fa-pencil-square icon" aria-hidden="true"></i>
              </div>
              {check(_.card1.data.text.large_text.value) && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: _.card1.data.text.large_text.value
                }}
                className={_.card1.data.text.large_text_style.value}
              ></h2>
            )}

            {check(_.card1.data.text.small_text.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.card1.data.text.small_text.value
                }}
                className={_.card1.data.text.small_text_style.value}
              ></p>
            )}

          
            </div>
          </div>
          <div class={_.card2.data.container.value}>
            <div class={_.card2.data.layout.value}>
        
              <div class={_.card2.data.icon.container.value}>
                <i class="fa fa-pencil-square icon" aria-hidden="true"></i>
              </div>
              {check(_.card2.data.text.large_text.value) && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: _.card2.data.text.large_text.value
                }}
                className={_.card2.data.text.large_text_style.value}
              ></h2>
            )}

            {check(_.card2.data.text.small_text.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.card2.data.text.small_text.value
                }}
                className={_.card2.data.text.small_text_style.value}
              ></p>
            )}

          
            </div>
          </div>
          <div class={_.card3.data.container.value}>
            <div class={_.card3.data.layout.value}>
        
              <div class={_.card3.data.icon.container.value}>
                <i class="fa fa-pencil-square icon" aria-hidden="true"></i>
              </div>
              {check(_.card3.data.text.large_text.value) && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: _.card3.data.text.large_text.value
                }}
                className={_.card3.data.text.large_text_style.value}
              ></h2>
            )}

            {check(_.card3.data.text.small_text.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.card3.data.text.small_text.value
                }}
                className={_.card3.data.text.small_text_style.value}
              ></p>
            )}

          
            </div>
          </div>
          <div class={_.card4.data.container.value}>
            <div class={_.card4.data.layout.value}>
        
              <div class={_.card4.data.icon.container.value}>
                <i class="fa fa-pencil-square icon" aria-hidden="true"></i>
              </div>
              {check(_.card4.data.text.large_text.value) && (
              <h2
                dangerouslySetInnerHTML={{
                  __html: _.card4.data.text.large_text.value
                }}
                className={_.card4.data.text.large_text_style.value}
              ></h2>
            )}

            {check(_.card4.data.text.small_text.value) && (
              <p
                dangerouslySetInnerHTML={{
                  __html: _.card4.data.text.small_text.value
                }}
                className={_.card4.data.text.small_text_style.value}
              ></p>
            )}

          
            </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CardV2;
  