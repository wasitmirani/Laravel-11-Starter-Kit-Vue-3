<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\backend\BackendController;
use App\Http\Controllers\frontend\FrontendController;

Route::get('/dashboard', function () {
    return view('dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

});

require __DIR__.'/auth.php';
// ->middleware(['auth', 'verified']);
Route::get('/{path?}',[FrontendController::class, 'index']);
Route::get('/app/{module?}/{feature?}/{action?}', [BackendController::class, 'index']);
