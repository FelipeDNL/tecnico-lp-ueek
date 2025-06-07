<?php

use App\Http\Controllers\DepoimentoController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [DepoimentoController::class, 'dashboard'])->name('dashboard');

    Route::get('dashboard/novo', [DepoimentoController::class, 'create'])->name('depoimentos.create');
    Route::post('dashboard/novo', [DepoimentoController::class, 'store'])->name('depoimentos.store');

    Route::get('dashboard/editar/{id}', [DepoimentoController::class, 'edit'])->name('depoimentos.edit');
    Route::put('dashboard/editar/{id}', [DepoimentoController::class, 'update'])->name('depoimentos.update');

    Route::delete('dashboard/{id}', [DepoimentoController::class, 'destroy'])->name('depoimentos.destroy');
});