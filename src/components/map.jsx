import React,{useState,useEffect} from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup, useMapEvents } from "react-leaflet";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

// fix marker files not found
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow
});

L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {

  const position = [
  {
    "title": "ร้านอาหาร 1",
    "lat": 13.806032270422516,
    "long": 100.53752731937284,
  },
  {
    "title": "ร้านอาหาร 2",
    "lat": 13.823561896850025,
    "long": 100.59372011893235,
  },
  {
    "title": "ร้านอาหาร 3",
    "lat": 13.871633725734497,
    "long": 100.52999507298125,
  },
  {
    "title": "ร้านอาหาร 4",
    "lat": 13.82063172192801,
    "long": 100.580463517319,
  },
  {
    "title": "ร้านอาหาร 5",
    "lat": 13.889965042458334,
    "long": 100.43695460756949,
  },
];

  return (
    <>
        {/* include map api */}
        <MapContainer
          center={[13.806032270422516, 100.53752731937284]}
          zoom={12}
          style={{ height: "100vh"}}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* create marker from api */}
          {position.map((item)=>
            <Marker  position={[item.lat,item.long]}>
              <Popup>{item.title}</Popup>
            </Marker>
          )}
        </MapContainer>
    </>
  );
};

export default Map;
