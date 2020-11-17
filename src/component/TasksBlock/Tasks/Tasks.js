import React from "react";
import { connect } from "react-redux";
import {
  markTask,
  updateTaskDate,
  updateTaskTextValue,
} from "../../../redux/store";
import Task from "../Task/Task";
import "./tasks.css";

const Tasks = (props) => {
  return (
    <div className="tasks-block">
      {props.tasks.length > 9 ? <div className="navigation">↓</div> : null}
      <ul className="tasks-list">
        {props.tasks.map((item, index) => (
          <Task key={item.id} num={index} task={item} {...props} />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = ({ tasks, isFiltered }) => ({
  isFiltered,
  tasks,
});

export default connect(mapStateToProps, {
  updateTaskDate,
  markTask,
  updateTaskTextValue,
})(Tasks);
