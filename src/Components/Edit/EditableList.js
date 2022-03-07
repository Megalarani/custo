import React, { useContext } from "react";
import AuthContext from "../../Context/Context";
import { ReactComponent as EditIcon } from "../../Assests/pencil.svg";

const EditableList = () => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <div className="all-section-list col-2 p-0">
        {ctx.layoutFlow.map((item) => (
          <div
            className="row align-items-center  bg-light border-white justify-content-center p-2"
            key={item.id}
            style={{
              border: "0.35rem solid ",
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
    </>
  );
};

export default EditableList;
