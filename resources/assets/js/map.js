var initMap = require('./initMap');
let configs = require('./maps');

// By default, we'll display alpha 16
initMap(configs['alpha16navezgane']);



// Development

// To locate where markers should be
// surface.on('click', function(e) {
//     alert("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
// });