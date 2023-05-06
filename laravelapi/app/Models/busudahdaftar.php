<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class busudahdaftar extends Model
{
    use HasFactory;
    protected $table = 'busudahdaftar';
    protected $fillable = [
        'id',
        'nama_BUterdaftar',
        'alamat_BUterdaftar',
        'notelp_BUterdaftar',
    ];
}
