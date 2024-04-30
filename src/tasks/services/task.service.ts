import taskSchema from "../schemas/task.schema"
import { TaskType } from "../types/task.type"

class TaskService {
    async create(task: TaskType) {
        const createdTask = await taskSchema.create(task)
        return createdTask
    }

    async findAll() {
        const findedTasks = await taskSchema.find()
        return findedTasks
    }

    async findById(id: string) {
        const findedTask = await taskSchema.findById(id)
        return findedTask
    }

    async update(id: string, task: TaskType) {
        const updatedTask = await taskSchema.findByIdAndUpdate(id, {
            titulo: task.titulo,
            descricao: task.descricao,
            dataInicial: task.dataInicial,
            dataFinal: task.dataFinal,
            tipo: task.tipo,
            status: task.status,
            categoria: task.categoria,
            usuario: task.usuario,
        })
    }

    async deleteById(id: string) {
        try {
            await taskSchema.findByIdAndDelete(id)
            return "Tarefa Removida"
        } catch (error) {
            throw new Error("Erro ao remover a tarefa: " + error)
        }
    }



}

export default new TaskService()