import React from "react";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../Context/Context";
const Home = () => {
  const ctx = useContext(AuthContext);
  const [mountedData, setMountedData] = useState([]);
  useEffect(() => {
    ctx.getLayoutData();
    ctx.getWebsiteData();
  }, []);

  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  return (
    <>
      {ctx.layoutFlow &&
        ctx.layoutFlow.map((item) => (
          <div key={item.id}>
            <CreateComponent component={item.c} />
          </div>
        ))}
    </>
  );
};

export default Home;
