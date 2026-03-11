import prisma from '../lib/prisma.js'

export async function listarProdutos() {
    return await prisma.produto.findMany()
}

export async function criarProduto(dados) {
    const { fotos, ...dadosProduto } = dados
    return await prisma.produto.create({
        data: {
            ...dadosProduto,
            foto: {
                create: fotos.map (url => ({ foto: url }))
            }
        }
    })
}

export async function buscarProdutoPorId(id) {
    return await prisma.produto.findUnique ({
        where: { id: Number(id) }
    })
}

export async function atualizarProduto (id, dados) {
    const { fotos, ...dadosProduto } = dados
    return await prisma.produto.update ({
        where: { id: Number(id)},
        data: {
            ...dadosProduto,
            foto: {
                deleteMany: {},
                create: fotos.map (url => ({ foto: url }))
            }
        }
    })
}

export async function deletarProduto (id) {
    await prisma.fotoProduto.deleteMany ({
        where: { produto_id: Number(id) }
    })

    return await prisma.produto.delete ({
        where: { id: Number(id) }
    })
}