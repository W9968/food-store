<?php

namespace App\Http\Controllers\Delta;

use App\Models\Product;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Requests\ProductPostRequest;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Product::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(ProductPostRequest $request)
    {
        if ($request->hasFile('productFilePathImage'))
        {
            $request->file('productFilePathImage')-> store('public/product');
            return Product::create([
                'productName' => $request->productName,
                'productSummary' => $request->productSummary,
                'productOldPrice' => $request->productOldPrice,
                'productNewPrice' => $request->productOldPrice,
                'productDesription' => $request->productOldPrice,
                'productInventory' => $request->productInventory,
                'procutExpirationDate' => $request->productInventory,
                'productFilePathImage' => $request->file('productFilePathImage')->hashName(),
                'brand_id' => $request->brand_id
            ]);
        } else {
            return 'no file';
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
