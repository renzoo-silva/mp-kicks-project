import { criarVariante, listarVariantes, atualizarVariante, deletarVariante  } from '../services/varianteService.js'

export async function criarVarianteController (req, res) {

    try {
        const variantes = await criarVariante (req.params.id, req.body)
        res.status(201).json(variantes)

    } catch (error){
        console.log(error)
        res.status(500).json({
            error: 'Erro ao criar variante'
        })
    }  
}

export async function listarVariantesController (req, res) {

    try {
        const variantes = await listarVariantes (req.params.id)
        res.status(200).json(variantes)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'Erro ao listar variantes'
        })
    }
}

export async function atualizarVarianteController (req, res) {

    try {
        const variantes = await atualizarVariante (req.params.varianteId, req.params.id, req.body)
        if (!variantes) {
            return res.status(404).json ({ error: 'Variante não encontrada' })
        }
        res.status(200).json(variantes)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'Erro ao atualizar variante'
        })
    }
}

export async function deletarVarianteController (req, res) {

    try {
        const variantes = await deletarVariante (req.params.varianteId, req.params.id) 
        if (!variantes) {
            return res.status(404).json ({ error: 'Variante não encontrada' })
        }
        res.status(200).json(variantes)

    } catch (error) {
        console.log(error)
        res.status(500).json({
            error: 'Erro ao deletar variante'
        })
    }
}