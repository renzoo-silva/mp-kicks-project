import prisma from '../lib/prisma.js'

export async function criarVariante (produtoId, dados) {

    const { fotos, ...dadosVariante } = dados

    return await prisma.produtoVariante.create ({
        data: {
            produto_id: Number(produtoId),
            ...dadosVariante,
            fotos: {
                create: fotos.map (url => ({ foto: url }))
            }
        }
    })
}

export async function listarVariantes (produtoId) {

    return await prisma.produtoVariante.findMany({
        where: { produto_id: Number(produtoId)}
    })
}

export async function atualizarVariante (id, produtoId, dados) {

    const { fotos, ...dadosVariante } = dados

    const data = { ...dadosVariante }

    if (fotos) {
        data.fotos = {
            deleteMany: {},
            create: fotos.map(url => ({ foto: url }))
        }
    }

    return await prisma.produtoVariante.update ({
        where: { 
            id: Number(id),
            produto_id: Number(produtoId)
        },
        data
    })
}

export async function deletarVariante (id, produtoId) {

    return await prisma.produtoVariante.update({
        where: {
            id: Number(id),
            produto_id: Number(produtoId)
        },
        data: { ativo: false }
    })
}