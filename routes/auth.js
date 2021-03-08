const { Router } = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');

const router = Router();

// - - - CREAR UN NUEVO USUARIO - - - 
router.post('/new', crearUsuario)

// - - - LOGIN DE USUARIO - - -
router.post('/', loginUsuario)

// - - - VALIDAR Y REVALIDAR EL TOKEN - - -
router.get('/renew', revalidarToken)

module.exports = router;