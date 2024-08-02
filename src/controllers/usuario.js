import Usuario from "../models/Usuario.js"
//import express from "express"
import { validationResult } from 'express-validator'


export const login = (req, res) => {
    return res.send({
        status: true,
        mensaje: "login"
    })

}
export const crearNuevo = async (req, res) => {
    let datos = req.body
    const errores = validationResult(req)
    if (!errores.isEmpty()) {
        return res.status(400).send({
            estado: false,
            errores: errores.mapped()
        })
    }
    const usuario = new Usuario(datos)
    await usuario.save()
    res.status(201).send({
        estado: true,
        msg: 'Registro Exitoso !',
        usuario
    })
}

export const renovarToken = (req, res) => {
    return res.send({
        status: true,
        mensaje: "rnv"
    })
}