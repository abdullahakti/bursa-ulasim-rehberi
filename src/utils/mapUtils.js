export const utmToGeographic = (utmX, utmY, utmZone) => {
  // UTM kütüphanesi kullanılıyorsa
  // Örneğin: https://www.npmjs.com/package/utm
  // const UTM = require('utm');

  // UTM kütüphanesi kullanılarak UTM koordinatlarını coğrafi koordinatlara dönüştürme
  // const utmCoords = new UTM(utmX, utmY, utmZone);
  // const geographicCoords = utmCoords.toLatLon();

  // Bu örnekte, UTM kütüphanesi kullanılmadığı için basit bir dönüşüm yapılıyor
  const k0 = 0.9996;
  const a = 6378137;
  const e = 0.081819191;

  const utm1 = utmX - 500000;
  const utm2 = utmY;

  const eccPrimeSquared = (e * e) / (1 - e * e);
  const m = utm2 / k0;
  const mu =
    m /
    (a *
      (1 -
        Math.pow(e, 2) / 4.0 -
        (3.0 * Math.pow(e, 4)) / 64.0 -
        (5.0 * Math.pow(e, 6)) / 256.0));

  const phi1Rad =
    mu +
    ((3.0 * e) / 2.0 - (27.0 * Math.pow(e, 3)) / 32.0) * Math.sin(2.0 * mu) +
    ((21.0 * Math.pow(e, 2)) / 16.0 - (55.0 * Math.pow(e, 4)) / 32.0) *
      Math.sin(4.0 * mu) +
    ((151.0 * Math.pow(e, 3)) / 96.0) * Math.sin(6.0 * mu);

  const N1 = a / Math.sqrt(1.0 - Math.pow(e * Math.sin(phi1Rad), 2.0));
  const T1 = Math.pow(Math.tan(phi1Rad), 2.0);
  const C1 = eccPrimeSquared * Math.pow(Math.cos(phi1Rad), 2.0);
  const R1 =
    (a * (1.0 - Math.pow(e, 2.0))) /
    Math.pow(1.0 - Math.pow(e * Math.sin(phi1Rad), 2.0), 1.5);
  const D = utm1 / (N1 * k0);

  const lat =
    phi1Rad -
    ((N1 * Math.tan(phi1Rad)) / R1) *
      ((D * D) / 2.0 -
        ((5.0 + 3.0 * T1 + 10.0 * C1 - 4.0 * C1 * C1 - 9.0 * eccPrimeSquared) *
          Math.pow(D, 4.0)) /
          24.0 +
        ((61.0 +
          90.0 * T1 +
          298.0 * C1 +
          45.0 * T1 * T1 -
          252.0 * eccPrimeSquared -
          3.0 * C1 * C1) *
          Math.pow(D, 6.0)) /
          720.0);

  const lon =
    (D -
      ((1.0 + 2.0 * T1 + C1) * Math.pow(D, 3.0)) / 6.0 +
      ((5.0 -
        2.0 * C1 +
        28.0 * T1 -
        3.0 * C1 * C1 +
        8.0 * eccPrimeSquared +
        24.0 * T1 * T1) *
        Math.pow(D, 5.0)) /
        120.0) /
    Math.cos(phi1Rad);

  const latLon = {
    latitude: lat * (180.0 / Math.PI) - (utmZone - 29.0976),
    longitude: lon * (180.0 / Math.PI) + (6 * utmZone - 185.8857),
  };

  return latLon;
};
