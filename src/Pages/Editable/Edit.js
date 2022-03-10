import React, { useContext, useEffect, useState } from "react";
import EditableList from "../../Components/Edit/EditableList";
// import { Layout } from "../../utilitis/Layout";
import AuthContext from "../../Context/Context";
import { ReactComponent as EditIcon } from "../../Assests/pencil.svg";

const Edit = () => {
  const ctx = useContext(AuthContext);
  const [mountedComponent, setMountedComponent] = useState([]);
  useEffect(() => {
    // if (ctx.getWebstieData === null) {
    //   ctx.getWebstieData();
    //   ctx.getUserData();
    //   ctx.getLayoutData();
    //   setTimeout(() => {
    //     ctx.formLayout();
    //   }, 3000);
    //  }
    ctx.updateIsEditable(true);
  }, []);
  if (mountedComponent.length === 0) {
    mountedComponent.push(ctx.layoutFlow[0]);
  }
  const onMount = (id) => {
    const toEdit = ctx.layoutFlow.filter((x) => x.id === id);
    setMountedComponent(toEdit);
  };
  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  return (
    <>
      <div className="row">
        <div className="all-section-list col-2 p-0">
          {ctx.layoutFlow.map((item) => (
            <div
              className="row align-items-center  bg-light border-white justify-content-center p-2"
              key={item.id}
              onClick={() => onMount(item.id)}
              style={{
                border: "0.35rem solid",
                borderBottom: "0",
                cursor: "pointer",
              }}
            >
              <span
                //   className="text-primary"
                style={{ marginRight: "5px", width: "45%" }}
              >
                {item.id}
              </span>
              <EditIcon style={{ width: "7%" }} />
            </div>
          ))}
        </div>
        {/* <EditableList /> */}
        <div className="col-10 p-3">
          {mountedComponent.map((single) => (
            <div key={single.id} style={{zoom: "0.7"}}>
              <CreateComponent component={single.c} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Edit;
