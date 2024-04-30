import { Request, Response } from "express";
import taskService from "../services/task.service";

class TaskController {

    async create(req: Request, res: Response) {
        const createdTask = await taskService.create(req.body)
        res.status(201)
        return res.json(createdTask)
    }

    async findAll(req: Request, res: Response) {
        const findedTasks = await taskService.findAll()
        return res.json(findedTasks)
    }

    async findById(req: Request, res: Response) {
        const findedTask = await taskService.findById(req.params.id)
        return res.json(findedTask)
    }

    async update(req: Request, res: Response) {
        const updatedBook = await taskService.update(req.params.id, req.body)
        return res.json(updatedBook)
    }

    async deleteById(req: Request, res: Response) {
        const deletedTask = await taskService.deleteById(req.params.id)
        return res.json(deletedTask)
    }

    async findUserById(req: Request, res: Response) {
        try {
            const userTasks = await taskService.findUserById(req.params.id)
            return res.status(200).json(userTasks)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findPendente(req: Request, res: Response) {
        try {
            const tasksPendente = await taskService.findPendente()
            return res.status(200).json(tasksPendente)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findInProgresso(req: Request, res: Response) {
        try {
            const tasksInProgresso = await taskService.findInProgresso()
            return res.status(200).json(tasksInProgresso)
        } catch (error) {
            return res.status(400).json(error)
        }
    }

    async findCompleta(req: Request, res: Response) {
        try {
            const tasksCompleta = await taskService.findCompleta()
            return res.status(200).json(tasksCompleta)
        } catch (error) {
            return res.status(400).json(error)
        }
    }
}

export default new TaskController()