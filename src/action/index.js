// eslint-disable-next-line import/prefer-default-export
export const getPersona = (payload) => ({
  type: 'GET_PERSONA',
  payload,
});
export const getEvento = (payload) => ({
  type: 'GET_EVENTO',
  payload,
});
export const getLugar = (payload) => ({
  type: 'GET_LUGAR',
  payload,
});

export const registerRequest = (payload) => ({
  type: 'REGISTER_REQUEST',
  payload,
});
