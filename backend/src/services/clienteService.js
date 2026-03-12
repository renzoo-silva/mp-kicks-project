import prisma from '../lib/prisma.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export async function criarCliente (dados) {
    const { email, senha, ...dadosCliente } = dados

    const senhaHash = await bcrypt.hash(senha, 10)
    const cliente = await prisma.cliente.create ({
        data: {
            ...dadosCliente,
            email,
            senha: senhaHash
        }
    })

    const { senha: _, ...clienteSemSenha} = cliente
    return clienteSemSenha   
}

export async function loginCliente (email, senha) {
    const cliente = await prisma.cliente.findUnique ({
        where: { email }
    })

    if (!cliente) {
        throw new Error ('E-mail ou senha incorretos')
    }

    const senhaCorreta = await bcrypt.compare(senha, cliente.senha)

    if (!senhaCorreta) {
        throw new Error ('E-mail ou senha incorretos')
    }

    const token = jwt.sign (
        { id: cliente.id },
        process.env.JWT_SECRET,
        { expiresIn: '1d' }
    )

    const { senha: _, ...clienteSemSenha} = cliente
    return { cliente: clienteSemSenha, token }
}

export async function buscarCliente (id) {
    const cliente = await prisma.cliente.findUnique ({
        where: { id: Number(id) }
    })

     if (!cliente) {
        throw new Error ('Cliente não encontrado!')
    }

    const { senha: _, ...clienteSemSenha} = cliente
    return clienteSemSenha
}

export async function atualizarCliente (id, dados) {
    const { email, senha, ...dadosCliente } = dados

    const data = { ...dadosCliente }

    if (email) data.email = email
    if (senha) data.senha = await bcrypt.hash(senha, 10)
    const cliente = await prisma.cliente.update ({
        where: { id: Number(id) },
        data
    })

    const { senha: _, ...clienteSemSenha} = cliente
    return clienteSemSenha   
}

export async function deletarCliente(id) {
    const cliente = await prisma.cliente.delete({
        where: { id: Number(id) }
    })

    const { senha: _, ...clienteSemSenha} = cliente
    return clienteSemSenha
}