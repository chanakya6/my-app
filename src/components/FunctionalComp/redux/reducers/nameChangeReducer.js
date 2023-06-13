let initialState = { name: "Arvind" };

export const nameChangeReducer = (state = initialState, action) => {
  if (action.type === "NAME_CHANGE") {
    return { ...state, name: action.payload };
  }
  return state;
};
