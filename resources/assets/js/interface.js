var $ = require('jquery');
// Gotta do this garbage for bootstrap
window.jQuery = $;
var slideReveal = require('./vendor/slideReveal');
var bootstrap = require ('bootstrap');

$(document).ready(function() {
    $('#options-trigger').click(function() {
        $('#options-wrap').slideToggle();
    });

    $('#info-panel').slideReveal({
        trigger: $('#menu-trigger'),
        push: false,
        overlay: true,
    });
});
