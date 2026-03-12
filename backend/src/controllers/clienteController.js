import { criarCliente, loginCliente, buscarCliente, atualizarCliente, deletarCliente } from '../services/clienteService.js'

export async function criarClienteController (req, res) {
     
    try {
        const cliente = await criarCliente(req.body)
        res.status(201).json(cliente)
    
    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao criar cliente'
        })
    }
}

export async function loginClienteController (req, res) {

    try {
        const { email, senha } = req.body
        const cliente = await loginCliente(email, senha)
        res.status(200).json(cliente)
    
    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao fazer login do cliente'
        })
    }
}

export async function buscarClienteController (req, res) {

    try {
        const cliente = await buscarCliente (req.params.id) 
        if (!cliente) {
            return res.status(404).json ({ error: 'Cliente não encontrado'})
        }
        res.status(200).json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao buscar cliente'
        })
    }
}

export async function atualizarClienteController (req, res) {

    try {
        const cliente = await atualizarCliente (req.params.id, req.body)
        if (!cliente) {
            return res.status(404).json ({ error: 'Cliente não encontrado'})
        } 
        res.status(200).json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao atualizar cliente'
        })
    }
}

export async function deletarClienteController (req, res) {

    try {
        const cliente = await deletarCliente (req.params.id)
        if (!cliente) {
            return res.status(404).json ({ error: 'Cliente não encontrado'})
        } 
        res.status(200).json(cliente)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao deletar cliente'
        })
    }
}

