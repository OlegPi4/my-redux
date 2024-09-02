const initState = { counter: 0 };

const reducer = (state = initState, action) => {
  switch (action.type) {
    case "INC":
      return {
        ...state,
        counter: state.counter + 1,
      };
    case "DEC":
      return {
        ...state,
        counter: state.counter - 1,
      };
    case "RND":
      return {
        ...state,
        counter: state.counter * action.payload,
      };
    case "CLR":
      return {
        ...state,
        counter: 0,
      };
    default:
      return state;
  }
};

export default reducer;
