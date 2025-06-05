<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Depoimentos extends Model
{
    protected $table = 'depoimentos';

    protected $fillable = [
        'usuario',
        'mensagem',
        'foto',
    ];
}
