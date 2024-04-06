import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    titulo: String, 
    descricao: String,
    dataInicial: Date,
    dataFinal: Date,
    tipo: String,
    categoria: String,
    status: String,
    usuario: String,
}, { timestamps: true });

export default model("Task", taskSchema)