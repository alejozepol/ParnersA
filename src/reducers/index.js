const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PERSONA':
      return {
        ...state,
        persona: state.personas.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};
export default reducer;
