import React from "react";
import { Layout } from "../../utilitis/Layout";

const Edit = () => {
  console.log(Layout);
  return (
    <>
      <div className="row">
        <div className="col-2 p-1">
          {Layout.map((data, index) => (
            <div key={index}>
              <div className="row bg-light align-items-center p-2 justify-content-between">{data.id}&ensp;<i class="fas fa-edit"></i></div>
            </div>
          ))}
        </div>
        <div className="col-3 p-1"></div>
        <div className="col-7 p-1"></div>
      </div>
    </>
  );
};

export default Edit;
