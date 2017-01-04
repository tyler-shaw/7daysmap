var settings = require('./MapSettings');

var map = L.map('map-container', {
    minZoom: 1,
    maxZoom: 4,
    center: [0, 0],
    zoom: 2,
    crs: L.CRS.Simple,
    attributionControl: false,
});

var w = settings.image.width,
    h = settings.image.height,
    url = settings.image.url;

var southWest = map.unproject([0, h], map.getMaxZoom()-1);
var northEast = map.unproject([w, 0], map.getMaxZoom()-1);
var bounds = new L.LatLngBounds(southWest, northEast);

L.imageOverlay(url, bounds).addTo(map);

map.setMaxBounds(bounds);