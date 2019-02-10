<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;

class PagesController extends Controller
{
    public function map()
    {
        return view('map');
    }

    public function contact(Request $request)
    {
        try {
            Mail::send('emails.contact', [
                    'message_body' => $request->input('message'),
                    'from' => $request->input('email')
                ],
                function($message) use($request) {
                    $message->to(config('mail.contact_email'), '7daysmap.com');
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
    }
}
