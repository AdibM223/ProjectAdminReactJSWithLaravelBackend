<?php

namespace App\Http\Controllers;

use App\Models\Pelimpahan_buterdaftar;
use Illuminate\Http\Request;

class PemeriksaSudahDaftarController extends Controller
{
    public function index4(){
        $Pemeriksasdh = Pelimpahan_buterdaftar::all();

        return response()->json([
            'stt'=>200,
            'pemeriksasudahku'=>$Pemeriksasdh
        ]);
    }


    public function verify (Request $request,$id)
    {
        $Pemeriksasdh = Pelimpahan_buterdaftar::find($id);
        $Pemeriksasdh->status = $request->input('status');
        $Pemeriksasdh->save();

        return response()->json([
            'stt' =>200,
            'message' => 'Update Berhasil'
        ]);
    }
}
