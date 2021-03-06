let leaflet = require('leaflet');
let leafletHash = require('leaflet-hash');
let $ = require('jquery');

module.exports = function(config) {
    // Fix for buggy marker shadows after switching to Mix
    // I'm seeing indications this may be fixed in newer versions of Leaflet.
    // https://github.com/KoRiGaN/Vue2Leaflet/issues/28#issuecomment-332280587
    L.Icon.Default.imagePath = '/';
    L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'images/vendor/leaflet/dist/marker-icon-2x.png',
        iconUrl: 'images/vendor/leaflet/dist/marker-icon.png',
        shadowUrl: 'images/vendor/leaflet/dist/marker-shadow.png',
    });

    window.surface = leaflet.map('map-container', {
        zoomControl: false,
        attributionControl: false,
        maxBounds: leaflet.latLngBounds(leaflet.latLng(-90, -180), leaflet.latLng(90, 180)),
        maxBoundsViscosity: 1.0
    });
    //surface.setMaxBounds([[-90, -180],[90, 180]]);
    surface.setView([0, 0], 4);

    let surfaceLayer = leaflet.tileLayer(config.tiles, {
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

    let hash = new leaflet.Hash(surface);

    // Create all of the layers for this map.
    let layers = {};
    Object.keys(config.layers).forEach(function(layerId) {
        let layerName = config.layers[layerId];
        layers[layerId] = leaflet.layerGroup();
    });

    // Create all of the markers, assigning them to the correct layers.
    config.markers.forEach((marker) => {
        // Not everything has a popup probably, so I should account for that. @todo
        let newMarker = L.marker(marker.coords).bindPopup(marker.popupContent);

        // Making the assuming a layer exists for any value set on this marker.
        // Should probably have some error handling here. @todo
        marker.layers.forEach((layerId) => {
            newMarker.addTo(layers[layerId]);
        });
    });

    // Create and manage the layer checkboxes for this map.
    $(document).ready(function() {
        let wrap = $('#layer-options');
        wrap.empty();
        Object.keys(config.layers).forEach(function(layerId) {
            let layerName = config.layers[layerId];
            wrap.append(
                $('<label>').append(
                    $('<input>').attr('id', layerId + 'Layer').attr('type', 'checkbox')
                ).append(' ' + layerName)
            );
            // Bind an event for this checkbox.
            $('#' + layerId + 'Layer').change(function() {
                if($(this).is(':checked')) {
                    surface.addLayer(layers[layerId]);
                } else {
                    surface.removeLayer(layers[layerId]);
                }
            });
        });
    });
}
