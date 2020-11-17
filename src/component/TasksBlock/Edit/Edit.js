import React from "react";
import "../itemOperations.css";
const Edit = ({ id, edit }) => (
  <button id={id} onClick={edit} className="task-edit"></button>
);
export default Edit;
