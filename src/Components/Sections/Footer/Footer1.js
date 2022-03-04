import React from "react";

const Footer1 = () => {
  const data = {
    container: {
      style: "ft-col",
      value: "",
    },
    heading: {
      style: "",
      value: "Copyrights©Divicare",
    },
  };
  return (
    <>
      <footer>
        <div class={data.container.style}>
          <h2 className={data.heading.style}>{data.heading.value}</h2>
        </div>
      </footer>
    </>
  );
};

export default Footer1;
