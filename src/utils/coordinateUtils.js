import proj4 from "proj4";


export const ed50ToWGS84 = (longitude, latitude) => {
    // ED50 koordinatları
    const ed50Coordinates = [longitude, latitude];

    // ED50 koordinat sistemini tanımlayın
    proj4.defs("EPSG:23030", "+proj=utm +zone=30 +ellps=intl +towgs84=-87,-98,-121,0,0,0,0 +units=m +no_defs");

    // WGS84 koordinat sistemini tanımlayın
    proj4.defs("EPSG:4326", "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs");

    // ED50 koordinatlarını WGS84'e dönüştürün
    const wgs84Coordinates = proj4("EPSG:23030", "EPSG:4326", ed50Coordinates);

    // WGS84 koordinatlarını döndürün
    return wgs84Coordinates;
}
