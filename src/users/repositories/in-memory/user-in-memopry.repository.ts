import { CreateUserDto } from "src/users/dtos/createuser.dto";
import { User } from "src/users/entities/users.entity";
import { UsersRepository } from "../users.repository";

export class UserMemoryRepository implements UsersRepository{

    private database: User[] = []

    async create(data: CreateUserDto): Promise<User> {
        const newUser = new User()
        Object.assign(newUser, {
            ...data
        })
        this.database.push(newUser)

        return newUser
    }
    
}