<?php

namespace App\Http\Controllers\API;

use App\Models\Customer;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class CustomerController extends Controller
{
    public function index()
    {
        $customer = Customer::all();
        return response()->json([
            'status'=>200,
            'customer'=>$customer,
        ]);
    }
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'name'=>'required|max:191',
            'phone'=>'required|numeric|min:8',
            'email'=>'email|max:191|unique:customers,email',
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status'=> 400,
                'errors'=> $validator->messages()
            ]);
        }
        else
        {
            $customer = new Customer;
            $customer->name = $request->input('name');
            $customer->phone = $request->input('phone');
            $customer->email = $request->input('email');
            $customer->city = $request->input('city');
            $customer->township = $request->input('township');
            $customer->address = $request->input('address');
            $customer->save();

            return response()->json([
                'status'=> 200,
                'message'=>'Customer Added Successfully'
            ]);
        }
    }
}
