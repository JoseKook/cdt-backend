const { Schema, model } = require('mongoose');

const PlazoSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio'],
        unique: true
    },
    semanas: {
        type: Number,
        required: [true, 'El numero de semanas es obligatorio']
    },
    abono_normal: {
        type: Number,
        required: [true, 'El abono normal es obligatorio']
    },
    abono_puntual: {
        type: Number,
        required: [true, 'El abono puntual es obligatorio']
    }
});

PlazoSchema.methods.toJSON = function() {
    const { __v, ...data  } = this.toObject();
    return data;
}

module.exports = model( 'Plazo', PlazoSchema );
