import React, { useContext, useEffect } from "react";
import AllSections from "../../Components/Sections/AllSections";
import Preview from "../../Components/Sections/Preview";
import AuthContext from "../../Context/Context";

const Sections = (props) => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    ctx.updateIsEditable(false);
  },[]);
  return (
    <div className="row p-0">
      <AllSections data={props.sections} />
      <Preview data={props.sections} />
    </div>
  );
};

export default Sections;
