import React, { useEffect } from "react";
import { MapContainer, TileLayer, useMap, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "./Markers";
import { useDispatch, useSelector } from "react-redux";
import { userLocation } from "../helpers/userLocation";
import { inputAlert } from "./alerts";

import "./MapView.css";

export const MapView = () => {
  const dispatch = useDispatch();
  const coordinate = useSelector((store) => store.ccView);
  const userSelectView = useSelector((store) => store.userView);

  function CoordsClickMap() {
    //Funcion para obtener coordenadas luego del click
    const listenerClick = useSelector((state) => state.changeState);
    useMapEvent("click", ({ latlng }) => {
      if (listenerClick) {
        inputAlert(latlng);
      }
    });
    return null;
  }

  function CenterMap() {
    console.log(userSelectView);
    const handler = useMap();
    if (userSelectView.status) {
      const { lat: Lat, lgt: Lng } = userSelectView;
      handler.setView([Lat, Lng]);
      return <></>;
    } else {
      return null;
    }
  }

  useEffect(() => {
    userLocation(dispatch);
  }, []);

  return (
    <>
      {coordinate ? (
        <MapContainer
          className="map-container"
          center={coordinate}
          zoom={11} /*  minZoom={8} */
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
          />
          <CoordsClickMap />
          <Markers />
          <CenterMap />
        </MapContainer>
      ) : (
        <p>loading</p>
      )}
    </>
  );
};
