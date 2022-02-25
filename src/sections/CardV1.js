import React from "react";
import { useEdit, useMyData } from "../edit";
const defaults = {
  focus_element: { data: { inner: "" } },
  section_styles: {
    data: {
      container: {
        label: "Container Styles",
        // value: "Hero hds-container bg-primary hds-text-color"
        value: "cards row"
      },
      section: {
        label: "Section Styles",
        // value: "hds-section"
        value: "card col-md-3"
      }
    }
  },
  layout: {
    data: {
      layout: {
        label: "Layout",
        // value: "grid grid-cols-1 md:grid-cols-2 md:gap-lg"
        value: "cardin"
      }
    }
  },
  card1: {
    data: {
      container: {
        label: "Container",
        value: ""
      },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: "hds-title__large mb-sm font-black"
        },
        large_text: {
          label: "Large Text",
          value: "Enrollement",
          rte: true
        },
        small_text_style: {
          label: "Small Text Style",
          value: "hds-copy mb-lg md:mb-md"
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
        value: ""
      },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: "hds-title__large mb-sm font-black"
        },
        large_text: {
          label: "Large Text",
          value: "Curriculam ",
          rte: true
        },
        small_text_style: {
          label: "Small Text Style",
          value: "hds-copy mb-lg md:mb-md"
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
        value: ""
      },
      text: {
        large_text_style: {
          label: "Large Text Style",
          value: "hds-title__large mb-sm font-black"
        },
        large_text: {
          label: "Large Text",
          value: "Programs",
          rte: true
        },
        small_text_style: {
          label: "Small Text Style",
          value: "hds-copy mb-lg md:mb-md"
        },
        small_text: {
          label: "Small Text",
          value:
            "   It is a long established fact that a reader will be distracted",
          rte: true
        }
      }
    }
  }
};

const CardV1 = ({ id }) => {
  const { _, check } = useEdit(defaults, id);

  useMyData(id, defaults);
  return (
    <>
      <section id={id} class={_.section_styles.data.container.value}>
        <div class={_.section_styles.data.section.value}>
          <div className={_.layout.data.layout.value}>
            <div class={_.card1.data.container.value}>
              {/* <i class="fa fa-pencil-square-o icon" aria-hidden="true"></i> */}
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
        <div class={_.section_styles.data.section.value}>
          <div className={_.layout.data.layout.value}>
            <div class={_.card2.data.container.value}>
              {/* <i class="fa fa-file icon" aria-hidden="true"></i> */}
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
        <div class={_.section_styles.data.section.value}>
          <div className={_.layout.data.layout.value}>
            <div class={_.card3.data.container.value}>
              {/* <i class="fa fa-calendar-o"></i> */}
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
      </section>
    </>
  );
};

export default CardV1;

