import React from "react";
import CurrentDate from "./component/CurrentDate/CurrentDate";
import Tools from "./component/Tools/Tools";
import Tasks from "./component/TasksBlock/Tasks/Tasks";

import "./App.css";

const App = () => (
  <div className="todoList">
    <CurrentDate />
    <Tools />
    <Tasks />
  </div>
);
export default App;
