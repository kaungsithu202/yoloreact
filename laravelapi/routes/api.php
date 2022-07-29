<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\AuthController;
use App\Http\Controllers\API\CustomerController;
use App\Http\Controllers\API\ProductController;

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
    Route::get('/all-customer', [CustomerController::class, 'allcustomer']);

    
    // Product
    Route::get('/view-product', [ProductController::class, 'index']);
    Route::post('/store-product', [ProductController::class, 'store']);
    Route::get('/edit-product/{id}', [ProductController::class, 'edit']);
    Route::put('/update-product/{id}', [ProductController::class, 'update']);
    Route::delete('/delete-product/{id}', [ProductController::class, 'destory']);
    Route::get('/all-product', [ProductController::class, 'allproduct']);
});

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
