import React from "react";
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

const Preview = () => {
  const items = [
    {
      heading: "Menubar",
      content: [{ component: Navbar1, name: "Navbar_1" }],
    },
    {
      heading: "Hero",
      content: [
        { component: Hero1, name: "Hero _1" },
        { component: Hero2, name: "Hero _2" },
        { component: Hero3, name: "Hero _3" },
        { component: Hero4, name: "Hero _4" },
      ],
    },
    {
      heading: "Card",
      content: [
        { component: Card1, name: "Card _1" },
        { component: Card2, name: "Card _2" },
      ],
    },
    {
      heading: "Gallery",
      content: [{ component: Gallery1, name: "Gallery_1" }],
    },
    {
      heading: "Testimonals",
      content: [{ component: Slider1, name: "Slider_1" }],
    },
    {
      heading: "Contact",
      content: [{ component: Form1, name: "Form_1" }],
    },
    {
      heading: "Footer",
      content: [{ component: Footer1, name: "Footer_1" }],
    },
  ];
  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  return (
    <div className="col-10 p-2">
      <h3 className="text-center p-2" style={{ color: "var(--primary)" }}>
        Campuzone provides you with various options
      </h3>
      {items.map((single, index) => (
        <div key={index * 11}>
          <h6 className="text-primary text-capitalize px-2 py-3">
            {single.heading}
          </h6>
          <div className="row">
            {single.content.map((section, index) => (
              <div key={`${section}` + `${index}`} className="col-6 p-2">
                <iframe style={{width: "100%"}}>
                  <CreateComponent component={section.component} />
                </iframe>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preview;
