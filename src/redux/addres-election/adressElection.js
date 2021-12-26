import { NEW_ADDRES_VIEW } from "../contants";

const initialState = {
  status: false,
  cc: { lat: "", lng: "" },
};

export const adressElection = (state = initialState, action) => {
  switch (action.type) {
    case "NEW_ADDRES_VIEW":
      const { lat, lgt } = action.payload;
      return {
        status: true,
        lat,
        lgt,
      };
    default:
      return state;
  }
};

export const setUserView = (lat, lgt) => (dispatch) => {
  dispatch({ type: NEW_ADDRES_VIEW, payload: { lat, lgt } });
};
