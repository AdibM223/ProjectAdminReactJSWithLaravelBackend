<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class notif extends Model
{
    use HasFactory;
    protected $table = 'notification';
    protected $fillable = [
        'kode_bu',
        'nama_bu',
        'message',
    ];
}
