<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tindak_lanjut_penagihan extends Model
{
    use HasFactory;
    protected $table = 'tindak_lanjut_penagihan';
    protected $fillable = [
        'kode_buterdaftar',
        'tgl_pemeriksaan',
        'nomor_spt',
        'tgl_surat',
        'upaya_surat_kedua',
        'upaya_lain_by_phone',
        'upaya_lain_by_wa',
        'nomor_SKK'
    ];
}
