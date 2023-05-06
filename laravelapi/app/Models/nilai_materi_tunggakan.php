<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class nilai_materi_tunggakan extends Model
{
    use HasFactory;
    protected $table = 'nilai_materi_tunggakan_iuran';
    protected $fillable = [
        'kode_BUterdaftar',
        'Aging_potensi',
        'bln_menunggak',
        'besar_tunggakan',
        'status'
    ];
}
