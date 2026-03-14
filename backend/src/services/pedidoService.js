import prisma from '../lib/prisma.js'

export async function criarPedido (clienteId, dados) {

    const { endereco_id, itens } = dados

    let total = 0

    const precos = {}

    for (const item of itens) {
        const variante = await prisma.produtoVariante.findUnique ({
            where: { id: item.produto_variante_id }
        })
        total += variante.preco * item.quantidade
        precos[item.produto_variante_id] = variante.preco
    }

    const pedido = await prisma.pedido.create ({
        data: {
            cliente_id: clienteId,
            endereco_id,
            preco_total_pedido: total,
            itens: {
                create: itens.map (item => ({
                produto_variante_id: item.produto_variante_id,
                quantidade: item.quantidade,
                preco_unit_pedido: precos[item.produto_variante_id]
                }))
            }
        }
    })

    return pedido
}

export async function listarPedidosCliente (clienteId) {
    return await prisma.pedido.findMany ({
        where: { cliente_id: clienteId }
    })
}

export async function buscarPedido (id, clienteId) {
    return await prisma.pedido.findUnique ({
        where: { 
            id: Number(id),
            cliente_id: clienteId
        },
        include: {
            itens: true
        }
    })
}