<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Belumdaftar extends Model
{
    use HasFactory;
    protected $table = 'bubelumdaftar';
    protected $fillable = [
        'id',
        'nama_BUbelumdaftar',
        'alamat_bubelumdaftar',
        'notelp_bubelumdaftar',
    ];
}
