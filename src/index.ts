import express from 'express'
const app = express()
app.use(express.json())
app.post('/filmes', (req,res)=>{
    res.send('filme cadastrado com sucesso')
})
app.get('/filmes', (req,res)=>{
    res.send('filme listados com sucesso')
})
app.listen(3000,()=>{
    console.log('servidor rodando na porta 3000')
})