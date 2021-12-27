import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { apiFetch } from "../../helpers/fetch";
import { setUserView } from "../../redux/addres-election/adressElection";

import "./form.css";

export const FormSearch = () => {
  const dispatch = useDispatch();

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

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <label style={{ marginBottom: "5px" }} htmlFor="busqueda">
          Buscar ciudades
        </label>
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
