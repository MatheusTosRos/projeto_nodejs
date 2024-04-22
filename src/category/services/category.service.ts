import categorySchema from '../schemas/category.schema'
import { CategoryType } from '../types/category.type'

class CategoryService {
    async create(category: CategoryType) {
        const createdCategory = await categorySchema.create(category)
        return createdCategory
    }

    async findAll() {
        const findedCategory = await categorySchema.find()
        return findedCategory
    }

    async findById(id: String) {
        const findedCategory = await categorySchema.findById(id)
        return findedCategory
    }

    async update(id: string, category: CategoryType) {
        const updatedCategory = await categorySchema.findByIdAndUpdate(id, {
            nome: category.nome,
            cor: category.cor
        })
    }

    async deleteById(id: string) {
        try {
            await categorySchema.findByIdAndDelete(id)
            return "Categoria Removida"
        } catch (error) {
            throw new Error("Erro ao remover a categoria: " + error)
        }
    }

}

export default new CategoryService()