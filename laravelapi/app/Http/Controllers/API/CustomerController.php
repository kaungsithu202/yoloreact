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

    public function allcustomer()
    {
        $customer = Customer::get();
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

    public function edit($id)
    {
        $customer = Customer::find($id);

        if($customer)
        {
            return response()->json([
                'status' => 200,
                'customer' => $customer
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message' => "No Customer Id Found"
            ]);
        }
    }
    
    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(),[
            'name'=>'required|max:191',
            'phone'=>'required|numeric|min:8',
            'email'=>'email|max:191|unique:customers,email,'. $id,
        ]);

        if($validator->fails())
        {
            return response()->json([
                'status'=> 422,
                'errors'=> $validator->messages()
            ]);
        }
        else
        {
            $customer = Customer::find($id);
            
            if($customer)
            {
                $customer->name = $request->input('name');
                $customer->phone = $request->input('phone');
                $customer->email = $request->input('email');
                $customer->city = $request->input('city');
                $customer->township = $request->input('township');
                $customer->address = $request->input('address');
                $customer->save();

                return response()->json([
                    'status'=> 200,
                    'message'=>'Customer Updated Successfully'
                ]);
            }
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => "No Customer Found"
                ]);
            }
        }
    }

    public function destory($id)
    {
        $customer = Customer::find($id);
        if($customer)
        {
            $customer->delete();
            
            return response()->json([
                'status' => 200,
                'message' => 'Customer Deleted Successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'No Customer Found'
            ]);
        }
    }
}
