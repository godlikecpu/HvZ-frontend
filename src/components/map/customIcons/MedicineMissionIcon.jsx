import L from "leaflet";

const medicineMissionIcon = new L.Icon({
  iconUrl: process.env.PUBLIC_URL + "/assets/icons/MedicineCutout.png",
  iconAnchor: null,
  popupAnchor: [0, -50],
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: "leaflet-div-icon",
});

export { medicineMissionIcon };
