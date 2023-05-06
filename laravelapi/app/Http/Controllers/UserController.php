<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Illuminate\Support\Facades\Hash;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    
    



    // function login(Request $request, $jabatan)
    // {
    //     $user = User::where('email',$request->email)->first();
    //     // $status = User::find($jabatan);
    //     if ($user || Hash::check($request->password,$user->password)) {
    //         navigate('/laporanbtn/ajuansertif');
        
    //     }
    //     else {
    //       return ["error"=>"email not matched"];
    //     //     if ($status==="pgw_ajusertif") {
    //     //         return ["status"=>"pgw_ajusertif"];
    //     //         // navigate('/laporanbtn/ajuansertif')
    //     //       }
    //     //       else if ($status==="pgw_tunggakiur")
    //     //       {
    //     //         return ["status"=>"pgw_tunggakiur"];
    //     //         navigate('/laporanbtn/belumdaftar')
    //     //       }
    //     //       else if ($status==="pgw_blmdaftar")
    //     //       {
    //     //         return ["status"=>"pgw_blmdaftar"];
    //     //         // navigate('/laporanbtn/tunggakiuran')
    //     //       }
    //     //       else if ($status==="pgw_lprsbgupah")
    //     //       {
    //     //         return ["status"=>"pgw_lprsbgupah"];
    //     //         // navigate('/laporanbtn/laporsbguph')
    //     //       }
    //     //       else if ($status==="pgw_lprsbgTK")
    //     //       {
    //     //         return ["status"=>"pgw_lprsbgTK"];
    //     //         // navigate('/laporanbtn/laporsbgtk')
    //     //       }
    //     //       else{
    //     //         // navigate('/')
    //     //       }

        
    //     }
    //     return $user;
    // }
}
