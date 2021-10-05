const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { crearPlazo,
        obtenerPlazos,
        obtenerPlazo,
        actualizarPlazo, 
        borrarPlazo } = require('../controllers/Plazos');

const router = Router();

//  Obtener todos los Plazos 
router.get('/', obtenerPlazos );

// Obtener un Plazo por id 
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], obtenerPlazo );

// Crear Plazo
router.post('/', [ 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('semanas','El numero de semanas es obligatorio').not().isEmpty(),
    check('abono_normal','El abono normal es obligatorio').not().isEmpty(),
    check('abono_puntual','El abono puntual es obligatorio').not().isEmpty(),
    validarCampos
], crearPlazo );

// Actualizar Plazo
router.put('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], actualizarPlazo );

// Borrar un Plazo
router.delete('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], borrarPlazo);

module.exports = router;