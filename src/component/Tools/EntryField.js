import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import shortid from "shortid";
import { createDate } from "../../common/createDate";
import { addNewTask } from "../../redux/store";

const EntryField = ({ tasks, addNewTask }) => {
  const [text, setText] = useState("");
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);
  const newText = (e) => {
    setText(e.target.value);
  };
  const addTask = (e) => {
    e.preventDefault();

    if (e.target.children[0].value.trim() !== "") {
      const task = {
        id: shortid.generate(),
        value: text,
        completed: false,
        dateTask: createDate(),
      };
      addNewTask(task);
    } else {
      alert("Empty field!");
    }

    setText("");
  };
  return (
    <form onSubmit={addTask}>
      <input
        onChange={newText}
        id="input"
        type="text"
        className="input"
        value={text}
      />
      <button className="button-new-task" />
    </form>
  );
};

const mapStateToProps = ({ tasks }) => ({
  tasks,
});

export default connect(mapStateToProps, { addNewTask })(EntryField);
