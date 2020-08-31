import React from "react";
import "./Map.css";
import { Icon } from "leaflet";
import * as EventData from "./data/skateboard-events.json";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";

export const icon = new Icon({
  iconUrl: "/icon3.jpg",
  iconSize: [25, 25],
});
function Maps() {
  const [activeEvent, setActiveEvent] = React.useState(null);

  return (
    <Map center={[45.4, -75.7]} zoom={12}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

      {EventData.features.map((event) => (
        <Marker
          key={event.properties.EVENT_ID}
          position={[
            event.geometry.coordinates[1],
            event.geometry.coordinates[0],
          ]}
          onClick={() => {
            setActiveEvent(event);
          }}
          icon={icon}
        />
      ))}

      {activeEvent && (
        <Popup
          position={[
            activeEvent.geometry.coordinates[1],
            activeEvent.geometry.coordinates[0],
          ]}
          onClose={() => {
            setActiveEvent(null);
          }}
        >
          <div>
            <h2>{activeEvent.properties.NAME}</h2>
            <p>{activeEvent.properties.DESCRIPTIO}</p>
          </div>
        </Popup>
      )}
    </Map>
  );
}

export default Maps;
