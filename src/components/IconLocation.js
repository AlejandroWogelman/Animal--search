import L from "leaflet";

export const IconLocation = L.icon({
  iconUrl: require("./assets/svgs/dogIcon.svg").default,
  iconRetinaUrl: require("./assets/svgs/dogIcon.svg").default,
  iconSize: [38, 38],
  iconAnchor: [22, 22],
  popupAnchor: [-3, -76],
  className: "leaflet-data-marker",
});
