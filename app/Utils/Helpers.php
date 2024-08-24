<?php

use Carbon\Carbon;
use Illuminate\Support\Str;
use App\Models\BrandingLabel;





function perPage()
{

    return 20;
}

/**
 * Send JSON response.
 *
 * @param $result
 * @param $message
 * @param $status
 * @param $code
 *
 * @return mixed
 */
function responseJson($message = "success", $result = [], $status = true, $code = 200)
{
    return response()->json(['message' => $message, 'status' => $status, 'result' => $result], $code);
}

function genUUID()
{
    return (string) Str::uuid();
}

function mapFirstNameLastSlug($val,$val2=null)
{

return Str::slug($val.'-'.$val2, '-');
}
function setSlug($val)
{
    return (string) Str::slug($val, '-');
}

function getBrandingLabel()
{
    $label = BrandingLabel::latest()->first();
    return $label;
}


function setDateTimeFormat($date)
{
    if ($date) {
        // date_default_timezone_set("Asia/Karachi");
        $carbonDate = new Carbon($date->format('d-m-Y h:i:s a'));
        $carbonDate->timezone = 'Asia/Karachi';
        return $carbonDate->format('d-m-Y h:i:s a');

    }
}

function formatDate($date)
{
    $time = strtotime($date);
    $newformat = date('Y-m-d', $time);
    return $newformat;
}




// function getBrandById($id){
// 	$brand=Brand::where('id',$id)->first();
// 	return $brand;
// }
// function getBrandByName($name){
// 	$brand=Brand::where('name',$name)->first();
// 	return $brand;
// }

// function getCategoryById($id)
// {
// 	$category=Category::where('id',$id)->first();
// 	return $category;
// }
// function getCategoryByName($name)
// {
// 	$category=Category::where('name',$name)->first();
// 	return $category;
// }


function uploadImage($path)
{

    if (request()->hasFile('image')) {
        $name = "/" . request()->file('image')->store($path); // Assuming $path is already defined
        $name = str_replace($path . '/', '', $name);
    } else {
        $name = "";
    }
    return $name;
}
function getImagePath($type)
{

    return "/public/images/" . $type;
}


function getCurrency()
{

    return env('CURRENCY') ?? '$';
}


function getYears()
{
    $years = [];
    for ($year = 1980; $year <= 2024; $year++) {
        $years[] = $year;
    }
    $years = array_reverse($years);
    return $years;
}





function removeUrlFromThumbnail(string $type, string $value): string
{
    // Ensure $type doesn't have leading or trailing slashes
    $type = trim($type, '/');
    // Generate the pattern to remove
    $pattern = url("/storage/images/{$type}/");
    // Remove the pattern from the $value
    return str_replace($pattern, '', $value);
}