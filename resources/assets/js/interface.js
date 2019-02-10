let $ = require('jquery');
// Gotta do this garbage for bootstrap
window.jQuery = $;
let configs = require('./maps');
let slideReveal = require('./vendor/slideReveal');
let bootstrap = require ('bootstrap');
let initMap = require('./initMap');

$(document).ready(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })

    $('#map-version').change(function() {
        window.surface.remove();
        let mapVersion = $(this).val();
        switch (mapVersion) {
            case 'alpha15navezgane':
                initMap(configs['alpha15navezgane']);
                break;
            case 'alpha16navezgane':
                initMap(configs['alpha16navezgane']);
                break;
            default:
                initMap(configs['alpha16navezgane']);
                alert('Unknown map version - displaying Alpha 16 Navezgane.');
        }
        // Uncheck all map marker options
        $('#options-wrap').find('input:checkbox').prop('checked', false);
    });

    $('#options-trigger').click(function() {
        $('#options-wrap').slideToggle();
        let options_label = $(this).text();
        if(options_label == 'Show Options') {
            $(this).text('Hide Options').addClass('btn btn-success mb5');
        } else {
            $(this).text('Show Options').removeClass('btn btn-success mb5');
        }
    });

    $('#info-panel').slideReveal({
        trigger: $('#menu-trigger'),
        push: false,
        overlay: true,
    });

    $('#contact-form').submit(function(e) {
        e.preventDefault();
        // Need to submit the message and email as data fields
        // Need to handle the response appropriately - displaying a message and clearing fields
        $.ajax({
            url: '/contact',
            method: 'POST',
            data: {
                email: $('#email').val(),
                message: $('#message').val()
            },
            error: function() {
                $('#alert-wrap').html('');
                $('#alert-wrap').append(
                    $('<div>').addClass('alert alert-danger alert-dismissible').attr('role', 'alert').append(
                        $('<button>').attr('type', 'button').addClass('close').attr('data-dismiss', 'alert').attr('aria-label', 'Close').append(
                            $('<span>').attr('aria-hidden', 'true').html('&times;')
                        )
                    ).append(
                        'Sorry! There was an issue submitting the contact form.'
                    )
                );
            },
            success: function(data) {
                // Clear the form if message was successful
                if(data.success) {
                    $('#email').val('');
                    $('#message').val('');
                }
                // Display a message
                $('#alert-wrap').html('');
                let classes = 'alert alert-dismissible';
                if(data.success) {
                    classes += ' alert-success';
                } else {
                    classes += ' alert-danger';
                }
                $('#alert-wrap').append(
                    $('<div>').addClass(classes).attr('role', 'alert').append(
                        $('<button>').attr('type', 'button').addClass('close').attr('data-dismiss', 'alert').attr('aria-label', 'Close').append(
                            $('<span>').attr('aria-hidden', 'true').html('&times;')
                        )
                    ).append(
                        data.message
                    )
                );
            }
        });
    });

});
