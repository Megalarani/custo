import React, { useContext, useEffect } from "react";
import AuthContext from "../../Context/Context";

const Settings = () => {
  const ctx = useContext(AuthContext);
  useEffect(() => {
    ctx.updateIsEditable(false);
  }, []);
  return <></>;
};

export default Settings;
