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

  const CreateComponent = ({ component,id }) => {
    const Component = component;
    return <Component id={id} />;
  };
  return (
    <>
      {ctx.layoutFlow &&
        ctx.layoutFlow.map((item) => (
          <div key={item.id}>
            <CreateComponent component={item.c} id={item.uniqId}/>
          </div>
        ))}
    </>
  );
};

export default Home;
