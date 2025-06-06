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
    public function dashboard()
    {
        $depoimentos = Depoimentos::all();
        return Inertia::render('dashboard', [
            'depoimentos' => $depoimentos
        ]);
    }

    public function store(Request $request) {
        $request->validate([
            'usuario' => 'required|string|max:255',
            'mensagem' => 'required|string|max:500',
        ]);

        Depoimentos::create([
            'usuario' => $request->usuario,
            'mensagem' => $request->mensagem,
        ]);

        return redirect()->back()->with('success', 'Depoimento registrado com sucesso!');
    }

    public function create() {
        return Inertia::render('Depoimentos/create');
    }
}

