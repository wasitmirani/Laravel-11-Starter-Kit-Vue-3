<?php

namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function getCountires(){

        return response()->json(['id'=>1,'name'=>'PK']);
    }

    public function getLanguages(){
        return response()->json(['id'=>1,'name'=>'EN']);

    }

    public function getTimezones(){
        return response()->json(['id'=>1,'name'=>'UTC']);

    }
}
