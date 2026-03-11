import { listarProdutos, criarProduto, buscarProdutoPorId, atualizarProduto, deletarProduto } from '../services/produtoService.js'

export async function listarProdutosController (req, res) {

    try {
        const produtos = await listarProdutos()
        res.json(produtos)
    
    } catch (error) {
        res.status(500).json ({
            error: 'Erro ao buscar produtos'
        })
    }
}

export async function criarProdutoController (req, res) {

    try {
        const produtos = await criarProduto(req.body)
        res.status(201).json(produtos)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao criar produto'
        })
    }

}

export async function buscarProdutoPorIdController (req, res) {

    try {
        const produto = await buscarProdutoPorId (req.params.id)
        if (!produto) {
            return res.status(404).json ({ error: 'Produto não encontrado'})
        }
        res.status(200).json(produto)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao buscar produto por id'
        })
    }
}

export async function atualizarProdutoController (req, res) {

    try {
        const produto = await atualizarProduto (req.params.id, req.body)
        if (!produto) {
            return res.status(404).json ({ error: 'Produto não encontrado'})
        } 
        res.status(200).json(produto)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao atualizar produto'
        })
    }
}

export async function deletarProdutoController (req, res) {

    try {
        const produto = await deletarProduto (req.params.id)
        if (!produto) {
            return res.status(404).json ({ error: 'Produto não encontrado'})
        } 
        res.status(200).json(produto)

    } catch (error) {
        console.log(error)
        res.status(500).json ({
            error: 'Erro ao deletar produto'
        })
    }
}