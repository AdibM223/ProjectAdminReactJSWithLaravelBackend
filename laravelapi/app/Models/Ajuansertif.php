<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ajuansertif extends Model
{
    use HasFactory;
    protected $table = 'pengajuansertifikat';
    protected $fillable = [
        'kode_BUterdaftar',
        'no_sertif',
        'periode_sertif',
        'tgl_cetak',
        'keterangan_periode',
        'status'
    ];
}
