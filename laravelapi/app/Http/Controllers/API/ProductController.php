<?php

namespace App\Http\Controllers\API;

use App\Models\Product;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProductController extends Controller
{
    public function index()
    {
        $product = Product::all();
        return response()->json([
            'status'=>200,
            'product'=>$product,
        ]);
    }

    public function allproduct(Type $var = null)
    {
        $product = Product::get();
        return response()->json([
            'status'=>200,
            'product'=>$product,
        ]);
    }

    public function store(Request $request)
    {

        $validator = Validator::make($request->all(),[
            'item'=>'required|max:191|unique|products,item',
            'price'=>'required|numeric|min:3',
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
            $product = new Product;
            $product->item = $request->input('item');
            $product->price = $request->input('price');
            $product->save();

            return response()->json([
                'status'=> 200,
                'message'=>'Product Added Successfully'
            ]);
        }
    }

    public function edit($id)
    {
        $product = Product::find($id);

        if($product)
        {
            return response()->json([
                'status' => 200,
                'product' => $product
            ]);
        }
        else{
            return response()->json([
                'status'=>404,
                'message' => "No Product Id Found"
            ]);
        }
    }

    public function update(Request $request,$id)
    {
        $validator = Validator::make($request->all(),[
            'item'=>'required|max:191|unique:products,item,' . $id,
            'price'=>'required|numeric|min:3',
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
            $product = Product::find($id);
            
            if($product)
            {
                $product->item = $request->input('item');
                $product->price = $request->input('price');
                $product->save();

                return response()->json([
                    'status'=> 200,
                    'message'=>'Product Added Successfully'
                ]);

            }
            else
            {
                return response()->json([
                    'status' => 404,
                    'message' => "No Product Found"
                ]);
            }
        }
    }

    public function destory($id)
    {
        $product = Product::find($id);
        if($product)
        {
            $product->delete();
            
            return response()->json([
                'status' => 200,
                'message' => 'product Deleted Successfully'
            ]);
        }
        else
        {
            return response()->json([
                'status' => 404,
                'message' => 'No Product Found'
            ]);
        }
    }

}
