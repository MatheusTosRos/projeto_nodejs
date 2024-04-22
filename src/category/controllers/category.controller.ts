import { Request, Response } from "express";
import categoryService from "../services/category.service";

class CategoryController {

    async create(req: Request, res: Response) {
        const createdCategory = await categoryService.create(req.body)
        res.status(201)
        return res.json(createdCategory)
    }

    async findAll(req: Request, res: Response) {
        const findedCategory = await categoryService.findAll()
        return res.json(findedCategory)
    }

    async findById(req: Request, res: Response) {
        const findedCategory = await categoryService.findById(req.params.id)
        return res.json(findedCategory)
    }

    async update(req: Request, res: Response) {
        const updatedCategory = await categoryService.update(req.params.id, req.body)
        return res.json(updatedCategory)
    }

    async deleteById(req: Request, res: Response){
        const deletedCategory = await categoryService.deleteById(req.params.id)
        return res.json(deletedCategory)
    }
}

export default new CategoryController()