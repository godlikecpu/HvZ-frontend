import L from 'leaflet';

const missionIcon = new L.Icon({
    iconUrl: require('../../../../public/assets/icons/SockAmmoCrate.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { missionIcon };