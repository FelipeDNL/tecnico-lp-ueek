<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Depoimentos;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\StreamedResponse;

class DepoimentoController extends Controller
{
    public function index() {
        $depoimentos = Depoimentos::all();
        return Inertia::render('landing-page', [
            'depoimentos' => $depoimentos
        ]);
    }

    public function dashboard() {
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

        return redirect()->route('dashboard')->with('success', 'Depoimento registrado com sucesso!');
    }

    public function create() {
        return Inertia::render('Depoimentos/create');
    }

    public function edit($id) {
        $depoimentos = Depoimentos::findOrFail($id);
        return Inertia::render('Depoimentos/edit', [
            'depoimentos' => $depoimentos
        ]);
    }

    public function update(Request $request, $id) {
        $validated = $request->validate([
            'usuario' => 'required|string|max:255',
            'mensagem' => 'required|string|max:500',
        ]);

        $depoimentos = Depoimentos::findOrFail($id);
        $depoimentos->update($validated);

        return redirect()->route('dashboard')->with('success', 'Depoimento atualizado com sucesso!');   
    }

    public function destroy($id) {
        $depoimentos = Depoimentos::findOrFail($id);
        $depoimentos->delete();

        return redirect()->route('dashboard')->with('success', 'Depoimento excluído com sucesso!');
    }

    public function bulkDestroy(Request $request) {
        $ids = $request->input('ids', []);
        Depoimentos::whereIn('id', $ids)->delete();

        return redirect()->route('dashboard')->with('success', 'Depoimentos excluídos com sucesso!');
    }

    public function export(){
        $fileName = 'depoimentos.csv';
        $depoimentos = Depoimentos::all();

        $headers = [
            "Content-type"        => "text/csv",
            "Content-Disposition" => "attachment; filename=$fileName",
            "Pragma"              => "no-cache",
            "Cache-Control"       => "must-revalidate, post-check=0, pre-check=0",
            "Expires"             => "0"
        ];

        $columns = ['ID', 'Usuário', 'Mensagem', 'Depo. criado em'];

        $callback = function() use ($depoimentos, $columns) {
            $file = fopen('php://output', 'w');
            fputcsv($file, $columns);

            foreach ($depoimentos as $dep) {
                fputcsv($file, [
                    $dep->id,
                    $dep->usuario,
                    $dep->mensagem,
                    'email@exemplo.com', 
                    $dep->created_at,
                ]);
            }
            fclose($file);
        };

        return response()->stream($callback, 200, $headers);
    }


}