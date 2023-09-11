import { Module } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { UsersServices } from "./users.service";
import {UsersRepository} from "../users/repositories/users.repository"
import { UserMemoryRepository } from "./repositories/in-memory/user-in-memopry.repository";
import { PrismaService } from "src/database/prisma.service";
import { UsersPrismaRepository } from "./repositories/prisma/user.prisma.repository";


@Module({
    controllers: [UsersController],
    providers: [UsersServices, PrismaService, {
        provide: UsersRepository,
        useClass: UsersPrismaRepository,
    }]
})

export class UsersMoudule {}