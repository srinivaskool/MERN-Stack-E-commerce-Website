// payload contains all the user info like name phone.....
export const searchReducer = (state = { text: "" }, action) => {
  switch (action.type) {
    case "SEARCH_QUERY":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};
