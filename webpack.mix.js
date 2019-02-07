let mix = require('laravel-mix');

// mix.options({ purifyCss: true });

mix.js('resources/assets/js/app.js', 'public/js/app.js');

mix.sass('resources/assets/sass/map.scss', 'public/css');

mix.copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/build/fonts/bootstrap');
mix.copy('node_modules/leaflet/dist/images', 'public/build/css/images');

mix.version([
	'public/js/app.js',
	'public/css/map.css',
]);

// elixir(mix => {
//     mix.webpack('app.js')
//        .sass('map.scss');
// });

// elixir(mix => {
//     mix.version(['css/map.css', 'js/app.js']);
// });

// elixir(mix => {
//     mix.copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/build/fonts/bootstrap')
//        .copy('node_modules/leaflet/dist/images', 'public/build/css/images');
// });

// mix.js('resources/assets/js/game/main.js', 'public/js');

// // Compile
// mix.sass('resources/assets/sass/app.scss', 'public/css');
// mix.sass('resources/assets/sass/website.scss', 'public/css')
// mix.js('resources/assets/js/website.js', 'public/js');

// // Move
// mix.copy('node_modules/lightbox2/dist/images', 'public/build/images');
// // Bootstrap.js & jquery, for use in the forum.
// mix.copy('node_modules/bootstrap/dist/js/bootstrap.min.js', 'public/js/vendor');
// mix.copy('node_modules/jquery/dist/jquery.min.js', 'public/js/vendor');

// // Extract - Don't extract anything that the website file uses, because I don't want to have to
// // include the vendor file on the public website.
// // mix.extract(['vue', 'vuex', 'vue-router', 'vue-directive-tooltip', 'vue-toasted']); // Bugs out with npm run hot

// // Version - Not while hot reload is running though
// if (process.env.npm_lifecycle_event !== 'hot') {
//     mix.version([
//         'public/css/app.css',
//         'public/css/website.css',
//         'public/js/website.js',
//         // SPA
//         'public/js/main.js',
//         // 'public/js/manifest.js',
//         // 'public/js/vendor.js',
//     ]);
// }