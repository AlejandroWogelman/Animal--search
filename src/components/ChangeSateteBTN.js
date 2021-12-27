import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { setStateMarket } from "../redux/changeState/changeState";
import { newsItems } from "../redux/contants";

export const ChangeSateteBTN = () => {
  const refButton = useRef();
  const dispatch = useDispatch();

  const handleStateMarker = () => {
    //Habilitar marcacion en mapa
    const button = refButton.current.textContent;
    console.log(button);
    if (button === "Agregar Mascota") {
      dispatch(setStateMarket(newsItems.CREATE_TRUE));
      refButton.current.textContent = "Cancelar modo edición";
    } else {
      dispatch(setStateMarket(newsItems.CREATE_FALSE));
      refButton.current.textContent = "Agregar Mascota";
    }
  };
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <button
        className="btn_changeState"
        ref={refButton}
        onClick={handleStateMarker}
      >
        <p>Agregar Mascota</p>
      </button>
    </div>
  );
};
