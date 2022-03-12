import React from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Context";
const Home = () => {
  // const ctx = useContext(AuthContext);
  // const [mountedData, setMountedData] = useState([]);
  // useEffect(() => {
  //   ctx.getLayoutData();
  //   ctx.getWebsiteData();
  //   setMountedData(ctx.layoutFlow ? ctx.layoutFlow : []);
  // }, [mountedData]);

  // const CreateComponent = ({ component }) => {
  //   const Component = component;
  //   return <Component />;
  // };

  return (
    <>
      {/* {mountedData.map((item, index) => (
        <div>
          <CreateComponent component={item.c} />
        </div>
      ))} */}
    </>
  );
};

export default Home;
