import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { LocalSections } from "../../utilitis/LocalSections";

const DraggableList = (props) => {
  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  
  return (
    <>
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
                  <div key={section.id}>
                    <p className="pl-2 pb-0 inner-accordion-list">{section.id}</p>
                    <div className="m-4 p-3 border border-primary" id={section.id} style={{ zoom: "0.2" }}>
                      <CreateComponent component={section.c} />
                    </div>
                  </div>
                ))}
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
};

export default DraggableList;
