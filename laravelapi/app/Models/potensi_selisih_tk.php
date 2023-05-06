<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class potensi_selisih_tk extends Model
{
    use HasFactory;
    protected $table = 'potensi_slisih_iuran_lapor_sbg_tk';
    protected $fillable = [
        'kode_BUterdaftar',
        'sumber_data_pembanding',
        'besar_data_pembanding',
        'bulan_rujukan_MF',
        'data_MF',
        'selisih',
        'tanggal_canvasing_PTSDK',
        'hasil_canvasing',
        'status'
    ];
    
}
