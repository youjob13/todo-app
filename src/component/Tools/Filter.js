import React from "react";
import { connect } from "react-redux";
import { filterOut } from "../../redux/store";

const Filter = ({ isFiltered, filterOut }) => {
  const filterCompleted = () => {
    filterOut(!isFiltered);
  };
  return (
    <div>
      <input
        onChange={filterCompleted}
        className="task-checkbox completed-tasks"
        id="filterCheckbox"
        type="checkbox"
      />
      <label for="filterCheckbox">
        <span></span>
      </label>
    </div>
  );
};

const mapStateToProps = ({ isFiltered }) => ({
  isFiltered,
});

export default connect(mapStateToProps, { filterOut })(Filter);
