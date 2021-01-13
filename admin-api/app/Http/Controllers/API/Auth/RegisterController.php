<?php

namespace App\Http\Controllers\API\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Http\Requests\RegisterRequest;
use App\User;

class RegisterController extends Controller
{
    protected function create(RegisterRequest $request)
    {
        $user = new User();
        // $user->name = $request['name'];
        // $user->email = $request['email'];
        // $user->password = bcrypt($request['password']);
        $user->name = $request->name;
        $user->email = $request->email;
        $user->password = bcrypt($request->password);
        $user->save();

        // User::create([
        //     'name'     => $request['name'],
        //     'email'    => $request['email'],
        //     'password' => bcrypt($request['password']),
        // ]);

        return response()->json([
            'success' => true,
            'token' => $user->createToken('AntarApp')->accessToken,
            'message' => 'Register success.',
        ]);
    }
}
