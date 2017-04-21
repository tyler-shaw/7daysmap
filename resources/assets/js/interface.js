var $ = require('jquery');
// Gotta do this garbage for bootstrap
window.jQuery = $;
var slideReveal = require('./vendor/slideReveal');
var bootstrap = require ('bootstrap');

$(document).ready(function() {

    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    })

    $('#options-trigger').click(function() {
        $('#options-wrap').slideToggle();
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
                var classes = 'alert alert-dismissible';
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
