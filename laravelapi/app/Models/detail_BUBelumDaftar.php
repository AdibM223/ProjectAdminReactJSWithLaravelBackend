<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class detail_BUBelumDaftar extends Model
{
    use HasFactory;
    protected $table = 'detail_bu_belum_daftar';
    protected $fillable = [
        'kode_BUbelumdaftar',
        'nama_BUBelumDaftar',
        'tanggal_canvasing',
        'hasil_canvasing',
        'status'
    ];
}
