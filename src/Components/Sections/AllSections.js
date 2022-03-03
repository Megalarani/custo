import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";
import Navbar1 from "./Navbar/Navbar1";
import Hero1 from "./Hero/Hero1";
import Hero2 from "./Hero/Hero2";
import Hero3 from "./Hero/Hero3";
import Hero4 from "./Hero/Hero4";
import Form1 from "./Contact/Form1";
import Card1 from "./Card/Card1";
import Card2 from "./Card/Card2";
import Gallery1 from "./Gallery/Gallery1";
import Slider1 from "./Testimonals/Slider1";
import Footer1 from "./Footer/Footer1";

const AllSections = (props) => {
  return (
    <div className="all-section-list bg-light col-2 p-0">
      <h6 className="px-2 py-3 text-center text-uppercase">All Sections</h6>
      {/* allowMultipleExpanded */}
      {/* command for multiple expand - doesn't auto close */}
      <Accordion allowZeroExpanded>
        {props.section.map((item, index) => (
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
