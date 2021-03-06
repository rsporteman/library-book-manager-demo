<?php

namespace App\Http\Controllers\Api;

use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as HttpController;

class Controller extends HttpController
{
    use AuthorizesRequests, DispatchesJobs, ValidatesRequests;
}
