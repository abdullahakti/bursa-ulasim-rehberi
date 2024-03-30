import React, { useState } from 'react';

function DMSInput({ label, value, onChange }) {
  const handleChange = (e) => {
    onChange(parseFloat(e.target.value));
  };

  return (
    <div>
      <label>{label}</label>
      <input type="number" value={value} onChange={handleChange} />
    </div>
  );
}

function ED50toWGS84Converter() {
  const [ed50LatitudeDegrees, setED50LatitudeDegrees] = useState(39);
  const [ed50LatitudeMinutes, setED50LatitudeMinutes] = useState(54);
  const [ed50LatitudeSeconds, setED50LatitudeSeconds] = useState(30);
  const [ed50LatitudeDirection, setED50LatitudeDirection] = useState('N');

  const [ed50LongitudeDegrees, setED50LongitudeDegrees] = useState(32);
  const [ed50LongitudeMinutes, setED50LongitudeMinutes] = useState(51);
  const [ed50LongitudeSeconds, setED50LongitudeSeconds] = useState(30);
  const [ed50LongitudeDirection, setED50LongitudeDirection] = useState('E');

  const dmsToDecimal = (degrees, minutes, seconds, direction) => {
    let dd = degrees + minutes / 60 + seconds / (60 * 60);

    if (direction === 'S' || direction === 'W') {
      dd *= -1;
    } // Don't do anything for N or E
    return dd;
  };

  const ed50toWGS84 = () => {
    const ed50_lat = [
      ed50LatitudeDegrees,
      ed50LatitudeMinutes,
      ed50LatitudeSeconds,
      ed50LatitudeDirection,
    ];
    const ed50_lon = [
      ed50LongitudeDegrees,
      ed50LongitudeMinutes,
      ed50LongitudeSeconds,
      ed50LongitudeDirection,
    ];

    // Fonksiyon içeriği buraya eklenecek. Önceki örnekteki 'ed50toWGS84' fonksiyonunu buraya taşıyabilirsiniz.
  };

  return (
    <div>
      <div>
        <h2>ED50 Koordinatları</h2>
        <DMSInput
          label="Enlem Derecesi"
          value={ed50LatitudeDegrees}
          onChange={setED50LatitudeDegrees}
        />
        <DMSInput
          label="Enlem Dakika"
          value={ed50LatitudeMinutes}
          onChange={setED50LatitudeMinutes}
        />
        <DMSInput
          label="Enlem Saniye"
          value={ed50LatitudeSeconds}
          onChange={setED50LatitudeSeconds}
        />
        <div>
          <label>Yön</label>
          <select
            value={ed50LatitudeDirection}
            onChange={(e) => setED50LatitudeDirection(e.target.value)}
          >
            <option value="N">Kuzey</option>
            <option value="S">Güney</option>
          </select>
        </div>
      </div>
      <div>
        <h2>Boylam Koordinatları</h2>
        <DMSInput
          label="Boylam Derecesi"
          value={ed50LongitudeDegrees}
          onChange={setED50LongitudeDegrees}
        />
        <DMSInput
          label="Boylam Dakika"
          value={ed50LongitudeMinutes}
          onChange={setED50LongitudeMinutes}
        />
        <DMSInput
          label="Boylam Saniye"
          value={ed50LongitudeSeconds}
          onChange={setED50LongitudeSeconds}
        />
        <div>
          <label>Yön</label>
          <select
            value={ed50LongitudeDirection}
            onChange={(e) => setED50LongitudeDirection(e.target.value)}
          >
            <option value="E">Doğu</option>
            <option value="W">Batı</option>
          </select>
        </div>
      </div>
      <button onClick={ed50toWGS84}>Dönüştür</button>
    </div>
  );
}

export default ED50toWGS84Converter;
