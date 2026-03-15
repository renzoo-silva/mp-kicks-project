import { criarPedido, listarPedidosCliente, buscarPedido, cancelarPedido } from "../services/pedidoService.js";

export async function criarPedidoController (req, res) {

    const clienteId = req.clienteId
    
    try {
        const pedido = await criarPedido (clienteId, req.body)
        res.status(201).json(pedido)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao criar pedido'
        })
    }
}

export async function listarPedidosClienteController (req, res) {
    
    const clienteId = req.clienteId

    try {
        const pedido = await listarPedidosCliente (clienteId)
        res.status(200).json(pedido)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao listar pedidos'
        })
    }
}

export async function buscarPedidoController (req, res) {

    try {
        const pedido = await buscarPedido (req.params.id, req.clienteId)
        if (!pedido) {
            return res.status(404).json ({ error: "Pedidos não encontrados"})
        }
        res.status(200).json(pedido)
    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao buscar pedidos'
        })
    }
}

export async function cancelarPedidoController (req, res) {

    try {
        const pedido = await cancelarPedido (req.params.id, req.clienteId)
        if (!pedido) {
            return res.status(404).json ({ error: "Pedidos não encontrados"})
        }
        res.status(200).json(pedido)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao cancelar pedido'
        })
    }
}