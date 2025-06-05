<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Depoimentos;
use Inertia\Inertia;

class DepoimentoController extends Controller
{
    public function index()
    {
        $depoimentos = Depoimentos::all();
        return Inertia::render('landing-page', [
            'depoimentos' => $depoimentos
        ]);
    }
    
}

