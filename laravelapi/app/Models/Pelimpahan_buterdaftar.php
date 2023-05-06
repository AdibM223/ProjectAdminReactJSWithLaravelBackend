<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pelimpahan_buterdaftar extends Model
{
    use HasFactory;
    protected $table = 'pelimpahan_buterdaftar';
    protected $fillable = [
        'kode_buterdaftar',
        'tgl_pelimpahan',
        'badan_pelimpah',
        'dasar_pelimpahan'
    ];
}
