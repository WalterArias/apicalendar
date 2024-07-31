
import mongoose from "mongoose";

const UsuarioSchema = new mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },

        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true,
        },
        foto: {
            type: String,
        },
        creado: {
            type: Date,
            default: Date.now,
        },
    }

);

const Usuario = mongoose.model('Usuario', UsuarioSchema)

export default Usuario
