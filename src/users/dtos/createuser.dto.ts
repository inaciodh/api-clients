export class CreateUserDto {
    email: string
    telefone: string
    cargo: string
    outroCargo: string | null
    nomeCondominio: string
    enderecoCondominio: string
    quantidadeMoradores: string
    quantidadeUnidades: string
    interesse: string
    comoSoube: string
    mensagem: string
    receberNewsletter: string | null
}