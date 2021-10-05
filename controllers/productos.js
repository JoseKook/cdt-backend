const { response } = require('express');
const { Producto } = require('../models');

const obtenerProductos = async(req, res = response ) => {

    const productos = await Producto.find();

    res.json({ productos });
}

const obtenerProducto = async(req, res = response ) => {

    const { id } = req.params;
    const producto = await Producto.findById( id );

    res.json( producto );
}

const crearProducto = async(req, res = response ) => {

    const data = req.body;

    const producto = new Producto( data );

    // Guardar DB
    await producto.save();

    res.status(201).json(producto);
}

const actualizarProducto = async( req, res = response ) => {

    const { id } = req.params;
    const data = req.body;

    const producto = await Producto.findByIdAndUpdate(id, data, { new: true });

    res.json( producto );
}

const borrarProducto = async(req, res = response ) => {

    const { id } = req.params;
    const productoBorrado = await Producto.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( productoBorrado );
}




module.exports = {
    crearProducto,
    obtenerProductos,
    obtenerProducto,
    actualizarProducto,
    borrarProducto
}