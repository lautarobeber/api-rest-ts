import express from 'express'
import diariesRoutes from './routes/diaries'

const app = express()

app.use(express.json())

const PORT = 3000

// _ Ignora el parametro
app.get('/ping', (_req, res) => {
  console.log('alguien pinguino')
  res.send('pong')
})

app.use('/api/diaries', diariesRoutes)

app.listen(PORT, () => {
  console.log(`server running on port ${PORT} `)
})
