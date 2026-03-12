import express from 'express'
import cors from 'cors'
import produtosRouter from './routes/produtos.js'
import clientesRouter from './routes/clientes.js'

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use('/produtos', produtosRouter)
app.use('/clientes', clientesRouter)

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})

export default app