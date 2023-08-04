import React,{useState} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";

const Map = () => {

  const position = [13.806032270422516, 100.53752731937284];

  return (
    <>
        <MapContainer
          center={position}
          zoom={12}
          style={{ height: "100vh"}}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position}>
            <Popup>SCG Bangsue</Popup>
          </Marker>
        </MapContainer>
    </>
  );
};

export default Map;
