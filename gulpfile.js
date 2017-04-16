const elixir = require('laravel-elixir');

elixir.config.sourcemaps = false;

elixir(mix => {
    mix.webpack('app.js')
       .sass('map.scss');
});

elixir(mix => {
    mix.version(['css/map.css', 'js/app.js']);
});

elixir(mix => {
    mix.copy('node_modules/bootstrap-sass/assets/fonts/bootstrap', 'public/build/fonts/bootstrap');
});