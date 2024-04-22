import { Schema, model } from 'mongoose'

const taskSchema = new Schema({
    titulo: String, 
    descricao: String,
    dataInicial: Date,
    dataFinal: Date,
    tipo: String,
    status: String,
    categoria: { type: Schema.Types.ObjectId, ref: 'Category' },
    usuario: { type: Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

export default model("Task", taskSchema)