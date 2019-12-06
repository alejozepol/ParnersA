const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_EVENTO':
      return {
        ...state,
        evento: state.evento ||
            [],
      };
    default:
      return state;
  }
};
export default reducer;
