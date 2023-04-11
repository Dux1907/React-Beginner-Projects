import React, { useState } from "react";
import Task from "./Task";
const App = () => {
  let nextid = 4;
  const [list, updatedList] = useState([
    { id: 1, title: "Eat healthy", marked: true },
    { id: 2, title: "Exercise", marked: false },
    { id: 3, title: "Study React", marked: false },
  ]);

  const [val, setVal] = useState("");
  const check = (changeList) => {
    updatedList(
      list.map((prev) => {
        if (prev.id === changeList.id) return changeList;
        else return prev;
      })
    );
  };
  const add = (e) => {
    updatedList((prev) => [
      ...prev,
      {
        id: nextid++,
        title: e,
        marked: false,
      },
    ]);
    setVal("");
  };
  const deletee = (changeList) => {
    updatedList(
      list.filter((prev) => {
        return prev.id !== changeList;
      })
    );
  };

  return (
    <>
      <input
        type="text"
        placeholder="Add text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <button onClick={() => add(val)}>Add</button>
      <Task data={list} check={check} deletee={deletee} />
    </>
  );
};

export default App;
