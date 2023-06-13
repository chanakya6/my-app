import axios from "axios";

export const increment = (num) => {
  return {
    type: "INCREMENT",
    payload: num,
  };
};

export const decrement = (num) => {
  return {
    type: "DECREMENT",
    payload: num,
  };
};

export const nameChange = (name) => {
  return {
    type: "NAME_CHANGE",
    payload: name,
  };
};

export const fetchTodoSuccess = (data) => {
  return {
    type: "FETCH_SUCESS",
    payload: data,
  };
};
export const fetchTodoFailure = (error) => {
  return {
    type: "FETCH_FAIL",
    payload: error,
  };
};

export const fetchTodos = () => {
  return function (dispatch) {
    axios
      .get("http://localhost:3001/todos")
      .then((response) => {
        let todos = response.data;
        dispatch(fetchTodoSuccess(todos));
      })
      .catch((error) => {
        dispatch(fetchTodoFailure(error));
      });
  };
};
