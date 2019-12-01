const reducer = (state, action) => {
  switch (action.type) {
    case 'GET_PERSONA':
      return {
        ...state,
        persona: state.personas.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case 'GET_EVENTO':
      return {
        ...state,
        evento: state.eventos.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    case 'GET_LUGAR':
      return {
        ...state,
        lugar: state.lugares.find((item) => item.id === Number(action.payload)) ||
          [],
      };
    default:
      return state;
  }
};
export default reducer;
