<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CustomerController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login',[AuthController::class, 'login']);

Route::middleware(['auth:sanctum'])->group(function(){
    Route::post('/logout',[AuthController::class, 'logout']);

    // Customer
    Route::get('/view-customer', [CustomerController::class, 'index']);
    Route::post('/store-customer', [CustomerController::class, 'store']);
    Route::get('/edit-customer/{id}', [CustomerController::class, 'edit']);
    Route::put('/update-customer/{id}', [CustomerController::class, 'update']);
    Route::delete('/delete-customer/{id}', [CustomerController::class, 'destory']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
