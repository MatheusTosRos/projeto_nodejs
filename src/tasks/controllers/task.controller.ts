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
}

export default new TaskController()