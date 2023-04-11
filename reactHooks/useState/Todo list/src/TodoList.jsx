import React from "react";
import "./index.css";
const position = {
  listStyleType: "none",
};
const flexThree = {
  display: "flex",
  flexDirection: "row",
};
const TodoList = (props) => {
  return (
    <>
      <div style={flexThree}>
        <i
          onClick={() => props.onSelect(props.id)}
          className="bi bi-dash-circle me-2 ms-4"
          area-hidden="true"
        />
        <li style={position}>{props.text}</li>
          </div>
      </>
      
  );
};

export default TodoList;
