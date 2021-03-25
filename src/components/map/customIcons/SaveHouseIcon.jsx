import L from 'leaflet';

const saveHouseIcon = new L.Icon({
    iconUrl: require('../../../../public/assets/icons/SaveHouse.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { saveHouseIcon };