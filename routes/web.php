<?php

use App\Http\Controllers\PagesController;
use Illuminate\Support\Facades\Route;

Route::get('/', [PagesController::class, 'map']);
Route::post('/contact', [PagesController::class, 'contact']);
