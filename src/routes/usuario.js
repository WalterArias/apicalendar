/**
 * Rutas de los usuarios
 * host +api+auth
 */


import express from "express";
const router = express.Router()
import { login, crearNuevo, renovarToken } from "../controllers/usuario.js";

//login
router.post('/', login)
router.post('/nuevo', crearNuevo)
router.post('/renueva', renovarToken)


export default router;