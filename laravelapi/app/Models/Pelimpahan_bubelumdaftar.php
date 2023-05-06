<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelimpahan_bubelumdaftar extends Model
{
    use HasFactory;
    protected $table = 'pelimpahan_bubelumdaftar';
    protected $fillable = [
        'kode_bu_belumdaftar',
        'tgl_pelimpahan',
        'tgl_SP',
        'nomor_SP',
        'dasar_pelimpahan'
        
    ];
}
