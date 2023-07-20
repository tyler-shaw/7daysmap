let mix = require('laravel-mix');

// mix.options({ purifyCss: true });

mix.js('resources/assets/js/app.js', 'public/js/app.js');

mix.copy('node_modules/leaflet/dist/leaflet.css', 'public/build/css');
mix.copy('node_modules/leaflet/dist/images', 'public/build/css/images');

mix.version([
    'css/map.css'
]);