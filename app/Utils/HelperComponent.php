<?php

namespace App\Utils;

use App\Models\Country;
use Illuminate\Support\Facades\Cache;


class HelperComponent
{

    
    public static function getCountriesList()
    {
        return Cache::remember('getCountriesList', sessionTimer(), function () {
            return (new Country())->getAllCategories();
        });
    }
}