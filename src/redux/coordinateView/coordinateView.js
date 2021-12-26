import { newCc } from "../contants";

export const coordinateView = (state = false, action) => {
  if (action.payload) {
    return action.payload;
  } else {
    return state;
  }
};

export const initialCc = (coordinates) => (dispatch) => {
  dispatch({ type: newCc.CHANGE_CC, payload: coordinates });
};
