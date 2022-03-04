import React from "react";
import AllSections from "../../Components/Sections/AllSections";
import Preview from "../../Components/Sections/Preview";

const Sections = (props) => {
  return (
    <div className="row p-0">
      <AllSections data={props.sections} />
      <Preview data={props.sections} />
    </div>
  );
};

export default Sections;
