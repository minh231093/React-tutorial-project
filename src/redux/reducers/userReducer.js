import { USER_LOGIN, USER_LOGOUT } from "../actions/userAction";

const INITAL_STATE = {
  account: { email: "", auth: false },
};

const userReducer = (state = INITAL_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return { ...state, count: state.count + 1 };
    case USER_LOGOUT:
      return { ...state, count: state.count - 1 };
    default:
      return state;
  }
};

export default userReducer;
