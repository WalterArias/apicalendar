
import express from 'express'
import cors from 'cors'
import 'dotenv/config'
import conectarDb from './src/models/config.js'
import router from './src/routes/usuario.js'

const app = express()
conectarDb()
app.use(cors())

//ruta por defecto
app.use(express.static('public'))
app.use(express.json())
app.use('/api/usuario', router)




app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en puerto ${process.env.PORT}`)
}) 