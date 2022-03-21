import React, { useCallback, useContext, useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import AuthContext from "../../Context/Context";
import { db } from "../../services/firebase";
import { doc, updateDoc } from "firebase/firestore";
import Loader from "../../loader/Loader";
import { NavLink } from "react-router-dom";
import { useDrop } from "react-dnd";
import { ReactComponent as DeleteIcon } from "../../Assests/delete.svg";

const Preview = () => {
  const ctx = useContext(AuthContext);
  const [mountedData, setMountedData] = useState([]);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    setMountedData(ctx.layoutFlow ? ctx.layoutFlow : []);
  }, [mountedData]);
  const [{ isOver }, drop] = useDrop({
    accept: "Object",
    drop: (item, monitor) => {
      setMountedData((prevState) => {
        return [...prevState, item];
      });
      ctx.addLayout(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
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
  const deleteHandler = () => {};
  function SaveLayout() {
    setloading(true);
    updateDoc(doc(db, "layout", ctx.userId), { layout: ctx.layoutData.layout });
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }
  return (
    <>
      {loading && (
        <>
          <Loader />
        </>
      )}
      <div
        className="col-10 p-2 special-scroll"
        style={{ height: "91vh", overflowX: "hidden", overflowY: "auto" }}
      >
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <div className="row px-4  pt-2 pb-4 justify-content-between">
            <button
              className="btn px-5"
              onClick={SaveLayout}
              style={{
                background: "#fff",
                color: "#dc3545",
                borderRadius: "20px",
                boxShadow: "0 3px 6px #00000036",
              }}
            >
              Save<i className="fa fa-save mx-2"></i>{" "}
            </button>

            <NavLink to="/" target="_blank">
              <button
                className="btn shadow px-3  "
                style={{
                  background: "#fff",
                  color: "#dc3545",
                  borderRadius: "20px",
                  boxShadow: "0 3px 6px #00000036",
                }}
              >
                Fullpage View<i className="fa fa-eye mx-2"></i>
              </button>
            </NavLink>
          </div>
          <Droppable droppableId="mounted">
            {(provided) => (
              <div
                className="mounted px-4"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="border" ref={drop} style={{ zoom: "0.6" }}>
                  {mountedData.map((item, index) => (
                    <Draggable key={index} draggableId={item.id} index={index}>
                      {(provided) => (
                        <div
                          className="position-relative"
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <div
                            onClick={() => deleteHandler(index)}
                            style={{
                              position: "absolute",
                              top: "0",
                              left: "0",
                              zIndex: 20,
                              cursor: "pointer",
                            }}
                          >
                            <DeleteIcon
                              style={{
                                width: "2rem",
                                height: "2rem",
                                fill: "#dc3545",
                                padding: "5px"
                              }}
                            />
                          </div>
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
