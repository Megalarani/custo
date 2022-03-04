import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { LocalSections } from "../../utilitis/LocalSections";

const AllSections = (props) => {
  return (
    <div className="all-section-list bg-light col-2 p-0">
      <h6 className="px-2 py-3 text-center text-uppercase">All Sections</h6>
      {/* allowMultipleExpanded */}
      {/* command for multiple expand - doesn't auto close */}
      <Accordion allowZeroExpanded>
        {LocalSections.map((item, index) => (
          <AccordionItem key={index}>
            <AccordionItemHeading>
              <AccordionItemButton>{item.group}</AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              {item.variants.map((section) => (
                <p key={section.id} className="inner-accordion-list">
                  {section.id}
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
