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

export const loginRequest = (payload) => ({
  type: 'LOGIN_REQUEST',
  payload,
});

export const logoutRequest = (payload) => ({
  type: 'LOGOUT_REQUEST',
  payload,
});

export const getPersonas = (payload) => ({
  type: 'GET_PERSONAS',
  payload,
});
