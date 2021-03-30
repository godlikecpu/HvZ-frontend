import L from "leaflet";

const missionIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "/assets/icons/SockAmmoCrate.png",
  iconAnchor: null,
  popupAnchor: [0, -50],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { missionIcon };
