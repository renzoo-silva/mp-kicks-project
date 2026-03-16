import prisma from '../lib/prisma.js'

export async function criarEndereco (clienteId, dados) {

    return await prisma.endereco.create ({
        data: {
            cliente_id: clienteId,
            ...dados
        }
    })
}

export async function listarEnderecos (clienteId) {

    return await prisma.endereco.findMany({
        where: { cliente_id: clienteId}
    })
}

export async function atualizarEndereco (id, clienteId, dados) {
    
    return await prisma.endereco.update ({
        where: {
            id: Number(id),
            cliente_id: clienteId
        },
        data: {
            ...dados
        }
    })
}

export async function deletarEndereco (id, clienteId) {

    return await prisma.endereco.delete ({
        where: {
            id: Number(id),
            cliente_id: clienteId
        }
    })
}