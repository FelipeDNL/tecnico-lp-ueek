<?php

use App\Http\Controllers\DepoimentoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DepoimentoController::class, 'dashboard'])->name('dashboard');

    Route::get('dashboard/depoimentos/novo', [DepoimentoController::class, 'create'])->name('depoimentos.create');
    
    Route::post('dashboard/depoimentos', [DepoimentoController::class, 'store'])->name('depoimentos.store');
});