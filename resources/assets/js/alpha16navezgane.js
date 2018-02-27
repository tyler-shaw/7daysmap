var leaflet = require('leaflet');
var leafletHash = require('leaflet-hash');
var $ = require('jquery');

module.exports = function() {
    window.surface = leaflet.map('map-container', {
        zoomControl: false,
        attributionControl: false,
        maxBounds: leaflet.latLngBounds(leaflet.latLng(-90, -180), leaflet.latLng(90, 180)),
        maxBoundsViscosity: 1.0
    });
    //surface.setMaxBounds([[-90, -180],[90, 180]]);
    surface.setView([0, 0], 4);

    // var surfaceLayer = leaflet.tileLayer('https://7daysmap-543f.kxcdn.com/tiles/alpha-15-navezgane/{z}/{x}/{y}.jpeg', {
    var surfaceLayer = leaflet.tileLayer('https://7daysmap-543f.kxcdn.com/tiles/alpha-16-navezgane/{z}/{x}/{y}.jpeg', {
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

    // Markers

    // Traders
    var tradersLayer = leaflet.layerGroup([
        L.marker([62.89, -92.41]).bindPopup('<strong>Trader Joel</strong><br><br>teleport -1055 935'),
        L.marker([75.05, 126.03]).bindPopup('<strong>Trader Hugh</strong><br><br>teleport 1425 1325'),
        L.marker([7.49, 28.03]).bindPopup('<strong>Trader Rekt</strong><br><br>teleport 320 95'),
        L.marker([-74.64, -69.60]).bindPopup('<strong>Trader Jimmy</strong><br><br>teleport -785 -1305'),
        L.marker([-75.02, 90.87]).bindPopup('<strong>Trader Bob</strong><br><br>teleport 1020 -1320'),
    ]);

    var cavesLayer = leaflet.layerGroup([
        L.marker([40.17, -83.14]).bindPopup('<strong>Cave</strong>'),
        L.marker([-66.68, -66.00]).bindPopup('<strong>Cave</strong>'),
        L.marker([-54.18, -127.74]).bindPopup('<strong>Cave</strong>'),
        L.marker([-24.44, 44.64]).bindPopup('<strong>Cave</strong>'),
        L.marker([-66.33, 87.27]).bindPopup('<strong>Cave</strong>'),
        L.marker([83.82, 75.80]).bindPopup('<strong>Cave</strong>'),
    ]);

    var armyBasesLayer = leaflet.layerGroup([
        L.marker([79.95, 111.79]).bindPopup('<strong>Army Camp</strong>'),
        L.marker([3.82, 131.70]).bindPopup('<strong>Army Camp</strong>'),
        L.marker([78.94, -71.85]).bindPopup('<strong>Army Camp</strong>'),
        L.marker([-79.82, 38.54]).bindPopup('<strong>Army Barracks</strong>'),
    ]);

    var housesLayer = leaflet.layerGroup([
        L.marker([81.99, -92.50]).bindPopup('<strong>House</strong>'),
        L.marker([79.38, -103.09]).bindPopup('<strong>House</strong>'),
        L.marker([77.06, -55.37]).bindPopup('<strong>House</strong>'),
        L.marker([83.72, -68.55]).bindPopup('<strong>House</strong>'),
    ]);

    // Misc Markers

    // Perishton
    var p1 = L.marker([82.98, -141.89]).bindPopup('<strong>Bank</strong>');
    var p2 = L.marker([83.54, -141.37]).bindPopup("<strong>Joey's Used Cars</strong>");
    var p3 = L.marker([82.26, -126.07]).bindPopup('<strong>Working Stiff Tools</strong>');
    var p4 = L.marker([82.28, -129.59]).bindPopup('<strong>Crack-A-Book</strong>'); // gotta double check this one
    var p5 = L.marker([82.91, -127.00]).bindPopup('<strong>Shotgun Messiah</strong>');
    var p6 = L.marker([82.91, -130.16]).bindPopup('<strong>Pop-N-Pills</strong>');
    var p7 = L.marker([82.90, -132.58]).bindPopup('<strong>Saloon</strong>');
    var p8 = L.marker([82.18, -141.89]).bindPopup('<strong>Pass-N-Gas</strong>');
    var p9 = L.marker([82.14, -138.25]).bindPopup('<strong>Shamway Foods</strong>');
    var p10 = L.marker([82.99, -152.35]).bindPopup('<strong>Church</strong>');

    // Misc Plains

    var mp2 = L.marker([82.17, -45.35]).bindPopup('<strong>Police Station</strong>');
    var mp3 = L.marker([83.97, -40.73]).bindPopup('<strong>Store</strong>');
    var mp4 = L.marker([81.90, -26.89]).bindPopup('<strong>High School</strong>');
    var mp5 = L.marker([83.36, -26.93]).bindPopup('<strong>Football Stadium</strong>');
    var mp6 = L.marker([77.34, -44.12]).bindPopup('<strong>Camp</strong>');
    //var mp = L.marker([]).bindPopup('<strong></strong>');

    // Forest
    var f1 = L.marker([47.57, 101.16]).bindPopup('<strong>Hospital</strong>');
    var f2 = L.marker([61.16, 69.25]).bindPopup('<strong>Farm</strong>');
    var f3 = L.marker([53.64, 64.42]).bindPopup('<strong>Working Stiff Tools</strong>');
    var f4 = L.marker([36.42, 47.37]).bindPopup('<strong>Church</strong>');
    var f5 = L.marker([49.49, 133.28]).bindPopup('<strong>Pass-N-Gas</strong>');
    var f6 = L.marker([66.03, 32.73]).bindPopup('<strong>Celltower</strong>');
    var f7 = L.marker([76.43, 19.16]).bindPopup('<strong>Mansion</strong>');
    var f8 = L.marker([76.21, 25.70]).bindPopup('<strong>Mansion</strong>');
    var f9 = L.marker([74.99, 23.11]).bindPopup('<strong>Mansion</strong>');

    var f11 = L.marker([71.37, 24.03]).bindPopup('<strong>Camp</strong>');
    var f12 = L.marker([27.80, 113.59]).bindPopup('<strong>Camp</strong>');
    //var f = L.marker([]).bindPopup('<strong></strong>');

    // Pine Forst
    // right side
    var pf1 = L.marker([74.18, 50.71]).bindPopup('<strong>Pass-N-Gas</strong>');
    // left side
    var pf2 = L.marker([10.74, -161.01]).bindPopup('<strong>Strip Club</strong>');
    var pf3 = L.marker([49.89, -165.58]).bindPopup("<strong>Bob's Cafe</strong>");
    var pf4 = L.marker([62.39, -38.93]).bindPopup('<strong>Crack-A-Book</strong>');
    //var pf = L.marker([]).bindPopup('<strong></strong>');

    // Snow
    var s1 = L.marker([83.15, 53.96]).bindPopup('<strong>Shotgun Messiah</strong>');
    var s2 = L.marker([82.29, 84.37]).bindPopup('<strong>Pass-N-Gas</strong>');
    var s3 = L.marker([82.83, 128.45]).bindPopup('<strong>Ski Lodge</strong>');
    var s4 = L.marker([80.29, 147.21]).bindPopup('<strong>Sawmill</strong>');
    var s5 = L.marker([67.77, 156.92]).bindPopup('<strong>Pass-N-Gas</strong>');
    var s6 = L.marker([39.70, -141.85]).bindPopup('<strong>ALS Marina</strong>');
    //var s = L.marker([]).bindPopup('<strong></strong>');

    // Wasteland
    var w1 = L.marker([-75.50, -155.34]).bindPopup('<strong>Utility Refinery</strong>');
    var w2 = L.marker([-80.50, -93.16]).bindPopup('<strong>Prison</strong>');
    var w3 = L.marker([-69.03, -114.43]).bindPopup('<strong>Skate Park</strong>');
    var w4 = L.marker([-69.06, -96.06]).bindPopup("<strong>Jim's Cars</strong>");
    var w5 = L.marker([-60.34, -144.31]).bindPopup('<strong>Theatre</strong>');
    var w6 = L.marker([-46.52, -152.40]).bindPopup('<strong>Electric Co.</strong>');
    var w7 = L.marker([-42.42, -109.33]).bindPopup('<strong>Days End Suites</strong>');
    var w8 = L.marker([-39.36, -118.03]).bindPopup('<strong>Bombshelter</strong>');
    var w9 = L.marker([-42.65, -74.97]).bindPopup('<strong>Factory</strong>');
    var w10 = L.marker([-60.88, -35.59]).bindPopup('<strong>Junk Yard</strong>');
    var w11 = L.marker([-35.92, 9.71]).bindPopup('<strong>Factory</strong>');
    var w13 = L.marker([-68.31, -41.96]).bindPopup('<strong>Settlement</strong>');
    var w15 = L.marker([-40.51, -31.86]).bindPopup('<strong>Shotgun Messiah</strong>');
    var w16 = L.marker([-44.21, -35.81]).bindPopup('<strong>Cinema</strong>');
    var w17 = L.marker([-44.15, -45.83]).bindPopup('<strong>Parking Garage</strong>');
    var w18 = L.marker([-36.70, -41.48]).bindPopup('<strong>Hotel</strong>');
    var w19 = L.marker([-12.39, -97.82]).bindPopup('<strong>Celltower</strong>');
    var w20 = L.marker([-7.44, -101.03]).bindPopup('<strong>Bombshelter</strong>');
    //var w = L.marker([]).bindPopup('<strong></strong>');

    // Desert
    var d1 = L.marker([-83.86, -51.02]).bindPopup('<strong>Red Mesa</strong>');
    var d2 = L.marker([-80.92, 4.87]).bindPopup('<strong>Ostrich Hotel</strong>');
    var d3 = L.marker([-80.11, -1.97]).bindPopup('<strong>Amigone Funeral</strong>');
    var d4 = L.marker([-83.50, 49.52]).bindPopup('<strong>Canyon Gift Shop</strong>');
    var d5 = L.marker([-83.46, 79.89]).bindPopup('<strong>Motel Eight</strong>');
    var d6 = L.marker([-76.84, 68.07]).bindPopup('<strong>Canyon Cliff Dwellings</strong>');
    var d7 = L.marker([-70.19, 49.13]).bindPopup('<strong>Diner</strong>');
    var d8 = L.marker([-70.12, 14.54]).bindPopup('<strong>Cemetary</strong>');
    var d9 = L.marker([-61.87, 16.74]).bindPopup("<strong>Buzz's Bar</strong>");
    var d10 = L.marker([-50.37, 25.57]).bindPopup('<strong>Pop-N-Pills</strong>');
    var d11 = L.marker([-45.70, 55.81]).bindPopup('<strong>Trailer Park</strong>');
    var d12 = L.marker([-25.36, 69.78]).bindPopup('<strong>Pass-N-Gas</strong>');
    var d14 = L.marker([-7.44, 59.23]).bindPopup('<strong>Camp</strong>');
    var d15 = L.marker([-53.40, 119.13]).bindPopup('<strong>Junk Yard</strong>');
    var d16 = L.marker([-53.14, 165.27]).bindPopup('<strong>Hotel</strong>');
    var d17 = L.marker([-32.76, 152.57]).bindPopup('<strong>Old West City</strong>');
    var d18 = L.marker([-26.11, 132.62]).bindPopup('<strong>Camp</strong>');
    var d19 = L.marker([-68.36, 147.74]).bindPopup('<strong>Oreally Auto Parts</strong>');
    var d20 = L.marker([-68.30, 116.41]).bindPopup('<strong>Hotel</strong>');
    var d21 = L.marker([-72.31, 63.28]).bindPopup('<strong>Canyon Mine</strong>');
    //var d = L.marker([]).bindPopup('<strong></strong>');

    var miscLayer = leaflet.layerGroup([
        p1, p2, p3, p4, p5, p6, p7, p8, p9, p10,
        mp2, mp3, mp4, mp5, mp6,
        f1, f2, f3, f4, f5, f6, f7, f8, f9, f11, f12,
        pf1, pf2, pf3, pf4,
        s1, s2, s3, s4, s5,
        w1, w2, w3, w4, w5, w6, w7, w8, w9, w10, w11, w13, w15, w16, w17, w18, w19, w20,
        d1, d2, d3, d4, d5, d6, d7, d8, d9, d10, d11, d12, d14, d15, d16, d17, d18, d19, d20, d21,
    ]);
    //surface.addLayer(miscLayer);

        // This crap should be in the interface file because it handles interface interactions
    $(document).ready(function() {
        // Need a better way to handle this layer management
        $('#tradersLayerToggle').change(function() {
            if($(this).is(':checked')) {
                surface.addLayer(tradersLayer);
            } else {
                surface.removeLayer(tradersLayer);
            }
        });
        $('#cavesLayerToggle').change(function() {
            if($(this).is(':checked')) {
                surface.addLayer(cavesLayer);
            } else {
                surface.removeLayer(cavesLayer);
            }
        });
        $('#armyBasesLayerToggle').change(function() {
            if($(this).is(':checked')) {
                surface.addLayer(armyBasesLayer);
            } else {
                surface.removeLayer(armyBasesLayer);
            }
        });
        $('#housesLayerToggle').change(function() {
            if($(this).is(':checked')) {
                surface.addLayer(housesLayer);
            } else {
                surface.removeLayer(housesLayer);
            }
        });
        $('#otherLayerToggle').change(function() {
            if($(this).is(':checked')) {
                surface.addLayer(miscLayer);
            } else {
                surface.removeLayer(miscLayer);
            }
        });
    });
}