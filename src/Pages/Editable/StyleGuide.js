import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/Context";

const StyleGuide = () => {
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
  return <></>;
};

export default StyleGuide;
