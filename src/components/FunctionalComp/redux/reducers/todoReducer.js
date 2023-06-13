let initialState = { todos: [], error: "" };

export const todoReducer = (state = initialState, action) => {
  if (action.type === "FETCH_SUCESS") {
    return {
      ...state,
      todos: action.payload,
      error: "",
    };
  } else if (action.type === "FETCH_FAIL") {
    return {
      ...state,
      todos: [],
      error: action.payload,
    };
  }
  return state;
};
