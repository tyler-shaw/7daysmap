let mix = require('laravel-mix');

// mix.options({ purifyCss: true });

mix.js('resources/assets/js/app.js', 'public/js/app.js');

mix.sass('resources/assets/sass/map.scss', 'public/css');

mix.copy('node_modules/leaflet/dist/images', 'public/build/css/images');

mix.version([
	'public/js/app.js',
	'public/css/map.css',
]);
