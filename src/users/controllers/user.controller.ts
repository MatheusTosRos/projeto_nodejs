import { Request, Response } from "express";
import userService from "../services/user.service";

class UserController {

    async create(req: Request, res: Response) {
        const createdUser = await userService.create(req.body)
        res.status(201)
        return res.json(createdUser)
    }

    async findAll(req: Request, res: Response) {
        const findedUsers = await userService.findAll()
        return res.json(findedUsers)
    }

    async findById(req: Request, res: Response) {
        const findedUser = await userService.findById(req.params.id)
        return res.json(findedUser)
    }

    async update(req: Request, res: Response) {
        const updatedUser = await userService.update(req.params.id, req.body)
        return res.json(updatedUser)
    }

    async deleteById(req: Request, res: Response){
        const deletedUser = await userService.deleteById(req.params.id)
        return res.json(deletedUser)
    }
}

export default new UserController()