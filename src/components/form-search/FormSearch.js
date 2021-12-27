import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { apiFetch } from "../../helpers/fetch";
import { setUserView } from "../../redux/addres-election/adressElection";
import { setStateMarket } from "../../redux/changeState/changeState";
import { newsItems } from "../../redux/contants";

import "./form.css";

export const FormSearch = () => {
  const dispatch = useDispatch();
  const refButton = useRef();
  const refInput = useRef();

  const [resultSearch, setResultSearch] = useState({
    data: [],
    loader: true,
  });

  const handleSelect = (lat, long) => {
    //Saca latitud y longitud del listado de resultados de la busqueda
    //Al presionar se envia al reducer que cambia la vista del mapa
    dispatch(setUserView(lat, long));
  };

  const handleSubmit = (e) => {
    const { value } = e.target[0];
    e.preventDefault();
    if (value.trim().length > 0) {
      apiFetch(value, resultSearch, setResultSearch);
      refInput.current.value = "";
    }
  };
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
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          className="btn_changeState"
          ref={refButton}
          onClick={handleStateMarker}
        >
          <p>Agregar Mascota</p>
        </button>
      </div>

      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="busqueda">Buscar ciudades</label>
        <input type="text" id="busqueda" name="busqueda" ref={refInput} />
        <button className="btn-submit" type="submit">
          Ir
        </button>
      </form>
      <div>
        {!resultSearch.loader ? (
          <ul className="ul-search">
            {resultSearch.data?.map(({ geometry, formatted }, i) => (
              <li
                className="list-search"
                onClick={() => handleSelect(geometry.lat, geometry.lng)}
                key={i}
              >
                {formatted}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center" }}>Esperando</p>
        )}
      </div>
    </>
  );
};
