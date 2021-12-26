import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { setUserView } from "../../redux/addres-election/adressElection";
import { setStateMarket } from "../../redux/changeState/changeState";
import { newsItems } from "../../redux/contants";

import "./form.css";

export const FormSearch = () => {
  const dispatch = useDispatch();
  const refButton = useRef();

  const [resultSearch, setResultSearch] = useState({
    data: [],
    loader: true,
  });

  const apiFetch = async (param, state, setState) => {
    //Busqueda de ciudades
    const request = await fetch(
      `http://api.positionstack.com/v1/forward?access_key=${process.env.REACT_APP_ADRESS_KEY}&query=${param}&limit=6`
    );
    const result = await request.json();
    if (request.status === 200) {
      setState({ loader: false, data: result.data });
    } else {
      setState({ ...state, loader: true });
    }
  };

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
        <input type="text" id="busqueda" name="busqueda" />
        <button className="btn-submit" type="submit">
          Ir
        </button>
      </form>
      <div>
        {!resultSearch.loader ? (
          <ul className="ul-search">
            {resultSearch.data?.map(({ latitude, longitude, label }, i) => (
              <li
                className="list-search"
                onClick={() => handleSelect(latitude, longitude)}
                key={i}
              >
                {label}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ textAlign: "center" }}>Sin resultados de busqueda</p>
        )}
      </div>
    </>
  );
};
