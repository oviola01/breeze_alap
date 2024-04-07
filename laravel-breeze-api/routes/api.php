<?php

use App\Http\Controllers\WritersController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth:sanctum'])->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/writers', [WritersController::class, 'index']);
Route::post('/writers/new', [WritersController::class, 'store']);
Route::put('/writers/update/{id}', [WritersController::class, 'update']);
Route::delete('/writers/delete/{id}', [WritersController::class, 'destroy']);