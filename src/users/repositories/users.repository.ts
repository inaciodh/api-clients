import { CreateUserDto } from "../dtos/createuser.dto";
import { User } from "../entities/users.entity";


export abstract class UsersRepository {
    abstract create(data: CreateUserDto):  Promise<User>
}