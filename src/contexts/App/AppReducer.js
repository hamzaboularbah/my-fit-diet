import { GET_CLIENT_DATA } from "../actionsTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_CLIENT_DATA:
      return action.payload;
    default:
      return state;
  }
};
