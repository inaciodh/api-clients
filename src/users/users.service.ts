import { Injectable } from "@nestjs/common"
import { CreateUserDto } from "./dtos/createuser.dto"
import {UsersRepository} from "../users/repositories/users.repository"

@Injectable()
export class UsersServices {

    constructor(private userRepository: UsersRepository) {}

    async create(data: CreateUserDto) {
        return await this.userRepository.create(data)
    }
}