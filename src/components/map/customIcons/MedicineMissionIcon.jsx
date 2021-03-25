import L from 'leaflet';

const medicineMissionIcon = new L.Icon({
    iconUrl: require('../../../../public/assets/icons/MedicineCutout.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { medicineMissionIcon };
