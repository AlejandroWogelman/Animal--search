import React from "react";
import { Marker, Popup } from "react-leaflet";
import { IconLocation } from "./IconLocation";
import { places } from "./assets/data.json";

export const Markers = () => {
  return places.map(({ geometry, description }, i) => {
    return (
      <Marker position={geometry} icon={IconLocation} key={i}>
        <Popup position={geometry}>
          <p>{description}</p>
        </Popup>
      </Marker>
    );
  });
};
