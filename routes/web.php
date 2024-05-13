<?php

use App\Http\Controllers\ProfileController;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::get('/cover', [\App\Http\Controllers\CoverController::class, 'index'])->name('cover');
Route::get('/products', [\App\Http\Controllers\ProductController::class, 'index'])->name('products.products');
Route::get('/products/{id}', [\App\Http\Controllers\ProductController::class, 'edit'])->name('products.edit');
Route::post('/products', [\App\Http\Controllers\ProductController::class, 'store'])->name('products.store');
Route::delete('/products/{id}', [\App\Http\Controllers\ProductController::class, 'destroy'])->name('products.destroy');
Route::put('/products/{id}', [\App\Http\Controllers\ProductController::class, 'update'])->name('products.update');
require __DIR__.'/auth.php';

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
