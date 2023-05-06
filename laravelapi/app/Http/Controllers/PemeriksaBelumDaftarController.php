<?php

namespace App\Http\Controllers;

use App\Models\Pelimpahan_bubelumdaftar;
use Illuminate\Http\Request;

class PemeriksaBelumDaftarController extends Controller
{
    public function index3(){
        $Pemeriksablm = Pelimpahan_bubelumdaftar::all();

        return response()->json([
            'stt'=>200,
            'pemeriksablmku'=>$Pemeriksablm
        ]);
    }


    public function verify (Request $request,$id)
    {
        $Pemeriksablm = Pelimpahan_bubelumdaftar::find($id);
        $Pemeriksablm->status = $request->input('status');
        $Pemeriksablm->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }
}

