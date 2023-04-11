import React, { useState } from "react";

const Task = ({ data, check, deletee }) => {
  return (
    <ul>
      {data.map((prev) => (
        <li key={prev.id}>
              <TaskList list={prev}
                  check={check}
                  deletee={deletee} 
                  />
        </li>
      ))}
    </ul>
  );
};
const TaskList = ({ list, check, deletee }) => {
  const [edit, updatedEdit] = useState(false);
  let content;
  if (edit) {
    content = (
      <>
        <input
          type="text"
          placeholder="enter stuffs"
          value={list.title}
          onChange={(e) => check({ ...list, title: e.target.value })}
        />
        <button onClick={() => updatedEdit(false)}>Save</button>
      </>
    );
  } else {
    content = (
      <>
        <p>{list.title}</p>
        <button onClick={() => updatedEdit(true)}>Edit</button>
      </>
    );
  }
  return (
    <>
      <label>
        <input
          type="checkbox"
          checked={list.marked}
          onChange={(e) => check({ ...list, marked: e.target.checked })}
        />
        {content}
        <button onClick={() => deletee(list.id)}>Delete</button>
      </label>
    </>
  );
};
export default Task;
