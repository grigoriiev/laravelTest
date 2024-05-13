<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Models\Product;
use App\Notifications\NewProduct;
use Illuminate\Contracts\View\Factory;
use Illuminate\Contracts\View\View;
use Illuminate\Foundation\Application;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\Facades\Notification;
use Throwable;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index(): Factory|Application|View|\Illuminate\Contracts\Foundation\Application
    {
        $products = Product::orderBy('created_at', 'desc')->get();


        return view('products.products')->with('products', $products);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreProductRequest $request): JsonResponse
    {

        if (!Gate::allows('store-product', config("products.role"))) {
            // abort(403);
            return response()->json([
                "success" => false,
                "message" => "You do not have sufficient rights to create an article."
            ], 403);
        }


        try {
            $product = Product::create($request->all());
            try {


                Notification::route('mail', config("products.email"))->notify(new NewProduct($product->NAME, $product->ID));
            } catch (Throwable $th) {
                return response()->json([
                    "success" => false,
                    "message" => "Product has been no notification"
                ], 500);
            }

            return response()->json([
                "success" => true,
                'product' => $product,
                "message" => "Product has been store successfully id " . $product->ID . "."
            ], 200);


        } catch (Throwable $th) {
            return response()->json([
                "success" => false,
                "message" => "Product has been store false "
            ], 500);
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(Product $product)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(int $product): JsonResponse
    {

        try {
            $product = Product::findOrFail($product);


            return response()->json([
                "success" => true,
                'product' => $product,
                "message" => "Product has been edit successfully id " . $product->ID . "."
            ], 200);
        } catch (Throwable $th) {
            return response()->json([
                "success" => false,
                "message" => "Product has been edit false "
            ], 500);
        }


    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateProductRequest $request, int $product): JsonResponse
    {

        if (!Gate::allows('update-product', config("products.role"))) {
            // abort(403);
            return response()->json([
                "success" => false,
                "message" => "You do not have enough rights to edit the article."
            ], 403);
        }

        try {


            $product = Product::findOrFail($product);

            $product->update([
                    'NAME' => $request->NAME,
                    'ARTICLE' => $request->ARTICLE,
                    'STATUS' => $request->STATUS,
                    'DATA' => $request->DATA,
                ]
            );

            return response()->json([
                "success" => true,
                'product' => $product,
                "message" => "Product has been updated successfully id " . $product->ID . "."
            ], 200);
        } catch (Throwable $th) {
            return response()->json([
                "success" => false,
                "message" => "Product has been updated false "
            ], 500);
        }


    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(int $product): JsonResponse
    {
        //  dd($product);
        //


        try {
            $product = Product::findOrFail($product);


            $product->delete();

            return response()->json([
                'status' => true,
                'message' => "Product Deleted successfully!",
            ], 200);
        } catch (Throwable $th) {
            return response()->json([
                'status' => false,
                'message' => "Product Deleted false!",
            ], 500);
        }


    }
}
