import React from "react";
import { connect } from "react-redux";
import { deleteTask } from "../../../redux/store";

const Delete = ({ id, deleteTask }) => {
  const deleteItem = (e) => {
    deleteTask(e.target.id);
  };
  return <button id={id} onClick={deleteItem} className="task-delete"></button>;
};
const mapStateToProps = ({ tasks }) => ({
  tasks,
});
export default connect(mapStateToProps, { deleteTask })(Delete);
