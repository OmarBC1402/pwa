<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pedido;

//Controlador de pedidos

class PedidoController extends Controller
{
  
    public function index()
    {
        $pedidos = Pedido::all();
        return $pedidos;
    }

    public function store(Request $request)
    {
        $pedido = new Pedido();
        $pedido->producto = $request->producto;
        $pedido->fecha = $request->fecha;
        $pedido->status = $request->status;
        $pedido->total = $request->total;
        $pedido->cliente = $request->cliente;
        $pedido->direccion = $request->direccion;

        $pedido->save();
    }

    public function show($id)
    {
        $pedido = Pedido::find();
        return $pedido;
    }

    
    public function update(Request $request, $id)
    {
        $pedido = Pedido::findOrFail($request->id);

        $pedido->producto = $request->producto;
        $pedido->fecha = $request->fecha;
        $pedido->status = $request->status;
        $pedido->total = $request->total;
        $pedido->cliente = $request->cliente;
        $pedido->direccion = $request->direccion;

        $pedido->save();
        return $pedido;
    }

   
    public function destroy($id)
    {
        $pedido = Pedido::destroy($id);
        return $pedido;
    }
}
