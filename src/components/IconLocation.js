import L from "leaflet";

export const dogIcon = L.icon({
  iconUrl: require("./assets/svgs/dogIcon.svg").default,
  iconRetinaUrl: require("./assets/svgs/dogIcon.svg").default,
  iconSize: [38, 38],
  iconAnchor: [22, 22],
  popupAnchor: [-3, -76],
  className: "leaflet-data-marker",
});

export const catIcon = L.icon({
  iconUrl: require("./assets/svgs/catIcon.svg").default,
  iconRetinaUrl: require("./assets/svgs/catIcon.svg").default,
  iconSize: [38, 38],
  iconAnchor: [22, 22],
  popupAnchor: [-3, -76],
  className: "leaflet-data-marker",
});

export const otherIcon = L.icon({
  iconUrl: require("./assets/svgs/otherIcon.svg").default,
  iconRetinaUrl: require("./assets/svgs/otherIcon.svg").default,
  iconSize: [38, 38],
  iconAnchor: [22, 22],
  popupAnchor: [-3, -76],
  className: "leaflet-data-marker",
});
