<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class potensi_selisih_upah extends Model
{
    use HasFactory;
    protected $table = 'potensi_slisih_iuran_lapor_sbg_upah';
    protected $fillable = [
        'kode_buterdaftar',
        'sumber_data_pembanding',
        'total_potensi_iuran',
        'total_iuran_MF',
        'selisih',
        'status'
    ];
}
