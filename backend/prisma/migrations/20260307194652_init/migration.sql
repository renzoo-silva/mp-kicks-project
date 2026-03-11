-- CreateEnum
CREATE TYPE "StatusPedido" AS ENUM ('PENDENTE', 'CONFIRMADO', 'SAIU_PARA_ENTREGA', 'ENTREGUE', 'CANCELADO');

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "marca" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "categoria" TEXT NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "FotoProduto" (
    "id" SERIAL NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "FotoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "nota" INTEGER NOT NULL,
    "comentario" TEXT NOT NULL,
    "data_avaliacao" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ProdutoVariante" (
    "id" SERIAL NOT NULL,
    "produto_id" INTEGER NOT NULL,
    "cor" TEXT NOT NULL,
    "tamanho" DOUBLE PRECISION NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "estoque" INTEGER NOT NULL,

    CONSTRAINT "ProdutoVariante_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nome_cliente" TEXT NOT NULL,
    "apelido" TEXT NOT NULL,
    "foto_perfil" TEXT NOT NULL,
    "data_de_nascimento" TIMESTAMP(3) NOT NULL,
    "documento" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "telefone" TEXT NOT NULL,
    "data_cadastro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "ativo" BOOLEAN NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pedido" (
    "id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "endereco_id" INTEGER NOT NULL,
    "data_pedido" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "preco_total_pedido" DOUBLE PRECISION NOT NULL,
    "status" "StatusPedido" NOT NULL DEFAULT 'PENDENTE',

    CONSTRAINT "Pedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ItemPedido" (
    "id" SERIAL NOT NULL,
    "pedido_id" INTEGER NOT NULL,
    "produto_variante_id" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,
    "preco_unit_pedido" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ItemPedido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Endereco" (
    "id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "rua" TEXT NOT NULL,
    "numero" INTEGER NOT NULL,
    "cidade" TEXT NOT NULL,
    "cep" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "principal" BOOLEAN NOT NULL,

    CONSTRAINT "Endereco_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pagamento" (
    "id" SERIAL NOT NULL,
    "pedido_id" INTEGER NOT NULL,
    "forma_pagamento" TEXT NOT NULL,
    "status_pagamento" TEXT NOT NULL,
    "data_pagamento" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "valor_pagamento" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pagamento_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "InfoCartao" (
    "id" SERIAL NOT NULL,
    "cliente_id" INTEGER NOT NULL,
    "ultimos_4_digitos" INTEGER NOT NULL,
    "bandeira" TEXT NOT NULL,
    "nome_titular" TEXT NOT NULL,
    "mes_expiracao" INTEGER NOT NULL,
    "ano_expiracao" INTEGER NOT NULL,

    CONSTRAINT "InfoCartao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_email_key" ON "Cliente"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_telefone_key" ON "Cliente"("telefone");

-- CreateIndex
CREATE UNIQUE INDEX "Pagamento_pedido_id_key" ON "Pagamento"("pedido_id");

-- AddForeignKey
ALTER TABLE "FotoProduto" ADD CONSTRAINT "FotoProduto_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Avaliacao" ADD CONSTRAINT "Avaliacao_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ProdutoVariante" ADD CONSTRAINT "ProdutoVariante_produto_id_fkey" FOREIGN KEY ("produto_id") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pedido" ADD CONSTRAINT "Pedido_endereco_id_fkey" FOREIGN KEY ("endereco_id") REFERENCES "Endereco"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ItemPedido" ADD CONSTRAINT "ItemPedido_produto_variante_id_fkey" FOREIGN KEY ("produto_variante_id") REFERENCES "ProdutoVariante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Endereco" ADD CONSTRAINT "Endereco_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Pagamento" ADD CONSTRAINT "Pagamento_pedido_id_fkey" FOREIGN KEY ("pedido_id") REFERENCES "Pedido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "InfoCartao" ADD CONSTRAINT "InfoCartao_cliente_id_fkey" FOREIGN KEY ("cliente_id") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
