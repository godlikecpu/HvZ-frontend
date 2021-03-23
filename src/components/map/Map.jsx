import React from "react";
import {
  MapContainer as Map,
  TileLayer,
  Popup,
  Marker,
  Rectangle,
} from "react-leaflet";
import "./map.css";

const LandingPage = () => {
  return (
    <Map
      className="map"
      center={[55.701847, 12.56734]}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[55.701847, 12.56734]}>
        <Popup>
          Dead player: <b>Hunor</b>
        </Popup>
      </Marker>
      <Rectangle
        bounds={[
          [55.696, 12.562],
          [55.709, 12.576],
        ]}
        pathOptions={{ color: "black" }}
      />
    </Map>
  );
};

export default LandingPage;
