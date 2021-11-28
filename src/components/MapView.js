import React from "react";
import { MapContainer, TileLayer, useMapEvent } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Markers } from "./Markers";

export const MapView = () => {
  function MyComponent() {
    const map = useMapEvent("click", ({ latlng }) => {
      console.log(latlng);
    });
    return null;
  }

  return (
    <MapContainer center={[-34.76163412724435, -58.63236836081431]} zoom={15}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> '
      />
      <MyComponent />
      <Markers />
    </MapContainer>
  );
};
