const { response } = require('express');
const { Plazo } = require('../models');

const obtenerPlazos = async(req, res = response ) => {

    const plazos = await Plazo.find();

    res.json({ plazos });
}

const obtenerPlazo = async(req, res = response ) => {

    const { id } = req.params;
    const plazo = await Plazo.findById( id );

    res.json( plazo );
}

const crearPlazo = async(req, res = response ) => {

    const data = req.body;

    const plazo = new Plazo( data );

    // Guardar DB
    await plazo.save();

    res.status(201).json(plazo);
}

const actualizarPlazo = async( req, res = response ) => {

    const { id } = req.params;
    const data = req.body;

    const plazo = await Plazo.findByIdAndUpdate(id, data, { new: true });

    res.json( plazo );
}

const borrarPlazo = async(req, res = response ) => {

    const { id } = req.params;
    const PlazoBorrado = await Plazo.findByIdAndUpdate( id, { estado: false }, {new: true });

    res.json( PlazoBorrado );
}




module.exports = {
    crearPlazo,
    obtenerPlazos,
    obtenerPlazo,
    actualizarPlazo,
    borrarPlazo
}