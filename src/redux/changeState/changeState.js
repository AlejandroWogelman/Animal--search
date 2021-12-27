import { infoMarker } from "../../components/alerts";
import { newsItems } from "../contants";

//Estado para escuchar o no el click de coordenadas sobre el mapa
export const changeState = (state = false, action) => {
  switch (action.type) {
    case newsItems.CREATE_TRUE:
      if (!state) {
        infoMarker();
        return true;
      } else {
        return state;
      }

    case newsItems.CREATE_FALSE:
      if (state) {
        return false;
      } else {
        return false;
      }

    default:
      return state;
  }
};

//Action  cambiar estado
export const setStateMarket = (actionType) => (dispatch) => {
  dispatch({ type: actionType });
};
