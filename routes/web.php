<?php

use Illuminate\Http\Request;

Route::get('/', function () {
    return view('map');
});

// Contact form, accessed via ajax.
// I need to configure the email functionality and then give it all a test
Route::post('/contact', function (Request $request) {
    try {
        Mail::send('emails.contact', [
                'message_body' => $request->input('message'),
                'from' => $request->input('email')
            ],
            function($message) use($request) {
                $message->to('tshaw0813@gmail.com', '7daysmap.com');
                $message->subject('7daysmap.com Contact Form');
                $message->replyTo($request->input('email'));
                $message->from('contact-emailer@7daysmap.com', '7daysmap.com Contact Form');
            }
        );
    }
    catch(Exception $e) {
        return [
            'success' => false,
            'message' => 'Sorry! There was an issue sending your message.'
        ];
    }
    return [
        'success' => true,
        'message' => "Your message has been sent. We'll get back to you soon!"
    ];
});
