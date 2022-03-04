import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const AllSections = (props) => {
  return (
    <div className="all-section-list bg-light col-2 p-0">
      <h6 className="px-2 py-3 text-center text-uppercase">All Sections</h6>
      {/* allowMultipleExpanded */}
      {/* command for multiple expand - doesn't auto close */}
      <Accordion allowZeroExpanded>
        {props.data.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.group}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.variants.map((section) => (
                <p key={section.id} className="inner-accordion-list">
                  {section.name}
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
