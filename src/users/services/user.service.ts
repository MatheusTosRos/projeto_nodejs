import userSchema from '../schemas/user.schema'
import { UserType } from '../types/user.type'

class UserService{
    async create(user: UserType){
        const createdUser = await userSchema.create(user)
        return createdUser
    }

    async finALl(){
        const findedUsers = await userSchema.find()
        return findedUsers
    }

    async findById(id: String){
        const findedUser = await userSchema.findById(id)
        return findedUser
    }

}