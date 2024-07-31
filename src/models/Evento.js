
import mongoose from "mongoose";

const EventoSchema = new mongoose.Schema(
    {
        titulo: {
            type: String,
            required: true,
        },

        notas: {
            type: String,

        },
        inicio: {
            type: Date,
            required: true,
        },
        fin: {
            type: Date,
            required: true,
        },
        usuario: {
            type: Schema.Types.ObjectId,
            ref: 'Usuario'
        },
    }

);

const Evento = mongoose.model('Evento', EventoSchema)

export default Evento
