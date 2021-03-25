import React from "react";
import deathIcon from "./customIcons/DeathIcon";

import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Rectangle,
} from "react-leaflet";
import "./map.css";

const Map = ({ game, kills }) => {
  const mapBounds = [
    [game.northWestLatitude, game.northWestLongitude],
    [game.southEastLatitude, game.southEastLongitude],
  ];

  const findCenterPoint = (points) => {
    let totalLat = 0,
      totalLong = 0;
    points.forEach((point) => {
      totalLat += point[0];
      totalLong += point[1];
    });
    let averageLat, averageLong;
    averageLat = totalLat / points.length;
    averageLong = totalLong / points.length;
    return [averageLat, averageLong];
  };
  return Object.keys(game).length !== 0 ? (
    <MapContainer
      className="map"
      center={findCenterPoint(mapBounds)}
      zoom={16}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {kills.map((kill) => {
        return (
          <Marker
            key={kill.id}
            position={[kill.latitude, kill.longitude]}
            icon={deathIcon}
          >
            <Popup>
              <b>Dead player:</b> Hunor
              <br />
              <b>Story:</b> {kill.story}
            </Popup>
          </Marker>
        );
      })}
      <Rectangle bounds={mapBounds} pathOptions={{ color: "black" }} />
    </MapContainer>
  ) : (
    <h2>Loading</h2>
  );
};

export default Map;
