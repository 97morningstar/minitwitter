<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;

class GenderController extends Controller
{


    function __contructor(){
    	
    }


  public  function set_cookies(){
   	
    }

    function gender_img(Request $request){
    	return view('gender_img');
    }


    function avatar(Request $request){
    	return view('avatar');
    }


function cookies_string(Request $request){

	$nombre = $_COOKIE['nombre'];
	$gender = $_COOKIE['gender'];
	$src = $_COOKIE['src'];

	return view('inside', compact('nombre', 'gender', 'src'));
}


}
