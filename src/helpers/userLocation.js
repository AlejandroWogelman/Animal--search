import { initialCc } from "../redux/coordinateView/coordinateView";

export const userLocation = (dispatch) => {
  const succes = (position) => {
    console.log("position ejecutado");
    dispatch(initialCc([position.coords.latitude, position.coords.longitude]));
  };
  const error = (error) => {
    console.log("error ejecutado");
    dispatch(initialCc([-34.545442138889726, -58.45149220656545]));
  };
  const options = {
    //La mayor precision posible
    enableHighAccuracy: true,
    //Tiempo de espera para respuesta
    timeout: 5000,
    //Evitar que se guarde en cache
    maximumAge: 0,
  };
  navigator.geolocation.getCurrentPosition(succes, error, options);
};
