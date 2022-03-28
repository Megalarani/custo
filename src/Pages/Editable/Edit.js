import React, { useContext, useEffect, useState } from "react";
import EditableList from "../../Components/Edit/EditableList";
// import { Layout } from "../../utilitis/Layout";
import AuthContext from "../../Context/Context";
import { ReactComponent as EditIcon } from "../../Assests/pencil.svg";

const Edit = () => {
  const ctx = useContext(AuthContext);
  const [mountedComponent, setMountedComponent] = useState([]);
  useEffect(() => {
    ctx.updateIsEditable(true);
  }, []);
  if (ctx.layoutFlow && mountedComponent.length === 0) {
    mountedComponent.push(ctx.layoutFlow[0]);
  }
  const onMount = (id) => {
    setMountedComponent((prevState) => {
      prevState = [];
      return [...prevState, ctx.layoutFlow[id]];
    });
  };
  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  const rename = (name, i) => {
    let firstName = name.substring(0, name.length - 2);
    let lastName = name.charAt(name.length - 1);
    let newName = firstName + " " + lastName;
    return newName;
  };
  return (
    <>
      <div className="row">
        <div className="all-section-list col-2 p-0">
          {ctx.layoutFlow &&
            ctx.layoutFlow.map((item, index) => (
              <div
                className="row align-items-center  bg-light border-white justify-content-center p-2"
                key={index}
                onClick={() => onMount(index)}
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
                  {rename(item.uniqId, index)}
                </span>
                <EditIcon style={{ width: "7%" }} />
              </div>
            ))}
        </div>
        {/* <EditableList /> */}
        <div className="col-10 p-3">
          {mountedComponent.map((single) => (
            <div
              key={single.uniqId}
              style={{ zoom: "0.7" }}
            >
              <CreateComponent component={single.c} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Edit;
