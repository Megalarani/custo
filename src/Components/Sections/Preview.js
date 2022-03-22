import React from "react";
import { useContext, useState } from "react/cjs/react.production.min";
import AuthContext from "../../Context/Context";
import { LocalSections, commonSections } from "../../utilitis/LocalSections";

const Preview = (props) => {
  const ctx = useContext(AuthContext);
  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  const [sectionsArray, setSectionsArray] = useState(
    ctx.user.role === "school" ? LocalSections : commonSections
  );
  return (
    <div
      className="col-10 p-2 special-scroll"
      style={{ height: "91vh", overflowX: "hidden", overflowY: "auto" }}
    >
      <h3 className="text-center p-2" style={{ color: "var(--primary)" }}>
        Campuzone provides you with various options
      </h3>
      {sectionsArray.map((single, index) => (
        <div key={index * 11}>
          <h6 className="text-primary text-capitalize px-2 py-3">
            {single.group}
          </h6>
          <div className="row">
            {single.variants.map((section) => (
              <div key={section.id} className="col-6 p-1">
                <div
                  className="p-2 border"
                  id={section.id}
                  style={{ zoom: "0.5" }}
                >
                  <CreateComponent component={section.c} />
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Preview;
