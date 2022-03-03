import React from "react";
import AllSections from "../../Components/Sections/AllSections";
import Preview from "../../Components/Sections/Preview";

const Sections = (props) => {
  return (
    <div className="row p-0">
      <AllSections section={props.section} />
      <Preview section={props.section} />
    </div>
  );
};

export default Sections;
