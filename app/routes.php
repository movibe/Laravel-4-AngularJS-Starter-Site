<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the Closure to execute when that URI is requested.
|
*/

/** all API routes go first, any uncaught routes go to index */
Route::group(array('prefix' => 'service'), function() {
    Route::resource('authenticate', 'AuthenticationController');
    Route::resource('movies', 'MovieController');
});

Route::any('{all}', function($uri)
{
	return View::make('index');
})->where('all', '.*');