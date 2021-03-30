import React, { useState } from "react";
import deathIcon from "./customIcons/DeathIcon";
import {
  MapContainer,
  TileLayer,
  Popup,
  Marker,
  Rectangle,
  useMapEvents,
} from "react-leaflet";
import { postKill } from "../../utils/apiFetcher";
import "./map.css";

const Map = ({ game, kills }) => {
  const mapBounds = [
    [game.northWestLatitude, game.northWestLongitude],
    [game.southEastLatitude, game.southEastLongitude],
  ];
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [currentPos, setCurrentPos] = useState(null);

  const Markers = () => {
    useMapEvents({
      click(e) {
        setCurrentPos([e.latlng.lat, e.latlng.lng]);
        setPopUpOpen(true);
      },
    });

    const sendKill = () => {
      postKill(currentPos[0], currentPos[1], game.id, biteCode, story, 6);
      setPopUpOpen(false);
    };

    function useInput({ type /*...*/ }) {
      const [value, setValue] = useState("");
      const input = (
        <input
          style={{ height: 50, width: 200, fontSize: 22 }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          type={type}
        />
      );
      return [value, input];
    }

    const [biteCode, setBiteCode] = useInput({ type: "text" });
    const [story, setStory] = useInput({ type: "text" });

    return currentPos && popUpOpen ? (
      <Marker key={currentPos[0]} position={currentPos} draggable={true}>
        <Popup className="request-popup">
          <div style={{ fontSize: 22, width: 200, height: 50 }}>
            <label>Bite Code</label>
            {setBiteCode} <br />
            <label>Story</label>
            {setStory} <br />
            <label>Latitude: {currentPos[0]}</label>
            <br />
            <label>Longitude: {currentPos[1]}</label>
            <button style={{ fontSize: 20 }} onClick={sendKill}>
              Confirm
            </button>
          </div>
        </Popup>
      </Marker>
    ) : null;
  };

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
      <Markers></Markers>
      {kills.map((kill) => {
        return (
          <Marker
            className="leaflet-div-icon"
            key={kill.id}
            position={[kill.latitude, kill.longitude]}
            icon={deathIcon}
          >
            <Popup>
              <div style={{ fontSize: 25 }}>
                <b>Victim:</b> {kill.victim}
                <br />
                <b>Killer:</b> {kill.killer}
                <br />
                <b>Story:</b> {kill.story}
              </div>
            </Popup>
          </Marker>
        );
      })}
      <Rectangle
        bounds={mapBounds}
        fillOpacity={0}
        pathOptions={{ color: "red" }}
      />
    </MapContainer>
  ) : (
    <h2>Loading</h2>
  );
};

export default Map;
