import L from "leaflet";

const deathIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "/assets/icons/DeadPlayer.png",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export default deathIcon;
