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
    case 'REGISTER_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    case 'GET_PERSONAS':
      state.personas.push(action.payload);
      return {
        ...state,
        persona: [state.personas],
      };
    default:
      return state;
  }

};
export default reducer;
