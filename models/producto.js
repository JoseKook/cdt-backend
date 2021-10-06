const { Schema, model } = require('mongoose');

const ProductoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    sku: {
        type: String,
        required: [true, 'El SKU es obligatorio']
    },
    descripcion: {
        type: String,
        default: ''
    },
    precio: {
        type: Number,
        required: [true, 'El precio es obligatorio']
    }
});

ProductoSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}

module.exports = model( 'Producto', ProductoSchema );
