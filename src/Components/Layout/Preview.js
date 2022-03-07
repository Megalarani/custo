import React, { useCallback, useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Layout } from "../../utilitis/Layout";
import AuthContext from "../../Context/Context";

const Preview = () => {
  const ctx = useContext(AuthContext);
  const [mountedData, setMountedData] = useState([]);
  useEffect(()=>{
    setMountedData(ctx.layoutFlow);
  })
  const handleOnDragEnd = (movedItem) => {
    const newArr = Array.from(mountedData);
    const [reorderedItem] = newArr.splice(movedItem.source.index, 1);
    newArr.splice(movedItem.destination.index, 0, reorderedItem);
    setMountedData(newArr);
    ctx.updateLayout(newArr);
  };
  const CreateComponent = ({ component }) => {
    const Component = component;
    return <Component />;
  };
  return (
    <>
      <div
        className="col-10 p-2 special-scroll"
        style={{ height: "91vh", overflowX: "hidden", overflowY: "auto" }}
      >
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="row px-4 pt-2 pb-4 justify-content-between">
            <span>Full Page View</span>
            <span>Preview</span>
            <span>Publish</span>
          </div>
          <Droppable droppableId="mounted">
            {(provided) => (
              <div
                className="mounted px-4"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="border" style={{ zoom: "0.6" }}>
                  {mountedData.map((item, index) => (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <CreateComponent component={item.c} />
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </>
  );
};

export default Preview;
