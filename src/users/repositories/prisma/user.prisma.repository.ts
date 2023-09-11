import { PrismaService } from 'src/database/prisma.service';
import { CreateUserDto } from '../../dtos/createuser.dto';
import { User } from '../../entities/users.entity';
import { UsersRepository } from '../users.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersPrismaRepository implements UsersRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const user = new User();
    Object.assign(user, {
      ...data,
    });

    const newuser = await this.prisma.user.create({
      data: {
        id: user.id,
        cargo: user.cargo,
        comoSoube: user.comoSoube,
        email: user.email,
        outroCargo: user.outroCargo,
        enderecoCondominio: user.enderecoCondominio,
        interesse: user.interesse,
        nomeCondominio: user.nomeCondominio,
        quantidadeMoradores: user.quantidadeMoradores,
        quantidadeUnidades: user.quantidadeUnidades,
        telefone: user.telefone,
        mensagem: user.mensagem,
        receberNewsletter: user.receberNewsletter
      },
    });

    return newuser;
  }

}