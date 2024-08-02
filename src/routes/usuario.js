/**
 * Rutas de los usuarios
 * host +api+auth
 */


import express from "express";
const router = express.Router()
import { check } from 'express-validator'
import { login, crearNuevo, renovarToken } from "../controllers/usuario.js";

//login
router.post('/', login)
router.post('/nuevo', [
    check('nombre', 'debe ingresar un nombre').not().isEmpty(),
    check('email', 'email obligatorio').isEmail(),
    check('password', 'password con longitud de 6').isLength({ min: 6 })
], crearNuevo)
router.post('/renueva', renovarToken)


export default router;