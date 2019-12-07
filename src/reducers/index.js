const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTO':
      return {
        ...state,
        evento: state.evento ||
          [],
      };
    case 'LOGIN_REQUEST':
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
