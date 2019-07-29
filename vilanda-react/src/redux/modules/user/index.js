/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
const initialState = {
  isLogin: false
};

export const types = {
  LOGIN: "USER/LOGIN",
  LOGOUT: "USER/LOGOUT"
};

export default function reducer(state = initialState, action = {}) {
  const { type } = action;
  switch (type) {
    case types.LOGIN:
      return { ...state, isLogin: true };
    default:
      return state;
  }
}
