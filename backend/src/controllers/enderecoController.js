import { criarEndereco, listarEnderecos, atualizarEndereco, deletarEndereco } from '../services/enderecoService.js'

export async function criarEnderecoController (req, res) {

    const clienteId = req.clienteId

    try {
        const endereco = await criarEndereco (clienteId, req.body)
        res.status(201).json(endereco)

    } catch (error) {
        console.log (error)
        res.status(500).json ({
            error: 'Erro ao criar endereço'
        })

    }
}

export async function listarEnderecoController (req, res) {

    const clienteId = req.clienteId

    try {
        const endereco = await listarEnderecos (clienteId)
        res.status(200).json(endereco)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao listar endereços'
        })
    }
}

export async function atualizarEnderecoController (req, res) {
    
    try {
        const endereco = await atualizarEndereco (req.params.id, req.clienteId, req.body)
        if (!endereco) {
            return res.status(404).json ({ error: 'Endereço não encontrado'})
        } 
        res.status(200).json(endereco)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao atualizar endereço'
        })
    }
}

export async function deletarEnderecoController (req, res) {

    try {
        const endereco = await deletarEndereco (req.params.id, req.clienteId)
        if (!endereco) {
            return res.status(404).json ({ error: 'Endereço não encontrado'})
        } 
        res.status(200).json(endereco)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao deletar endereço'
        })
    }
}