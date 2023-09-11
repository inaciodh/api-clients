import { Body, Controller, Post } from "@nestjs/common"
import { UsersServices } from "./users.service"
import { CreateUserDto } from "./dtos/createuser.dto"


@Controller("user")
export class UsersController {
  constructor(private userService: UsersServices) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.userService.create(data) 
  }
}
