import React, { useContext, useEffect } from "react";
import AllSections from "../../Components/Sections/AllSections";
import Preview from "../../Components/Sections/Preview";
import AuthContext from "../../Context/Context";

const Sections = (props) => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    // if (ctx.getWebstieData === null) {
    //   ctx.getWebstieData();
    //   ctx.getUserData();
    //   ctx.getLayoutData();
    //   setTimeout(() => {
    //     ctx.formLayout();
    //   }, 3000);
    //  }
    ctx.updateIsEditable(false);
  }, []);
  return (
    <div className="row p-0">
      <AllSections  />
      <Preview  />
    </div>
  );
};

export default Sections;
