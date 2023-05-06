<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tindak_lanjut_pembayaran extends Model
{
    use HasFactory;
    protected $table = 'tindak_lanjut_pembayaran';
    protected $fillable = [
        'kode_BUterdaftar',
        'tgl_bayar_iuran',
        'jumlah_pembayaran',
        'keterangan'
    ];
    
}
