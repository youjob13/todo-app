import React, { useState } from "react";
import Delete from "../Delete/Delete";
import Edit from "../Edit/Edit";
import "./task.css";

const Task = ({
  updateTaskDate,
  updateTaskTextValue,
  task,
  isFiltered,
  markTask,
  num,
}) => {
  const [editMode, setEditMode] = useState(false);
  const [text, setText] = useState(task.value);
  const [date, setDate] = useState(task.dateTask);
  const activateEditMode = () => {
    setEditMode(true);
  };
  const changeCheckbox = () => {
    markTask(task.id);
  };
  const deActiveEditMode = () => {
    if (text.trim() === "") alert("Empty field");
    else {
      setEditMode(false);
      updateTaskTextValue(text, task.id);
      updateTaskDate(date, task.id);
    }
  };
  const updateTaskText = (e) => {
    setText(e.target.value);
  };
  const updateDate = (e) => {
    setDate(e.target.value);
  };
  if (isFiltered && !task.completed) return null;
  return (
    <li className="task-item">
      <span className="task-number">{num + 1}</span>
      <div className="task-status">
        <input
          className="task-checkbox"
          type="checkbox"
          onChange={changeCheckbox}
          checked={task.completed}
          id={task.id}
        />
        <label for={task.id}>
          <span></span>
        </label>
      </div>
      {!editMode ? (
        <span>{text}</span>
      ) : (
        <input
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              deActiveEditMode(e);
            }
          }}
          onChange={updateTaskText}
          autoFocus
          value={text}
        />
      )}
      <input
        onInput={updateDate}
        readOnly={!editMode}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            deActiveEditMode(e);
          }
        }}
        className="task-date"
        type="date"
        value={date}
      />
      <div className="task-interaction">
        {editMode ? (
          <Edit edit={deActiveEditMode} id={task.id} />
        ) : (
          <Edit edit={activateEditMode} id={task.id} />
        )}
        <Delete id={task.id} />
      </div>
    </li>
  );
};

export default Task;
