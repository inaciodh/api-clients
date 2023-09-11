-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "cargo" TEXT NOT NULL,
    "outroCargo" TEXT,
    "nomeCondominio" TEXT NOT NULL,
    "enderecoCondominio" TEXT NOT NULL,
    "quantidadeMoradores" TEXT NOT NULL,
    "quantidadeUnidades" TEXT NOT NULL,
    "interesse" TEXT NOT NULL,
    "comoSoube" TEXT NOT NULL,
    "mensagem" TEXT,
    "receberNewsletter" TEXT,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
