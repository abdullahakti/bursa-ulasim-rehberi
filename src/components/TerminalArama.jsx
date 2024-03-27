import React, { useEffect, useState } from "react";
import Map, { Marker, useMap } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { utmToGeographic } from "../utils/mapUtils";

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
    // Terminal verilerinin olduğu GeoJSON dosya yolunu değişkene atama
    const jsonTerminal = "/src/data/poi_guncel_terminal.geojson";

    // GeoJSON dosyasını okuma
    fetch(jsonTerminal)
      .then((response) => response.json())
      .then((data) => {
        setTerminalListesi(data.features);
        setFiltrelenmisTerminalListesi(data.features); // Başlangıçta filtresiz olarak tüm terminalleri göster
      })
      .catch((error) => console.error("Terminal verileri alınamadı: ", error));
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
          <h1>Terminal Arama</h1>
          <input
            type="text"
            placeholder="Arama yap..."
            value={aramaTerimi}
            onChange={(e) => setAramaTerimi(e.target.value)}
          />
          <ul>
            {filtrelenmisTerminalListesi.map((terminal, index) => (
              <li key={index}>
                {terminal.properties.ADI},<br />
                {terminal.properties.ALT_KATEGORI}
              </li>
            ))}
          </ul>
        </div>
        <div className="col-6">
          <Map
            id="mymap"
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
