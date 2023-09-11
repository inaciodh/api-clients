import { randomUUID } from "node:crypto"

export class User {
    readonly id : string
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
    mensagem: string | null
    receberNewsletter: string | null

    constructor(){
        this.id = randomUUID()
    }
}

// nomeCompleto: z.string().nonempty({ message: "Campo obrigatório" }),
//   email: z.string().email({ message: "E-mail inválido" }),
//   telefone: z.string().min(10, { message: "Telefone inválido" }),
//   cargo: z.enum(["Morador", "Síndico", "Administrador de Condomínio", "Outro"]),
//   outroCargo: z.string(),
//   nomeCondominio: z.string().nonempty({ message: "Campo obrigatório" }),
//   enderecoCondominio: z.string().nonempty({ message: "Campo obrigatório" }),
//   quantidadeMoradores: z.string().min(1, { message: "Quantidade inválida" }),
//   quantidadeUnidades: z.string().min(1, { message: "Quantidade inválida" }),
//   interesse: z.array(z.enum(["Conhecer mais sobre o PUKA", "Receber um orçamento"])),
//   comoSoube: z.enum(["Redes Sociais", "Amigos/Família", "Publicidade Online", "Evento/Feira", "Outro"]),
//   mensagem: z.string(),
//   receberNewsletter: z.boolean(),