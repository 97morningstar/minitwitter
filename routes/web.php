<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', ['uses' => 'GenderController@gender_img']);


Route::get('/avatar', ['uses' => 'GenderController@avatar']);


Route::get('/inside', ['uses' => 'GenderController@cookies_string']);