import React, { Component, useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DraggableList from "../../Components/Layout/DraggableList";
import Preview from "../../Components/Layout/Preview";

const Layout = () => {
  const [sectionsList, setSectionsList] = useState([]);
  const [layout, setLayout] = useState([]);
  return (
    <>
      <div className="row">
        <DraggableList />
        <Preview />
      </div>
    </>
  );
};

export default Layout;
