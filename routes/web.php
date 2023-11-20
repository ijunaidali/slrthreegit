<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/junaid', function() {
    dd('hello');
});

Route::get('/', function () {
    return view('dashboard');
})->middleware(['verify.shopify'])->name('home');

Route::view('/products', 'products');
Route::view('/customers', 'customers');
Route::view('/settings', 'settings');
Route::view('/dashboard', 'dashboard');
Route::view('/search', 'search');
