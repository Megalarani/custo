import React, { useState, useEffect } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DraggableList from "../../Components/Layout/DraggableList";
const Layout = () => {
  const [sectionsList, setSectionsList] = useState([]);
  const [layout, setLayout] = useState([]);
  const items = [
    {
      heading: "Menubar",
      content: ["Navbar_1"],
    },
    {
      heading: "Hero",
      content: ["Hero_1", "Hero_2", "Hero_3", "Hero_4"],
    },
    {
      heading: "Gallery",
      content: ["Gallery_1"],
    },
    {
      heading: "Testimonals",
      content: ["Slider_1"],
    },
    {
      heading: "Contact",
      content: ["Form_1"],
    },
    {
      heading: "Footer",
      content: ["Footer_1"],
    },
  ];

  const handleOnDragEnd = (movedItem) => {
    const newArr = Array.from(sectionsList);
    const [reorderedItem] = newArr.splice(movedItem.source.index, 1);
    newArr.splice(movedItem.destination.index, 0, reorderedItem);
    setSectionsList(newArr);
  };

  if (sectionsList.length === 0) {
    var tempArr = [];
    for (var i = 0; i < items.length; i++) {
      tempArr = tempArr.concat(items[i].content);
    }
    setSectionsList(tempArr);
  }

  return (
    <>
      <div className="row">
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div
            className="col-2 p-0 special-scroll"
            style={{ height: "91vh", overflowY: "auto" }}
          >
            <DraggableList sectionsList={sectionsList} />
          </div>
          <div className="col-10 p-0"></div>
        </DragDropContext>
      </div>
    </>
  );
};

export default Layout;
