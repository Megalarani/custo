import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const AllSections = () => {
  const items = [
    {
      heading: "Menubar",
      content: ["Navbar_1"],
    },
    {
      heading: "Hero",
      content: ["Hero_1", "Hero_2", "Hero_3", "Hero_4"],
    },
    {
      heading: "Gallery",
      content: ["Gallery_1"],
    },
    {
      heading: "Testimonals",
      content: ["Slider_1"],
    },
    {
      heading: "Contact",
      content: ["Form_1"],
    },
    {
      heading: "Footer",
      content: ["Footer_1"],
    },
  ];
  return (
    <div className="col-2 p-0">
      <Accordion allowZeroExpanded>
        {items.map((item) => (
          <AccordionItem key={item.uuid}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.heading}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.content.map((list) => (
                <p className="inner-accordion-list">
                  <span className="arrow">➤</span>
                  {list}
                </p>
              ))}
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AllSections;
