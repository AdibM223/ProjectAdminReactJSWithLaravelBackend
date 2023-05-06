<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kunjungan_penagihan extends Model
{
    use HasFactory;
    protected $table = 'aktivitas_kunjungan_penagihan';
    protected $fillable = [
        'kode_BUterdaftar',
        'tgl_email',
        'tgl_telpon',
        'hasil_telpon',
        'tgl_kunjungan',
        'hasil_kunjungan',
        'upaya_lain',
        'hasil_upaya_lain'
    ];
    
}
