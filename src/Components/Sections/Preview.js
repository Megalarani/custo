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

const Preview = (props) => {
  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  return (
    <div className="col-10 p-2">
      <h3 className="text-center p-2" style={{ color: "var(--primary)" }}>
        Campuzone provides you with various options
      </h3>
      {props.data.map((single, index) => (
        <div key={index * 11}>
          <h6 className="text-primary text-capitalize px-2 py-3">
            {single.group}
          </h6>
          <div className="row">
            {single.variants.map((section) => (
              <div key={section.id} className="col-6 p-2">
                {/* <iframe style={{width: "100%"}}>
                </iframe> */}
                <CreateComponent component={section.id} />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preview;
