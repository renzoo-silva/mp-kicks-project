-- CreateTable
CREATE TABLE "FotoVariante" (
    "id" SERIAL NOT NULL,
    "variante_id" INTEGER NOT NULL,
    "foto" TEXT NOT NULL,

    CONSTRAINT "FotoVariante_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FotoVariante" ADD CONSTRAINT "FotoVariante_variante_id_fkey" FOREIGN KEY ("variante_id") REFERENCES "ProdutoVariante"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
