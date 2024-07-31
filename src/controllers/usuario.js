import Usuario from "../models/Usuario.js"
import express from "express"

export const login = (req, res) => {
    return res.send({
        status: true,
        mensaje: "login"
    })

}
export const crearNuevo = async (req, res) => {
    let datos = req.body    
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