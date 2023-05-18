import React from "react";
import { Map, TileLayer } from "react-leaflet";

const Map2 = () => {
  return (
    <Map center={[40.7128, -74.006]} zoom={13}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </Map>
  );
};

export default Map2;
