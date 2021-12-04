<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/posts', [App\Http\Controllers\Api\PostController::class, 'index']);
