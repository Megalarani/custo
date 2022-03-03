import React, { useState } from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const DraggableList = (props) => {
  const Item = styled.div`
    display: flex;
    color: #000;
    user-select: none;
    padding: 0.5rem;
    align-items: flex-start;
    align-content: flex-start;
    line-height: 1.5;
    border-radius: 3px;
    background: #fff;
  `;
  return (
    <>
      <Droppable droppableId="droppablearea">
        {(provided, snapshot) => (
          <div
            className="droppablearea"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {props.sectionsList.map((list, index) => (
              <>
                <Item>{list}</Item>
                <Draggable
                  key={list}
                  draggableId={list}
                  index={index}
                  renderClone
                >
                  {(provided) => (
                    <Item
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      {list}
                    </Item>
                  )}
                </Draggable>
              </>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  );
};

export default DraggableList;
