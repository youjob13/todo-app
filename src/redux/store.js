import { createStore } from "redux";

const ADD_NEW_TASK = "ADD_NEW_TASK";
const FILTER_OUT = "FILTER_OUT";
const MARK_TASK = "MARK_TASK";
const EDIT_TASK = "EDIT_TASK";
const DELETE_TASK = "DELETE_TASK";
const UPDATE_TASK_TEXT_VALUE = "UPDATE_TASK_TEXT_VALUE";
const UPDATE_TASK_DATE = "UPDATE_TASK_DATE";

const initialState = {
  isFiltered: false,
  tasks: localStorage["tasks"] ? JSON.parse(localStorage["tasks"]) : [],
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NEW_TASK: {
      return {
        ...state,
        tasks: [
          ...state.tasks,
          {
            id: action.task.id,
            value: action.task.value.trim(),
            completed: action.task.completed,
            dateTask: action.task.dateTask,
          },
        ],
      };
    }
    case FILTER_OUT: {
      return {
        ...state,
        isFiltered: action.isFiltered,
      };
    }
    case MARK_TASK: {
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              completed: !item.completed,
            };
          }
          return item;
        }),
      };
    }
    case DELETE_TASK: {
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.id),
      };
    }
    case UPDATE_TASK_TEXT_VALUE: {
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              value: action.text,
            };
          }
          return item;
        }),
      };
    }
    case UPDATE_TASK_DATE: {
      return {
        ...state,
        tasks: state.tasks.map((item) => {
          if (item.id === action.id) {
            return {
              ...item,
              dateTask: action.value,
            };
          }
          return item;
        }),
      };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(reducers);

// Action Creator
export const addNewTask = (task) => ({
  type: ADD_NEW_TASK,
  task,
});
export const filterOut = (isFiltered) => ({
  type: FILTER_OUT,
  isFiltered,
});
export const markTask = (id) => ({
  type: MARK_TASK,
  id,
});
export const editTask = (id) => ({
  type: EDIT_TASK,
  id,
});
export const deleteTask = (id) => ({
  type: DELETE_TASK,
  id,
});
export const updateTaskTextValue = (text, id) => ({
  type: UPDATE_TASK_TEXT_VALUE,
  text,
  id,
});
export const updateTaskDate = (value, id) => ({
  type: UPDATE_TASK_DATE,
  value,
  id,
});

export default store;
