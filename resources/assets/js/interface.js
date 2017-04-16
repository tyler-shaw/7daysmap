var $ = require('jquery');
var slideReveal = require('./vendor/slideReveal');

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
