var leaflet = require('leaflet');
var leafletHash = require('leaflet-hash');

var surface = leaflet.map('map-container', {
    zoomControl: false,
    attributionControl: false,
    maxBounds: leaflet.latLngBounds(leaflet.latLng(-90, -180), leaflet.latLng(90, 180)),
    maxBoundsViscosity: 1.0
});
//surface.setMaxBounds([[-90, -180],[90, 180]]);
surface.setView([0, 0], 4);

var surfaceLayer = leaflet.tileLayer('/map/tiles/{z}/{x}/{y}.jpeg', {
    maxZoom: 5,
    maxNativeZoom: 4,
    minZoom: 2,
    continuousWorld: false,
    noWrap: true,
    maxBounds: leaflet.latLngBounds(leaflet.latLng(-90, -180), leaflet.latLng(90, 180)),
    maxBoundsViscosity: 1.0
}).addTo(surface);

leaflet.control.zoom({
    position: 'bottomright'
}).addTo(surface);

var hash = new leaflet.Hash(surface);

// To locate where markers should be
// surface.on('click', function(e) {
//     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
// });