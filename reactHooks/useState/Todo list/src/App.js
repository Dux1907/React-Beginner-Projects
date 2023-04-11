import React, { useState } from "react";
import "./index.css";
import TodoList from "./TodoList";
const radius = {
  borderRadius: "5px",
};
const background = {
  backgroundColor: "#da70d6",
  color: "white",
};
const button = {
  minHeight: "17px",
  minWidth: "30px",
};
const flex = {
  display: "flex",
  justifyContent: "space-evenly",
};
const flexTwo = {
  display: "flex",
  alignItems: "start",
  flexDirection: "column",
};
const App = () => {
  const [initial, final] = useState();
  const [arr, push] = useState([]);
  const change = (e) => {
    final(e.target.value);
  };
  const set = () => {
    push((prev) => {
      return [...prev, initial];
    });
    final("");
  };
  const remove = (id) => {
  //  console.log("remove");
    push((prev) => {
      return prev.filter((val, index) => {
        return id !== index;
      });
    });
  };
  return (
    <>
      <h2 style={background} className="my-3">
        Todo List
      </h2>
      <div style={flex}>
        <input
          style={radius}
          className="m-2"
          type="text"
          placeholder="Add an item"
          value={initial}
          onChange={change}
        />
        <button
          onClick={set}
          style={button}
          className="border fs-4 rounded mb-3 mt-2"
        >
          +
        </button>
      </div>
      <ul style={flexTwo}>
        {arr.map((val, index) => {
          return (
            <TodoList key={index} id={index} text={val} onSelect={remove} />
          );
        })}
      </ul>
      
         {/* {
        document.addEventListener('keypress', function(e) => {
          if(event.key === 'Enter')
          set()
        })
      }  */}
      
    </>
  );
};

export default App;
