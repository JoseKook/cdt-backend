const { Router } = require('express');
const { check } = require('express-validator');

const { validarCampos } = require('../middlewares/validar-campos');

const { crearProducto,
        obtenerProductos,
        obtenerProducto,
        actualizarProducto, 
        borrarProducto } = require('../controllers/productos');

const router = Router();

//  Obtener todos los productos 
router.get('/', obtenerProductos );

// Obtener un producto por id 
router.get('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], obtenerProducto );

// Crear producto
router.post('/', [ 
    check('nombre','El nombre es obligatorio').not().isEmpty(),
    check('sku','El SKU es obligatorio').not().isEmpty(),
    check('precio','El precio es obligatorio').not().isEmpty(),
    validarCampos
], crearProducto );

// Actualizar producto
router.put('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], actualizarProducto );

// Borrar un producto
router.delete('/:id',[
    check('id', 'No es un id de Mongo válido').isMongoId(),
    validarCampos,
], borrarProducto);

module.exports = router;