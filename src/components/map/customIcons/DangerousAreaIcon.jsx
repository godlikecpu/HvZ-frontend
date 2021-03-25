import L from "leaflet";

const dangerousAreaIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "/assets/icons/DangerousArea.png",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { dangerousAreaIcon };
