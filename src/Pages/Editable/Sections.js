import React from "react";
import "../../Css/User.css";
import AllSections from "../../Components/Sections/AllSections";
import Preview from "../../Components/Sections/Preview";

const Sections = () => {
  return (
    <div className="row p-0">
      <AllSections />
      <Preview />
    </div>
  );
};

export default Sections;
