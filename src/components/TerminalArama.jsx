/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import Map, { Marker, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { utmToGeographic } from "../utils/mapUtils";
import { ed50ToWGS84 } from "../utils/coordinateUtils";

import { jsonTerminal } from "/src/data/poi_guncel_terminal";

const TerminalArama = () => {
  const { mymap } = useMap();

  const [terminalListesi, setTerminalListesi] = useState([]);
  const [aramaTerimi, setAramaTerimi] = useState("");
  const [filtrelenmisTerminalListesi, setFiltrelenmisTerminalListesi] =
    useState([]);

  const [latitude, setLatitude] = useState(40);
  const [longtitude, setLongtitude] = useState(29);

  // JSON dosyasından tüm verileri alma
  useEffect(() => {
    setTerminalListesi(jsonTerminal.features);
    setFiltrelenmisTerminalListesi(jsonTerminal.features); // Başlangıçta
  }, []);

  // Arama terimine göre terminal verilerini filtrele
  useEffect(() => {
    const filtrelenmisTerimler = terminalListesi.filter((terminal) =>
      terminal.properties.ADI.toLowerCase().includes(aramaTerimi.toLowerCase())
    );
    setFiltrelenmisTerminalListesi(filtrelenmisTerimler);
    if (filtrelenmisTerimler.length > 0) {
      const coords = utmToGeographic(
        filtrelenmisTerimler[0].geometry.coordinates[0],
        filtrelenmisTerimler[0].geometry.coordinates[1],
        36
      );
      setLatitude(coords.latitude);
      setLongtitude(coords.longitude);
    }
    console.log(filtrelenmisTerimler);
  }, [aramaTerimi, terminalListesi]);

  return (
    <>
      <div className="row">
        <div className="col-6">
          <div className="row d-flex align-items-center">
            <div className="col-sm-7">
              <label htmlFor="">
                <strong>İlçe otobüs terminallerini arayın : </strong>
              </label>
            </div>
            <div className="col-sm">
              <input
                className="form-control sr-only"
                type="text"
                placeholder="Arama yap..."
                value={aramaTerimi}
                onChange={(e) => setAramaTerimi(e.target.value)}
              />
            </div>
          </div>
          <br />
          <ul>
            {filtrelenmisTerminalListesi.map((terminal, index) => (
              <li key={index}>{terminal.properties.ADI}</li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <Map
            id="mymap"
            // eslint-disable-next-line no-undef
            mapboxAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
            initialViewState={{
              longitude: 29.060965,
              latitude: 40.188526,
              zoom: 8,
            }}
            style={{ height: 400 }}
            mapStyle="mapbox://styles/mapbox/streets-v9"
          >
            <Marker
              longitude={longtitude}
              latitude={latitude}
              anchor="bottom"
            ></Marker>
          </Map>
        </div>
      </div>
    </>
  );
};

export default TerminalArama;
