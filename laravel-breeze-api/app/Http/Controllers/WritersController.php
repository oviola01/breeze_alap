<?php

namespace App\Http\Controllers;

use App\Models\Writer;
use Illuminate\Http\Request;

class WritersController extends Controller
{
    function index(){
        $writers = Writer::all();
        return response()->json($writers);
    }

    function store(Request $request){
        $writer=new Writer();
        $writer->fill($request->all());
        $writer->save();
        return Writer::findOrFail($writer->id);
    }

    function update($id, Request $request){
        $writer=Writer::findOrFail($id);
        $writer->fill($request->all());
        $writer->save();
        return Writer::findOrFail($id);
    }

    function destroy($id){
        $writer=Writer::findOrFail($id);
        $writer->delete();
        return response()->json(['message'=>'Sikeres törlés!'], 201);
    }
}
