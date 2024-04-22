import userSchema from '../schemas/user.schema'
import { UserType } from '../types/user.type'

class UserService {
    async create(user: UserType) {
        const createdUser = await userSchema.create(user)
        return createdUser
    }

    async findAll() {
        const findedUsers = await userSchema.find()
        return findedUsers
    }

    async findById(id: String) {
        const findedUser = await userSchema.findById(id)
        return findedUser
    }

    async update(id: string, user: UserType) {
        const updateduser = await userSchema.findByIdAndUpdate(id, {
            nome: user.nome,
            peso: user.peso,
            email: user.email,
            senha: user.senha,
        })
    }

    async deleteById(id: string) {
        try {
            await userSchema.findByIdAndDelete(id)
            return "Usuário Removido"
        } catch (error) {
            throw new Error("Erro ao remover a usuário: " + error)
        }
    }

}

export default new UserService()